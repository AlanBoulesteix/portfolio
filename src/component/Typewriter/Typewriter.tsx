import { useTypewriter } from '../../hook/useTypewriter';

type TypewriterProps = {
  text: string;
  maxWordsLen: number;
  setSelectedWordIndex: React.Dispatch<React.SetStateAction<number>>;
};

const Typewriter: React.FC<TypewriterProps> = ({
  text,
  setSelectedWordIndex,
  maxWordsLen,
}) => {
  const displayText = useTypewriter(text, setSelectedWordIndex, maxWordsLen);

  return <div className="typewriter">
    <h2 className='paragraph'>{displayText}</h2>
    </div>;
};

export default Typewriter;
