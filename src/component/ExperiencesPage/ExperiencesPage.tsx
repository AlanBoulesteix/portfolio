import { EXPERICENCES } from '../../constant/experiences';
import Experience from '../Experience/Experience';

export default function ExperiencesPage() {
  const experiences = EXPERICENCES;

  return (
    <div id="experiences">
      {experiences.map((experience, index) => (
        <div key={index}>
          <Experience
            title={experience.title}
            period={experience.period}
            description={experience.description}
            langages={experience.langages}
          />
        </div>
      ))}
    </div>
  );
}
