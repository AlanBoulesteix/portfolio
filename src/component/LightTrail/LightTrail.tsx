import React, { useEffect, useRef } from 'react';
import './LightTrail.styles.css';

const LightTrail: React.FC = () => {
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (trailRef.current) {
        trailRef.current.style.left = `${event.clientX}px`;
        trailRef.current.style.top = `${event.clientY}px`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <div ref={trailRef} className="light-trail"></div>;
};

export default LightTrail;