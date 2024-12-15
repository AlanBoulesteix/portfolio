import './Navbar.styles.css';
import { Profile } from '../Presentation/Profile';
import React from 'react';

function Navbar() {
  const [isActive, setIsActive] = React.useState({
    about: false,
    experiences: false,
    schoolProject: false,
  });

  const handleScroll = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const target = event.target as HTMLAnchorElement;
    const targetId = target.getAttribute('href')?.replace('#', '');
    const targetElement = document.getElementById(targetId || '');

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleActive = (anchor: string) => {
    setIsActive({
      about: anchor === 'about',
      experiences: anchor === 'experiences',
      schoolProject: anchor === 'schoolProject',
    });
  };

  return (
    <>
      <Profile />
      <nav>
        <ul onClick={handleScroll}>
          <li>
            <a
              href="#about"
              className={isActive.about ? 'active' : ''}
              onClick={() => handleActive('about')}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#experiences"
              className={isActive.experiences ? 'active' : ''}
              onClick={() => handleActive('experiences')}
            >
              Experiences
            </a>
          </li>
          <li>
            <a
              href="#schoolProject"
              className={isActive.schoolProject ? 'active' : ''}
              onClick={() => handleActive('schoolProject')}
            >
              School Project
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
