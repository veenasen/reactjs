// import React, {useState} from "react";

// const AgeCalculator = () => {
//     const [date, setDate] = useState('');
//     const [result, setResult] = useState('');

// const calculateAge = () =>{
//     const currentYear = new Date().getFullYear();
//     const Age = currentYear - date
//     setResult(Age);
// };

// return(
//     <div>
//         <div>
//             <h1>Age Calculator</h1>
//         </div>
//         <div>
//         <input
//           type="date"
//           value={date}
//           onChange={(e) => setDate(e.target.value)}
//         />
//         </div><br/>
//         <button className='button' onClick={calculateAge}>Calculate</button><br/><br/>
        
//             {result>0 && <p>Your Age is {result} years old</p>}

//     </div>
// )
// };

// export default AgeCalculator;


import React, { useState } from 'react';

const AgeCalculator = () => {
  const [birthYear, setBirthYear] = useState('');
  const [age, setAge] = useState(0);

  const calculateAge = () => {
    const currentYear = new Date().getFullYear();
    const calculatedAge = currentYear - birthYear;
    setAge(calculatedAge);
  };

  return (
    <div>
      <h2>Age Calculator</h2>
      <label htmlFor="birthYear">Enter your birth year: </label>
      <input
        type="date"
        id="birthYear"
        value={birthYear}
        onChange={(e) => setBirthYear(Date(e.target.value))}
      />
      <button onClick={calculateAge}>Calculate</button>
      {age > 0 && <p>Your age is {age} years.</p>}
    </div>
  );
};

export default AgeCalculator;