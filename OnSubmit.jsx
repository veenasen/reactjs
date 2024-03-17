import React, { useState } from 'react';

function OnSubmitEvent() {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
      alert('Form submittedSuccessfully')

  };

  return (
    <div>
      <h2>ON SUBMIT EXAMPLE</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          
        </div>
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default OnSubmitEvent;