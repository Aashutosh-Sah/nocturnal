import { useState, useEffect } from 'react';

type Contact = {
  id: number;
  name: string;
  company: string;
  email: string;
  phone: string;
  businessType: string;
  budget: string;
  message: string;
  projectGoal: string;
  submissionDate: string;
  status: string;
};

export default function Admin() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchContacts = async () => {
    try {
      const res = await fetch('/api/admin/contacts');
      if (!res.ok) throw new Error('Failed to fetch');
      const data = await res.json();
      setContacts(data);
    } catch (err) {
      setError('Failed to load contacts');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const updateStatus = async (id: number, status: string) => {
    try {
      await fetch(`/api/admin/contacts/${id}/status`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });
      fetchContacts();
    } catch (err) {
      console.error(err);
    }
  };

  const exportCSV = () => {
    const headers = ['ID', 'Name', 'Company', 'Email', 'Phone', 'Business Type', 'Budget', 'Project Goal', 'Message', 'Date', 'Status'];
    const csvContent = [
      headers.join(','),
      ...contacts.map(c => [
        c.id, 
        `"${c.name}"`, 
        `"${c.company}"`, 
        c.email, 
        c.phone, 
        `"${c.businessType}"`, 
        `"${c.budget}"`, 
        `"${c.projectGoal}"`,
        `"${c.message.replace(/"/g, '""')}"`, 
        c.submissionDate, 
        c.status
      ].join(','))
    ].join('\\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', 'nocturnal_contacts.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (loading) return <div className="min-h-screen bg-nocturnal-bg text-white p-10">Loading...</div>;

  return (
    <div className="min-h-screen bg-nocturnal-bg text-white p-10 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-display font-bold text-gradient">NOCTURNAL Admin</h1>
          <button onClick={exportCSV} className="bg-nocturnal-accent px-4 py-2 rounded-lg hover:bg-opacity-80 transition">
            Export CSV
          </button>
        </div>

        {error && <div className="text-red-500 mb-4">{error}</div>}

        <div className="overflow-x-auto bg-nocturnal-card border border-nocturnal-border rounded-xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-nocturnal-border">
                <th className="p-4 text-gray-400">Date</th>
                <th className="p-4 text-gray-400">Name</th>
                <th className="p-4 text-gray-400">Email</th>
                <th className="p-4 text-gray-400">Phone</th>
                <th className="p-4 text-gray-400">Project Goal</th>
                <th className="p-4 text-gray-400">Status</th>
                <th className="p-4 text-gray-400">Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr key={contact.id} className="border-b border-nocturnal-border hover:bg-white/5 transition">
                  <td className="p-4">{new Date(contact.submissionDate).toLocaleDateString()}</td>
                  <td className="p-4">
                    <div className="font-semibold">{contact.name}</div>
                    <div className="text-xs text-gray-400">{contact.company}</div>
                  </td>
                  <td className="p-4">{contact.email}</td>
                  <td className="p-4">{contact.phone}</td>
                  <td className="p-4 max-w-xs truncate">{contact.projectGoal}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      contact.status === 'New' ? 'bg-blue-500/20 text-blue-400' :
                      contact.status === 'Contacted' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-green-500/20 text-green-400'
                    }`}>
                      {contact.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <select
                      value={contact.status}
                      onChange={(e) => updateStatus(contact.id, e.target.value)}
                      className="bg-black/50 border border-nocturnal-border rounded p-1 text-sm outline-none focus:border-nocturnal-accent"
                    >
                      <option value="New">New</option>
                      <option value="Contacted">Contacted</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </td>
                </tr>
              ))}
              {contacts.length === 0 && (
                <tr>
                  <td colSpan={7} className="p-8 text-center text-gray-500">No submissions yet.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
