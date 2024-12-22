import { SCHOOL_PROJECTS } from '../../constant/schoolprojects';
import SchoolProjectCard from '../SchoolProjectCard/SchoolProjectCard';
import './SchoolProject.styles.css';

export default function SchoolProject() {
  return (
    <div id="schoolProject" className="section">
      <p>Here is a list of school projects I have worked on:</p>
      <div className="school-project-card-container">
        {SCHOOL_PROJECTS.map((repoData) => (
          <SchoolProjectCard
            key={repoData.name}
            name={repoData.name}
            description={repoData.description}
            linkRepo={repoData.linkRepo}
          />
        ))}
      </div>
    </div>
  );
}
