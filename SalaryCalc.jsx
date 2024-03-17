import React, { useState } from 'react';

const SalaryCalculator = () => {
  const [hourlyRate, setHourlyRate] = useState(0);
  const [hoursWorked, setHoursWorked] = useState(0);
  const [salaryMonthly, setSalaryMonthly] = useState(0);
  const [salaryWeekly, setSalaryWeekly] = useState(0);
  const [salaryDaily, setSalaryDaily] = useState(0);
  const [salaryHourly, setSalaryHourly] = useState(0);

  const calculateSalaries = () => {
    const monthly = hourlyRate * hoursWorked * 4; // Assuming 4 weeks in a month
    const weekly = hourlyRate * hoursWorked;
    const daily = hourlyRate * hoursWorked / 8; // Assuming 8 working hours in a day

    setSalaryMonthly(monthly);
    setSalaryWeekly(weekly);
    setSalaryDaily(daily);
    setSalaryHourly(hourlyRate);
  };

  const mystyle={borderStyle:"ridge", 
    borderColor:"rosybrown", 
    borderWidth:"20px", 
    padding:"0px 25px 5px 25px"}

  const button={backgroundColor:"rosybrown",
    width:"100px",
    height:"30px",
    fontWeight:"3px"}

  const result={color:"rosybrown"}

  return (
    <div style={mystyle}>
      <h1>Salary Calculator</h1>
      <div>
        <label>Hourly Rate ($):</label>
        <input
          type="number"
          value={hourlyRate}
          onChange={(e) => setHourlyRate(parseFloat(e.target.value))}
        />
      </div>
      <div>
        <label>Hours Worked:</label>
        <input
          type="number"
          value={hoursWorked}
          onChange={(e) => setHoursWorked(parseFloat(e.target.value))}
        />
      </div><br/>
      <button style={button} onClick={calculateSalaries}>Calculate</button>
      <div>
        <p>Monthly Salary: <span style={result}>${salaryMonthly}</span></p>
        <p>Weekly Salary: <span style={result}>${salaryWeekly}</span></p>
        <p>Daily Salary: <span style={result}>${salaryDaily}</span></p>
        <p>Hourly Salary: <span style={result}>${salaryHourly}</span></p>
      </div>
    </div>
  );
};

export default SalaryCalculator;