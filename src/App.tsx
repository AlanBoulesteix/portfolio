import './App.css';
import About from './component/About/About';
import Experiences from './component/Experiences/Experiences';
import Home from './component/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from './component/Projects/Projects';

export default function App() {
  return (
        <>
          <BrowserRouter>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/about" element={<About/>}/>
              <Route path="/experiences" element={<Experiences/>} />
              <Route path="/projects" element={<Projects/>} />
          </Routes>
        </BrowserRouter>
    </>
  );
}

