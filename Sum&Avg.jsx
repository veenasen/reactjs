import React, {useState} from "react";
const SumAndAverage=()=>{
    const[num1,setNum1]=useState('')
    const[num2,setNum2]=useState('')
    const[num3,setNum3]=useState('')
    const[num4,setNum4]=useState('')
    const[num5,setNum5]=useState('')
    const[total,setTotal]=useState('')
    const[avg,setAvg]=useState('')

    const handleAddition=()=>{
        const total=num1+num2+num3+num4+num5
        setTotal(total)
        const avg=total/5
        setAvg(avg)
    }

    return(
        <div style={{border:"3px solid yellow" ,paddingLeft:"25px", paddingRight:"25px" }}>
        <div>
        <h1 style={{backgroundColor:"yellow", color:"black"}}>Sum and Average</h1>
        <div>
        <label>ENGLISH : </label>
        <input type="number" value={num1} onChange={(e)=>setNum1(parseInt(e.target.value))}/>
        </div>
        <div>
        <label>TAMIL : </label>
        <input type="number" value={num2} onChange={(e)=>setNum2(parseInt(e.target.value))}/>  
        </div>
        <div>
        <label>MATHS : </label>
        <input type="number" value={num3} onChange={(e)=>setNum3(parseInt(e.target.value))}/>  
        </div>
        <div>
        <label>SCIENCE : </label>
        <input type="number" value={num4} onChange={(e)=>setNum4(parseInt(e.target.value))}/>  
        </div>
        <div>
        <label>SOCIAL </label>
        <input type="number" value={num5} onChange={(e)=>setNum5(parseInt(e.target.value))}/>  
        </div><br/>
        <div>
        <button style={{backgroundColor:"yellow" ,width:"100px", height:"30px", fontSize:"20px"}} 
            onClick={handleAddition}>Add</button>
        </div>
        <div>
        <p>Total : <span style={{color:"yellow"}}>{total}</span></p>
        </div>
        <div>
        <p>Average : <span style={{color:"yellow"}}>{avg}</span></p>
        </div>
        </div>
        </div>
       
    )
}
export default SumAndAverage