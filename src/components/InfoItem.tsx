import React, { useState } from "react";


interface InfoItemProps {
  title: string;
  description: string;
  startSide?: "left" | "right";
}

const InfoItem: React.FC<InfoItemProps> = ({ title, description, startSide = "left"}) => {
 
  const [cursorPosition, setCursorPosition] = useState<{ x: string; y: string }>({
      x: startSide === "right" ? "100%" : "0%",
      y: "50%",
    });
     
  
 
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect(); 
    const x = `${e.clientX - rect.left}px`;
    const y = `${e.clientY - rect.top}px`;
    setCursorPosition({ x, y }); 
  };

  return (
    <div
    className="info-item"
      onMouseMove={handleMouseMove}
      style={{
        background: `radial-gradient(circle at ${cursorPosition.x} ${cursorPosition.y}, rgba(255, 105, 180, 0.5), rgba(0, 0, 0, 0) 70%)`,
      }}
    >
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default InfoItem;