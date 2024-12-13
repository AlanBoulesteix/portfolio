import './Navbar.styles.css';
import { Profile } from '../Presentation/Profile';

function Navbar() {
  return (
    <>
        <Profile />
        <nav>
          <ul>
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
