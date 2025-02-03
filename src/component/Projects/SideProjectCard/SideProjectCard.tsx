import {
  SidePojectCardAncer,
  SideProjectCardWrapper,
  SideProjectImgWrapper,
} from './SideProjectCard.styles';
import SideProjectDescription from '../SideProjectDescription/SideProjectDescription';

type SideProjectCardProps = {
  title: string;
  description: string;
  screenshot: string;
  url: string;
};

const SideProjectCard = ({
  title,
  description,
  screenshot,
  url,
}: SideProjectCardProps) => {
  return (
    <SidePojectCardAncer href={url} target="_blank" rel="noreferrer">
      <SideProjectCardWrapper>
        <SideProjectImgWrapper>
          <img src={screenshot} title={title} />
        </SideProjectImgWrapper>
        <SideProjectDescription title={title} description={description} />
      </SideProjectCardWrapper>
    </SidePojectCardAncer>
  );
};

export default SideProjectCard;
