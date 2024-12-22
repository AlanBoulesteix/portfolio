import './ArrowIcon.style.css';

type ArrowIconProps = {
  color?: string;
};

export default function ArrowIcon({ color }: ArrowIconProps) {
  const iconColor = color || 'black';
  return (
    <div className="arrow-icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill={iconColor}
      >
        <path d="M0,12v6a2,2,0,0,0,2,2H18a2,2,0,0,0,2-2V2a2,2,0,0,0-2-2H2A2,2,0,0,0,0,2V8H8V5l5,5L8,15V12Z" />
      </svg>
    </div>
  );
}
