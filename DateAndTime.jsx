import React, {useState , useEffect} from "react";
function DateAndTime(){
    const[date , setDate]=useState(new Date())
    useEffect(()=>{
        const timer=setInterval(()=>setDate(new Date(),1000))
        return function cleanup(){
            clearInterval(timer)
        }
    })
    // const handleDate=()=>{
    //     setDate(new Date())
    // }
    return(
        <>
        <p>Current Time : {date.toLocaleString()}</p>
        {/* <p>Time : {Date.toLocaleString()}</p>
        <button onClick={handleDate}>Click</button> */}
        </>
    )
}
export default DateAndTime