import React, { useState } from "react";

export default function Usestate() {
  const [count, setCount] = useState(0)
  const[border,setBorder]= useState(0)
  const[borderr,setBorderr]=useState()
  const[border1,setBorder1]= useState(0)
  const[borderr1,setBorderr1]=useState()
  const changeCount=()=>{
    setCount(count+1)
    setBorder("2px solid black")
    setBorderr("50px")
  }
  const changeCountMis=()=>{
    setCount(count-1)
    setBorder1("2px solid black")
    setBorderr1("50px")
  }
  return (
    <div className="counter App">
      <h1>Counter App</h1>
      <p style={{fontSize:"50px"}}>{count}</p>
      <button onClick={changeCount} className="btn btn-primary" style={{border:border,borderRadius:borderr}} >Count(+)</button>&nbsp;&nbsp;
      <button onClick={changeCountMis} style={{border:border1,borderRadius:borderr1}} className="btn btn-danger">Count(-)</button>
    </div>
  );
}
