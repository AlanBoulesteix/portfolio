import useIsMobile from '../../hook/useIsMobile';
import './Experience.styles.css';

export interface ExperienceProps {
  title: string;
  period: string;
  description: string;
  langages?: string[];
}

export default function Experience({
  title,
  period,
  description,
  langages
}: ExperienceProps) {
  
  const isMobile = useIsMobile();

  if (!langages || isMobile) {
    langages = [];
  }

  return (
    <>
      <div className="experienceCard">
        <div className="period_div">
          <a>{period}</a>
        </div>
        <div className="info_div">
          <div className="job_title_div">
            <a>{title}</a>
          </div>
          <div className="description_job_div">
            <a>{description}</a>
          </div>
          <div className="button_langage_div">
            {langages?.map((langage, index) => (
              <button key={index} className="langage_button">
                {langage}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
