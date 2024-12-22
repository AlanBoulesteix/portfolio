import ArrowIcon from '../Icons/ArrowIcon/ArrowIcon';
import './SchoolProjectCard.style.css';

type SchoolProjectCardProps = {
  name: string;
  description: string;
  linkRepo: string;
};

export default function SchoolProjectCard({
  name,
  description,
  linkRepo,
}: SchoolProjectCardProps): JSX.Element {
  return (
    <a href={linkRepo} target="_blank" rel="noopener noreferrer">
      <div className="school-porject-card">
        <h2>{name}</h2>
        <p>{description}</p>
        <div className="repo-link">
          <p>Repo</p>
          <ArrowIcon color={'white'} />
        </div>
      </div>
    </a>
  );
}
