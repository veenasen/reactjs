import React,{useState} from "react";
export default function AddClear(){
    const[list,setList]=useState([])
    const[value,setValue]=useState('')

    function handleAdd(){
        if (value!==''){
            setList([...list,value])
        }
        setValue('')
    }
    function handleClear(){
        setList([])
        setValue('')
    }
    return(
        <div>
        <h1>Array State - Add and Clear</h1>
        <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleClear}>Clear</button>
        <ul>
            {list.map((item,index)=>(
                <li key={index}>
                    {item}
                </li>
            ))}
        </ul>
        </div>
    )
}