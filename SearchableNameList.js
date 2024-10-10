import React, { useState } from 'react';

const SearchableNameList = () => {

  const names = ['Ken', 'Minh Nhat', 'Tuan Vu', 'Nguyen Khanh', 'Ba Chinh'];

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredNames = names.filter((name) =>
    name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Search for a Name:</h2>
      <input
        type="text"
        placeholder="Enter a name to search..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <ul>
        {filteredNames.length > 0 ? (
          filteredNames.map((name, index) => (
            <li key={index}>{name}</li>
          ))
        ) : (
          <li>No names found</li>
        )}
      </ul>
    </div>
  );
}

export default SearchableNameList;
