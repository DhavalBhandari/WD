import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const Todoappp = () => {
  const[id,setId]=useState("")
  const [item, setItem] = useState("");
  const [data, setData] = useState([]);

  
  const handleChange=(e)=>{
    setItem(e.target.value)
  }

  const saveData = (e) => {
    e.preventDefault();
    console.log(id);
    
    if(id!=''){
      let result=data.map((i,index)=>{
         if(index==id){
          i = item
         }
         return i
      })
      setData(result)
    }
    else{
      setData([...data, item]);
    }
    setItem('')
    setId('')//update kariya pachi insert karva jaso to ae data update j thse insert nhi thay
    
    
  };
  
  const delData=(id)=>{
    let res=data.filter((i,index)=>{
      return index!=id
    })
    setData(res)
  }

  const editData=(id)=>{
    let edit=data.find((i,index)=>{
      return index==id
    })
    console.log(edit);
    
    setItem(edit)
    setId(id)
    console.log(edit);
    
  }

  return (
    <div className="BodyApp">
      <form action="#" onSubmit={saveData} method="post">
        <h2 style={{ color: "white" }}>
          <u>Grocery Shopping</u>
        </h2>
        <table>
          {data.map((i,index) => {
            return (
              <tr >
                <td className="itemName">{i}</td>
                <td>
                  <button type="button" className="delete-btn" onClick={()=>delData(index)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                  <button type="button"  className="edit-btn" onClick={()=>editData(index)}>
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
        <div className="main">
          <input
            type="text"
            name="item"
            id="item"
            value={item}
            placeholder="Add something to your list"
            // className="item"
            onChange={handleChange}   
            
          />
          <button className="Additem" type="submit">Add</button>
        </div>
      </form>
      <button className="Dlt" type="submit" onClick={()=>{setData([])}}>Delete List</button>
    </div>
  );
};

export default Todoappp;
