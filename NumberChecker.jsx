import React, { useState } from 'react';

const NumberChecker = () => {
  const [input, setInput] = useState('');
  const [isNumber, setIsNumber] = useState('');

  const checkIfNumber = () => {
    const parsedInput = parseFloat(input);
    if (!isNaN(parsedInput)) {
      setIsNumber(true);
    } else {
      setIsNumber(false);
    }
  };

  return (
    <div>
      <h1>Number Checker</h1>
      <div>
        <label>Input:</label>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <button onClick={checkIfNumber}>Check</button>
      <div>
        <p>{isNumber ? 'Input is a number.' : 'Input is not a number.'}</p>
      </div>
    </div>
  );
};

export default NumberChecker;