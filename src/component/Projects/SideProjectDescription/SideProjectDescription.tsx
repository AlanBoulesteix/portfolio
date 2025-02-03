import ArrowIcon from '../../Icons/ArrowIcon/ArrowIcon';
import {
  SideProjectDescriptionWrapper,
  StyledDescription,
  StyledTitle,
  TitleWrapper,
} from './SideProjectDescription.styles';

type SideProjectDescriptionProps = {
  title: string;
  description: string;
};

const SideProjectDescription = ({
  title,
  description,
}: SideProjectDescriptionProps) => {
  return (
    <SideProjectDescriptionWrapper id="side-project-description">
      <TitleWrapper>
        <StyledTitle>{title}</StyledTitle>
        <ArrowIcon color="white" />
      </TitleWrapper>
      <StyledDescription>{description}</StyledDescription>
    </SideProjectDescriptionWrapper>
  );
};

export default SideProjectDescription;
