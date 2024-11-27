import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


const ModalLogin = () => {
    const [show, setShow] = useState(false);
    const [show1,setShow1]=useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
  return (
    <>
    <h1>Modal Login Form</h1>
    <Button variant="primary" onClick={handleShow}>
      Open model
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>LOGIN TO MY ACCOUNT</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email address"
              autoFocus
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password"
              autoFocus />
          </Form.Group>
          {['checkbox'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check // prettier-ignore
            type={type}
            id={`default-${type}`}
            label={`remember me in this computer`}
          />
        </div>
          ))}
        </Form>
        <Button onClick={handleClose} variant="outline-warning" style={{width:"460px",borderRadius:"0px"}}>
          Login
        </Button>
        <p style={{textAlign:"center",padding:"30px 0 0 0",fontSize:"12px",color:"darkblue"}}>Forgot Your Password?</p>
        <p style={{textAlign:"center",fontSize:"15px",color:"blue"}}>Create A New Account</p>
      </Modal.Body>
    </Modal>
   <h1>Modal Registration Form</h1>
    <Button variant="primary" onClick={handleShow1}>
      Open model
    </Button>

    <Modal show={show1} onHide={handleClose1}>
      <Modal.Header closeButton>
        <Modal.Title>REGISTRATION FORM</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email address"
              autoFocus
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password"
              autoFocus />
          </Form.Group>
          {['checkbox'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check // prettier-ignore
            type={type}
            id={`default-${type}`}
            label={`remember me in this computer`}
          />
        </div>
          ))}
        </Form>
        <Button onClick={handleClose1} variant="outline-warning" style={{width:"460px",borderRadius:"0px"}}>
          Register
      
        </Button>
      </Modal.Body>
    </Modal>
  </>
  )
}

export default ModalLogin
