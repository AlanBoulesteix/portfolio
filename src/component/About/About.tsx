import { ABOUTPARAGRAPHS } from '../../constant/about';
import './About.styles.css';

function About() {
  return (
    <>
      <div id="about" className="section">
      {ABOUTPARAGRAPHS.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      </div>
    </>
  );
}

export default About;
