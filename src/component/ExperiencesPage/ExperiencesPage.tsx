import { EXPERICENCES } from '../../constant/experiences';
import Experience from '../Experience/Experience';

export default function ExperiencesPage() {
  const experiences = EXPERICENCES;

  return (
    <div id="experiences" className="section">
      {experiences.map((experience, index) => (
        <Experience
          key={index}
          title={experience.title}
          period={experience.period}
          description={experience.description}
          langages={experience.langages}
        />
      ))}
    </div>
  );
}
