import React, {useState} from "react";
const AddTwoNumbers=()=>{
    const[num1,setNum1]=useState('')
    const[num2,setNum2]=useState('')
    const[total,setTotal]=useState('')

    const handleAddition=()=>{
        const total=num1+num2
        setTotal(total)
    }

    return(
        <div>
        <h1>Sum of Two Numbers</h1>
        <div>
        <label>Number 1 : </label>
        <input type="number" value={num1} onChange={(e)=>setNum1(parseInt(e.target.value))}/>
        </div>
        <div>
        <label>Number 2 : </label>
        <input type="number" value={num2} onChange={(e)=>setNum2(parseInt(e.target.value))}/>  
        </div>
        <div>
        <button onClick={handleAddition}>Add</button>
        </div>
        <div>
        <p>Total : {total}</p>
        </div>
        </div>
       
    )
}
export default AddTwoNumbers