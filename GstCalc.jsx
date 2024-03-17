import React, { useState } from 'react';
import "./cagrStyle.css"

const GstCalculator = () => {
  const [amount, setAmount] = useState('');
  const [tax, setTax] = useState('');
  const [result, setResult] = useState('');

  const calculateGst = () => {
    const originalAmount = parseFloat(amount);
    const gst = parseFloat(tax);
    const total = (originalAmount*gst)/100;
    setResult(`Total GST: $${total.toFixed(2)}`);
  };

  return (
    <div className='cagrstyle'>
      <h1 className='cagrheading'> GST Calculator</h1>
      <div>
        <label className='cagrsubtitle'>Total Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div>
        <label className='cagrsubtitle'>Tax Slab:</label>
        <input
          type="number"
          value={tax}
          onChange={(e) => setTax(e.target.value)}
        />
      </div><br/>
      <button className='cagrbutton' onClick={calculateGst}>Calculate</button><br/><br/>
      <div className='cagrresult'>{result}</div>
    </div>
  );
};

export default GstCalculator;