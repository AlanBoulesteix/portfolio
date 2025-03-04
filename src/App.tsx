import './App.css';
import Home from './component/Home/Home';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <>
      <SpeedInsights />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
