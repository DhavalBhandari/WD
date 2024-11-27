import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const Textform = (props) => {
    const[txt,setText]=useState('enter text here');
    const handleChange=(e)=>{
        setText(e.target.value)
    }
    const handleClick=()=>{
        let upper=txt.toUpperCase()
        setText(upper)
    }
  return (
    <div className="container my-5">
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <h1>{props.heading}</h1>
          <Form.Control as="textarea" rows={8} value={txt} onChange={handleChange}/>
        </Form.Group>
        <Button className="btn btn primary" onClick={handleClick}>Convert to Uppercase</Button>
      </Form>
    </div>
  );
};

export default Textform;
