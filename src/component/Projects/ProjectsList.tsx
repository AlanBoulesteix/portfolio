import sideProjects from '../../constant/sideProjects';
import { SideProjectsWrapper } from './ProjectsList.styles';
import SideProjectCard from './SideProjectCard/SideProjectCard';

const ProjectsList = () => {
  const projects = sideProjects;

  return (
    <div id="personalProject" className="section">
      <p>Here is a list of projects I have worked on:</p>
      <SideProjectsWrapper>
        {projects.map((project) => (
          <SideProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            screenshot={project.screenshot}
            url={project.url}
          />
        ))}
      </SideProjectsWrapper>
    </div>
  );
};

export default ProjectsList;
