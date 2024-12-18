import './Navbar.styles.css';
import React from 'react';
import { NAV_LINKS } from '../../constant/navlinks';

type NavbarProps = {
  activeSection: string;
};

function Navbar({ activeSection }: NavbarProps) {
  const handleScroll = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const target = event.target as HTMLAnchorElement;
    const targetId = target.getAttribute('href')?.replace('#', '');
    const targetElement = document.getElementById(targetId || '');

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav>
        <ul onClick={handleScroll}>
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={activeSection === link.id ? 'active' : ''}
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
