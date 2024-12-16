import { useState } from 'react';
import useIntersectionObserver from '../../hook/useIntersectionObserver';
import About from '../About/About';
import ExperiencesPage from '../ExperiencesPage/ExperiencesPage';
import Navbar from '../Navbar/Navbar';
import { Profile } from '../Presentation/Profile';
import SchoolProject from '../SchoolProject/SchoolProject';
import './Home.styles.css';

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
