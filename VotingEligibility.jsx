import React, { useState } from 'react';

const VoteEligibility = () => {
  const [age, setAge] = useState('');
  const [eligibility, setEligibility] = useState('');

  const checkEligibility = () => {
    if (age>=18) {
      setEligibility('You are eligible to Vote');
    } else {
      setEligibility('Not Eligible');
    }
  };

  return (
    <div>
      <h1>Voting Eligibility</h1>
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

export default VoteEligibility;