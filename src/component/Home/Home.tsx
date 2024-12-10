import About from '../About/About';
import Navbar from '../Navbar/Navbar';
import './home.style.css';

export default function Home() {
  return (
    <>
      <div className="homeDiv">
        <Navbar />
        <About />
      </div>
    </>
  );
}
