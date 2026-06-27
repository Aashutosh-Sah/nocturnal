/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ReactLenis as Lenis } from 'lenis/react';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import Admin from './pages/Admin';

export default function App() {
  return (
    <HelmetProvider>
      <Lenis root>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </BrowserRouter>
      </Lenis>
    </HelmetProvider>
  );
}

