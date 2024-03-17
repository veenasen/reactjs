import React, {useState} from "react";
const MultiplicationTable=()=>{
    const[num1,setNum1]=useState('')
    
    const[result,setResult]=useState('')

    const handleMultiplication=()=>{

        for(let i = 1; i <= 10; i++) {

            const result = i * num1;
            setResult(`${num1} * ${i} = ${result}`)
        }

    }

    return(
        <div>
        <h1>Multiplication Table</h1>
        <div>
        <input type="number" value={num1} onChange={(e)=>setNum1(parseInt(e.target.value))}/>
        <button onClick={handleMultiplication}>Table</button>
        </div>
        <div>
        <p>{result}</p>
        </div>
        </div>
       
    )
}
export default MultiplicationTable