import Spline from '@splinetool/react-spline';
import { useState, useEffect } from 'react';
import scrollSvg from '../assets/resources/Scroll.svg';

export default function LaptopGreeting({ scrollPos }) {
  const [laptopScale, setLaptopScale] = useState(1);
  const [titleOpacity, setTitleOpacity] = useState(1);
  const [firstScroll, setFirstScroll] = useState(localStorage.getItem('scrolled') == 'true');

  const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

  useEffect(() => {
    if (!firstScroll && scrollPos > 700) {
      localStorage.setItem('scrolled', "true");
      setFirstScroll(true);
    }

    setLaptopScale(
      scrollPos < 700
        ? 1
        : clamp(1 + (scrollPos - 700) / 50, 1, 5)
    );

    setTitleOpacity(
      clamp(1 - (scrollPos - 300) / 50, 0, 1)
    );
  }, [scrollPos, firstScroll]);

  return (
    <>
      <div className="h-screen">
        {/* Title */}
        <div
          className="fixed top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{
            opacity: titleOpacity,
            color: `rgba(255, 255, 255, ${titleOpacity})`
          }}
        >
          <p className='font-bold text-6xl text-[var(--primary-color)] drop-shadow-[0_0_35px_#FFFFFF]'>
            anmolthapa.dev
          </p>

          {/* Scroll hint */}
          <div className='absolute top-10 -right-15'>
            {!firstScroll && (
              <img 
                className='drop-shadow-[0_0_35px_#FFFFFF]'
                src={scrollSvg} 
              />
            )}
          </div>
        </div>
      </div>

      {/* Laptop Model */}
      <div
        className="fixed -mt-175"
        style={{
          transform: `scale(${laptopScale})`,
          transition: 'transform 0.3s ease-out',
        }}
      >
        <Spline scene="https://prod.spline.design/essjRYlRyLMlvCeR/scene.splinecode" />
      </div>
    </>
  );
}