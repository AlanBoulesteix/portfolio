import { Link } from 'react-router-dom';
import { Profile } from '../Presentation/Profile';

function Navbar() {
  return (
    <>
    <nav>
      <Profile />
      <div className='sectionDiv'>
      <Link to="/about">About</Link>
      </div>
      <div className='sectionDiv'>
      <Link to="/experiences">Experiences</Link>
      </div>
      <div className='sectionDiv'>
      <Link to="/project">School Project</Link>
      </div>
    </nav>
    </>
  );
}

export default Navbar;
