import { useState } from 'react';
import About from '../About/About';
import ExperiencesPage from '../ExperiencesPage/ExperiencesPage';
import Navbar from '../Navbar/Navbar';
import { Profile } from '../Presentation/Profile';
import './Home.styles.css';
import useIntersectionObserver from '../../hook/useIntersectionObserver';
import SchoolProject from '../SchoolProject/SchoolProject';
import LightTrail from '../LightTrail/LightTrail';
import Contact from '../Contact/Contact';
import useIsMobile from '../../hook/useIsMobile';

export default function Home() {
  const [activeSection, setActiveSection] = useState('about');

  useIntersectionObserver(setActiveSection);
  const isMobile = useIsMobile();


  return (
    <>
      <div className="homeDiv">
        <LightTrail />
        <div className="navbar">
          <Profile />
          <Navbar activeSection={activeSection} />
          {!isMobile && <Contact />}
        </div>
        <div className="content">
          <About />
          <ExperiencesPage />
          <SchoolProject />
          {isMobile && <Contact />}
        </div>
      </div>
    </>
  );
}
