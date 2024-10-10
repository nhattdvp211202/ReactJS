import React, { useState, useEffect } from 'react';

const SimpleClock = () => {
 
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    
    const updateTime = () => {
      setCurrentTime(new Date());
    };

    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString();

  return (
    <div>
      <h2>Current Time:</h2>
      <p>{formattedTime}</p>
    </div>
  );
};

export default SimpleClock;
