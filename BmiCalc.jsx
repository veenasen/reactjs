//App.js
import React, { useState } from 'react';
// import './App.css';

function BmiCalculator() {
	const [heightValue, setHeightValue] = useState('');
	const [weightValue, setWeightValue] = useState('');
	const [bmiValue, setBmiValue] = useState('');
	const [bmiMessage, setBmiMessage] = useState('');

	const calculateBmi = () => {
		if (heightValue && weightValue) {
			const heightInMeters = heightValue / 100;
			const bmi = (weightValue / (heightInMeters * heightInMeters)).toFixed(2);
			setBmiValue(bmi);

			let message = '';
			if (bmi < 18.5) {
				message = 'You are Underweight';
			} else if (bmi >= 18.5 && bmi < 25) {
				message = 'You are Normal weight';
			} else if (bmi >= 25 && bmi < 30) {
				message = 'You are Overweight';
			} else {
				message = 'You are Obese';
			}
			setBmiMessage(message);
		} else {
			setBmiValue('');
			setBmiMessage('');
		}
	};

	return (
		<div style={{borderStyle:"dashed", borderWidth:"5px", borderColor:"lightgreen", padding:"0px 30px 30px 30px", backgroundColor:"saddlebrown", width:"fit-content", margin:"auto", marginTop:"200px" }}>
			<h1 style={{color:"lightgreen"}}>BMI Calculator</h1>
			<div>
				<label htmlFor="height">Enter Your Height (cm):</label>
				<input
					type="number"
					id="height"
					value={heightValue}
					onChange={(e) => setHeightValue(e.target.value)}
				/>
			</div>
			<div>
				<label htmlFor="weight">Enter Your Weight (kg):</label>
				<input
					type="number"
					id="weight"
					value={weightValue}
					onChange={(e) => setWeightValue(e.target.value)}
				/>
			</div><br/>
			<button style={{backgroundColor:"lightgreen"}} onClick={calculateBmi}>
				Click to Calculate BMI
			</button>
			{bmiValue && bmiMessage && (
				<div>
					<p style={{backgroundColor:"lightgreen", color:"saddlebrown"}}>
						Your BMI: <span>{bmiValue}</span>
					</p>
					<marquee>
					<p style={{backgroundColor:"lightgreen", color:"saddlebrown"}}>
						Result: <span>{bmiMessage}</span>
					</p>
					</marquee>
				</div>
			)}
		</div>
	);
}

export default BmiCalculator;
