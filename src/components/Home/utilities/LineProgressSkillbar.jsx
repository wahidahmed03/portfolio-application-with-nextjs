import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const LineProgressSkillbar = ({ percentage }) => {
  const { bgColor,textColor } = useSelector((state) => state.themeColor);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= percentage) {
          clearInterval(timer);
          return percentage;
        }
        return oldProgress + 1;
      });
    }, 30); 

    return () => {
      clearInterval(timer);
    };
  }, [percentage]);

  return (
    <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700 opacity-70">
      <div
        className={`${bgColor } $ h-1.5 rounded-full`}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default LineProgressSkillbar;
