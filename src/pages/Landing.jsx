import { useEffect, useState } from 'react';
import LaptopGreeting from '../components/LaptopGreeting.jsx';
import MainContent from './MainContent.jsx';

export default function Landing() {
  const [scrollPos, setScrollPos] = useState(0);
  const [hideLaptop, setHideLaptop] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          setScrollPos(scrollY);
          setHideLaptop(scrollY > 850);
          ticking = false;
        });
        ticking = true;
      }
      
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <>
      {/* Laptop */}
      <div className={`
        fixed top-0 left-0 w-screen bg-[var(--background-color)] transition-opacity duration-300
        ${hideLaptop ? 'opacity-0 -z-10' : 'opacity-100 z-10'}
      `}>
        <LaptopGreeting scrollPos={scrollPos} />
      </div>

      {/* Scroll space */}
      <div style={{ height: '1600px' }}></div>


      {/* Main Content */}
      <div
        className={`
          -mt-75 z-0 transition-opacity duration-1000 
          overflow-${hideLaptop ? 'scroll' : 'hidden'}
          ${hideLaptop ? 'opacity-100 z-10' : 'opacity-0 -z-10'}
      `}>
        <MainContent />
      </div>
    </>
  );
}