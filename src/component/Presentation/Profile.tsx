import { useState } from 'react';
import './profile.styles.css';
import Typewriter from '../Typewriter/Typewriter';
import { ROLES } from '../../constant/roles';

export function Profile() {
  const [index, setIndex] = useState(0);

  return (
    <div className="presentationDiv">
      <h1>Hi, I'm Alan</h1>
      <div className='typewriterDiv'>
      <Typewriter
        text={ROLES[index]}
        setSelectedWordIndex={setIndex}
        maxWordsLen={ROLES.length}
      />
      </div>
    </div>
  );
}
