import { useEffect } from 'react';

const useIntersectionObserver = (setActiveSection: (id: string) => void) => {
  useEffect(() => {
    const sections = document.querySelectorAll('.content > div');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);
};

export default useIntersectionObserver;