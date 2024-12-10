import  { useState, useEffect } from 'react';

export const useTypewriter = (
  text: string, 
  setSelectedWordIndex: React.Dispatch<React.SetStateAction<number>>, 
  maxWordsLen: number
) => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused]= useState(false);
  const [displayText, setDisplayText] = useState('');
  const [isReverseTyping, setIsReverseTyping] = useState(false);

  useEffect(() => {
    if(isPaused || isReverseTyping)
      return;
    const handleTyping = () => {
      if(index < text.length) {
        setDisplayText((prev) => prev + text.charAt(index));
        setIndex((i) => i + 1);
      } else {
        setIsPaused(true);
        setIsReverseTyping(true);
        setTimeout(() => {
          setIsPaused(false);
        }, 2500)
      }
    };
    const interval = setInterval(handleTyping, 75);
    return () => clearInterval(interval);
  }, [index, isPaused, text, setIsReverseTyping])

    useEffect(() => {
      if(isPaused || !isReverseTyping)
        return;
      const handleReverseTyping = () => {
      if (index > 0) {
        setDisplayText((prev) => prev.slice(0, -1));
        setIndex((i) => i - 1);
      } else {
        setIsPaused(true);
        setTimeout(() => {
          setIsReverseTyping(false);
          setIsPaused(false);
          setSelectedWordIndex((prev) =>  prev + 1 <= maxWordsLen - 1 ? prev + 1 : 0)
        }, 1000)
      }
    };
      const interval = setInterval(handleReverseTyping, 100);
      return () => clearInterval(interval);
    }, [index, isPaused, text, setIsReverseTyping])
  return displayText
};
