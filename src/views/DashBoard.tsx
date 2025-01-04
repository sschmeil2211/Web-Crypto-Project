import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap'; 

import '../styles/Dashboard.css';

import image1 from '../assets/Images/dashFirst.png';
import image2 from '../assets/Images/dashSecond.png';
import image3 from '../assets/Images/dashThird.png';

import Circle from '../components/Circle';

const ScrollEffect: React.FC = () => {
  const [scrollY, setScrollY] = useState<number>(0);
  const [position, setPosition] = useState<number>(0);
  const [isAtEnd, setIsAtEnd] = useState<boolean>(false); 

  const scrollFactor = 0.1; 
  const sectionThresholds = [0, 250, 1090, 1850];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const scrollValue = window.scrollY;
      
      if (scrollY < sectionThresholds[1]) {
        setPosition(0);
        setIsAtEnd(false); 
      } else if (scrollY >= sectionThresholds[0] && scrollY < sectionThresholds[1]) {
        setPosition(1);
        setIsAtEnd(false); 
      } else if (scrollY >= sectionThresholds[1] && scrollY < sectionThresholds[2]) {
        setPosition(2);
        setIsAtEnd(false); 
      } else if (scrollY >= sectionThresholds[2] && scrollY < sectionThresholds[3]) {
        setPosition(3); 
        setIsAtEnd(false);
      } else {
        setPosition(4);
        setIsAtEnd(true);
      }

      if (isAtEnd) {
        gsap.to('.content-box', {
          top: sectionThresholds[3] * 0.1 + 50, 
          duration: 1,
          ease: 'power1.out',
        });
      } else {
        gsap.to('.content-box', {
          top: scrollY * scrollFactor + 50, 
          duration: 1,
          ease: 'power1.out',
        });
      }
    
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollY, isAtEnd] );


    
  
  return (
    <div>
      <section className="section section-1">
        <div
          className={`content-box ${
            position === 0
              ? 'centerC'
              : position === 1
              ? 'leftC'
              : position === 2
              ? 'rightC'
              : position === 3
              ? 'leftC'
              : 'rightC'
          }`}
        >
          {position === 0 && (
            <>
              <h3>¿Precisas ver tus inversiones y transacciones de una manera más extensa?</h3>
              <p>¡Nosotros te ayudamos con eso!</p>
            </>
          )}
          {position === 2 && (
            <>
              <h3>Análisis completo</h3>
              <p>Con la nueva página vas a poder ver detalladamente los precios de cada cripto</p>
            </>
          )}
          {position === 3 && (
            <>
              <h3>Gráficos indicativos</h3>
              <p>Vas a poder ver el porcentaje de tu inversión total en criptomonedas con gráficos de manera clara y dinámica</p>
            </>
          )}
          {position === 4 && (
            <>
              <h3>Controlá lo que pagas</h3>
              <p>Además de controlar las transacciones que hagas cuando pagues desde tu celular en diferentes negocios o desde la web </p>
            </>
          )}
        </div>
      </section>
  
      <section className="section section-2">
        <div className="first-section">
            <img className="dashboardImage" src={image1} alt="imagen"></img>
        </div>
      </section>
  
      <section className="section section-3">
        <div className="second-section">
          <img className="dashboardImage" src={image2} alt="imagen"></img>
        </div>
      </section>
  
      <section className="section section-4">
        <div className="third-section">
          <img className="dashboardImage" src={image3} alt="imagen"></img>
        </div>
      </section>
    </div>
  );
};

export default ScrollEffect;