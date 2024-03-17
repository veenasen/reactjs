import React, { useState } from 'react';

const LeanerEligibility = () => {
  const [age, setAge] = useState('');
  const [eligibility, setEligibility] = useState('');

  const checkEligibility = () => {
    if (age>=17) {
      setEligibility('You are eligible');
    } else {
      setEligibility('Not Eligible');
    }
  };

  return (
    <div style={{border:"3px solid orange"}}>
      <h1>Leaner License Eligibility</h1>
      <div>
        <label>Age:</label>
        <input
          type="number"
          value={age}
          placeholder='Enter the Age'
          onChange={(e) => setAge(parseInt(e.target.value))}
        />
      </div>
      <button onClick={checkEligibility}>Check</button>
      <div>
        <p>Eligibility: {eligibility}</p>
      </div>
    </div>
  );
};

export default LeanerEligibility;