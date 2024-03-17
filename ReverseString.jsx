import React,{useState} from "react";

function ReverseString() {
    const [string,setString]=useState('')
    const[reverse,setReverse]=useState('')
    

    const handleReverse=()=>{
        // const reverse = reverseString(string);
        string.split('').reverse().join('');
    }
 
// function reverseString(str) {
//     return string.split('').reverse().join('');
//   }
    return (
      <div>
        {/* {string} reversed is {reverse} */}
        <input type="text" value={string} onChange={(e)=>setString(e.target.value)}/>
        <button onClick={handleReverse}>Reverse</button>
        <div>
            <p>Reversed String : {reverse}</p>
        </div>
      </div>
    );
  }
  
  export default ReverseString;