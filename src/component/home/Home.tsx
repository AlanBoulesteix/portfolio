import { useState } from 'react';
import About from '../About/About';
import ExperiencesPage from '../ExperiencesPage/ExperiencesPage';
import Navbar from '../Navbar/Navbar';
import { Profile } from '../Presentation/Profile';
import './Home.styles.css';
import useIntersectionObserver from '../../hook/useIntersectionObserver';
import SchoolProject from '../SchoolProject/SchoolProject';

export default function Home() {
  const [activeSection, setActiveSection] = useState('about');

  useIntersectionObserver(setActiveSection);

  return (
    <>
      <div className="homeDiv">
        <div className="navbar">
          <Profile />
          <Navbar activeSection={activeSection} />
        </div>
        <div className="content">
          <About />
          <ExperiencesPage />
          <SchoolProject />
        </div>
      </div>
    </>
  );
}
