import './Navbar.styles.css';
import React from 'react';
import { NAV_LINKS } from '../../constant/navlinks';

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
      <nav>
        <ul onClick={handleScroll}>
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={
                  isActive[link.id as keyof typeof isActive] ? 'active' : ''
                }
                onClick={() => handleActive(link.id)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
