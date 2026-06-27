import express from 'express';
import path from 'path';
import cors from 'cors';
import nodemailer from 'nodemailer';
import Database from 'better-sqlite3';
import { createServer as createViteServer } from 'vite';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Database Setup
const db = new Database('nocturnal.db');
db.exec(`
  CREATE TABLE IF NOT EXISTS contacts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    company TEXT,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    businessType TEXT,
    budget TEXT,
    message TEXT,
    projectGoal TEXT,
    submissionDate DATETIME DEFAULT CURRENT_TIMESTAMP,
    userIp TEXT,
    status TEXT DEFAULT 'New'
  )
`);

// API Routes
app.post('/api/contact', async (req, res) => {
  const { name, company, email, phone, businessType, budget, message, projectGoal } = req.body;
  const userIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

  try {
    const stmt = db.prepare(`
      INSERT INTO contacts (name, company, email, phone, businessType, budget, message, projectGoal, userIp)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);
    
    stmt.run(
      name, 
      company || '', 
      email, 
      phone, 
      businessType || '', 
      budget || '', 
      message || '', 
      projectGoal || '',
      userIp ? String(userIp) : ''
    );

    // Send Email
    if (process.env.SMTP_HOST && process.env.SMTP_USER) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const mailOptions = {
        from: process.env.SMTP_USER,
        to: 'nocturnal.pvt.ltd@gmail.com',
        subject: `New Contact Request from ${name}`,
        text: `
          New Contact Submission:
          
          Name: ${name}
          Company: ${company}
          Email: ${email}
          Phone: ${phone}
          Business Type: ${businessType}
          Budget: ${budget}
          Project Goal: ${projectGoal}
          
          Message:
          ${message}
          
          IP: ${userIp}
        `,
      };

      await transporter.sendMail(mailOptions);
    }

    res.status(200).json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ success: false, error: 'Failed to process request' });
  }
});

app.get('/api/admin/contacts', (req, res) => {
  try {
    const stmt = db.prepare('SELECT * FROM contacts ORDER BY submissionDate DESC');
    const contacts = stmt.all();
    res.json(contacts);
  } catch (error) {
    console.error('Failed to fetch contacts:', error);
    res.status(500).json({ error: 'Failed to fetch contacts' });
  }
});

app.put('/api/admin/contacts/:id/status', (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    const stmt = db.prepare('UPDATE contacts SET status = ? WHERE id = ?');
    stmt.run(status, id);
    res.json({ success: true });
  } catch (error) {
    console.error('Failed to update status:', error);
    res.status(500).json({ error: 'Failed to update status' });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
