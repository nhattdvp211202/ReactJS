import React, { useState } from 'react';

const Form = () => {
  // Sử dụng useState để quản lý giá trị nhập vào của input
  const [store, setStore] = useState('');
  const [name, setName] = useState(''); 
  const [submittedStore, setSubmittedStore] = useState(''); 
  const [submittedName, setSubmittedName] = useState(''); 

  const handleStoreChange = (event) => {
    setStore(event.target.value); 
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
 
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedStore(store); 
    setSubmittedName(name); 
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Store:
          <input
            type="text"
            value={store}
            onChange={handleStoreChange}
          />
        </label>
        <br />
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
  
      {submittedStore && submittedName && (
        <h2>
          Welcome to {submittedStore} 
          <br />
          Hello, {submittedName}!
        </h2>
      )}
    </div>
  );
}

export default Form;
