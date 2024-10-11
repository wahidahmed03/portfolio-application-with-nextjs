import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


const CircularProgressSkillBar = ({ percentage }) => {
    const { bgColor, textColor, borderColor, bgHoverColor } = useSelector((state) => state.themeColor);
    const [StokeColor ,setStokeColor] = useState(bgColor)

  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  const radius = 27;
  const stroke = 3;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset =
    circumference - (animatedPercentage / 100) * circumference;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimatedPercentage(percentage);
    }, 500); 

    return () => clearTimeout(timeout);
  }, [percentage]);


  useEffect(()=>{
    switch (bgColor) {
        case "bg-blue-500":
            setStokeColor("blue")
            break;
        case "bg-yellow-500":
            setStokeColor("yellow")
            break;
        case "bg-green-500":
            setStokeColor("green")
            break;
        case "bg-red-500":
            setStokeColor("red")
            break;
    }
  },[bgColor])

  return (
    <div className="flex items-center justify-center relative font-sans">
      <svg className="transform rotate-[-90deg]" width={radius * 2} height={radius * 2} >
        <circle  stroke="gray"fill="transparent" strokeWidth={stroke}  r={normalizedRadius}  cx={radius}  cy={radius}/>
        <circle  stroke={StokeColor}  fill="transparent"  strokeWidth={stroke}  strokeDasharray={`${circumference} ${circumference}`}
          style={{
            strokeDashoffset,
            transition: 'stroke-dashoffset 1.5s ease-in-out',
          }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
      <span className={`absolute  opacity-40 font-semibold ${textColor}`} >
        {animatedPercentage}%
      </span>
    </div>
  );
};

export default CircularProgressSkillBar;