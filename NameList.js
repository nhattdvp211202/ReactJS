import React from 'react';

const NameList = () => {
  const names = ['Ken', 'Minh Nhat', 'Tuan Vu', 'Nguyen Khanh', 'Ba Chinh'];
  
  return (
    <div>
      <h2>List of Names:</h2>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default NameList;
