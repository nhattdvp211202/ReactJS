import React, { useState } from 'react';

const Toggle = () => {
 
  const [isOn, setIsOn] = useState(false);

  const toggleState = () => {
    setIsOn(!isOn); 
  };

  return (
    <div>
      <h1>{isOn ? 'ON' : 'OFF'}</h1> 
      <button onClick={toggleState}>
        On/Off Toggle
      </button> 
      <br />
      <br />
      
    </div>
  );
}

export default Toggle;
