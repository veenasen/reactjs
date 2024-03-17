import React,{useRef} from "react";

function UnControlled(){
    const inputRef=useRef()
    function handleSubmit(){
        alert(`Name : ${inputRef.current.value}`)
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <h1>UnControlled Component Example</h1>
        <label>Name : </label>
        <input type="text" name="name" ref={inputRef}/>
        <button type="submit">Submit</button>
        </form>
        </>
    )
}
export default UnControlled