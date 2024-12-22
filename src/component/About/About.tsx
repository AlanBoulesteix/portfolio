import { ABOUT_PARAGRAPHS } from '../../constant/about';
import './About.styles.css';

function About() {
  return (
    <>
      <div id="about" className="section">
        {ABOUT_PARAGRAPHS.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </>
  );
}

export default About;
