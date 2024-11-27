import React from "react";

export default function List() {
  let arr = [
    "Use Array.map",
    "Not a for loop",
    "Give each item a unique key",
    "Avoid using array index as the key",
  ];
  // let res=arr.map((i,index)=>{
  //      return <li key={index}>{i}</li>
  // })
  return (
    <>
    <div class="bgclr">
      <h2>The "React Way" to Render a List</h2>
      <ul className="list">
        {
        arr.map((i, index) => {
          return <li key={index}>{i}</li>;
        })
        }
        {/* {res} */}
      </ul>
      </div>
    </>
  );
}
