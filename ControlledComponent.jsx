import React , {useState}from "react";

function Controlled(){
    const[name,setName]=useState("")
    function handleSubmit(){
        alert(`Name : ${name}`)
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <h1>Controlled Component Example</h1>
            <label>Name : </label>
            <input name="name" value={name} onChange={(e)=>setName(e.target.value)}/>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}
export default Controlled