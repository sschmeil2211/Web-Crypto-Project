import React from "react";

interface CircleProps {
    top: string;
    left: string;
    size: string;
  }

const Circle: React.FC <CircleProps> = ({ top, left, size }) => {

   const randomTranslateY = Math.floor(Math.random() * 21) - 10; 
   const randomDuration = Math.random() * (3 - 1) + 2; 

  return (
    <div
       className="circle"
      style={{
        position: 'absolute',
        top: top,
        left: left,
        width: size,
        height: size,
        borderRadius: '50%',
        background: 'linear-gradient(40deg, rgba(87, 0, 123, 1) 0%, rgba(247, 102, 128, 1) 100%)',
        animation: `float ${randomDuration}s ease-in-out infinite`,
        transform: `translateY(${randomTranslateY}px)`,
      }}
    ></div>
  );
};

export default Circle;