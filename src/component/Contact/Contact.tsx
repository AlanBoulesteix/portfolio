import CurriculumVitaeIcon from '../Icons/CurriculumVitaeIcon/CurriculumVitaeIcon';
import GithubIcon from '../Icons/GithubIcon/GithubIcon';
import LinkedinIcon from '../Icons/LinkedinIcon/LinkedinIcon';
import './Contact.styles.css';
import { ContactLink } from '../../constant/contact';

export default function Contact() {
  return (
    <div className="contact">
      <GithubIcon color="white" githubLink={ContactLink.github} />
      <LinkedinIcon color="white" linkedinLink={ContactLink.linkedin} />
      <CurriculumVitaeIcon
        color="white"
        curriculumVitaeLink={ContactLink.curriculumVitae}
      />
    </div>
  );
}
