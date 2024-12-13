import './Navbar.styles.css';
import { Profile } from '../Presentation/Profile';

function Navbar() {
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
      <Profile />
      <nav>
        <ul onClick={handleScroll}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experiences">Experiences</a>
          </li>
          <li>
            <a href="#schoolProject">School Project</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
