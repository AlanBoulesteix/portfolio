import About from '../About/About';
import ExperiencesPage from '../ExperiencesPage/ExperiencesPage';
import Navbar from '../Navbar/Navbar';
import { Profile } from '../Presentation/Profile';
import './Home.styles.css';

export default function Home() {
  return (
    <>
      <div className="homeDiv">
        <div className="navbar">
          <Profile />
          <Navbar />
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
