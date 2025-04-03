import { Button, ButtonGroup, Container, Form, FormControl, InputGroup, Nav, Navbar, Offcanvas, Row } from 'react-bootstrap';
import React, { useRef, useState } from 'react';
import Style from '../src/Component.module.css'

export default function Headercomponent() {
  const [show,setShow] = useState(false)
  const[helpdisk,setHelpdisk] = useState(false);
  const[message,setMessage] = useState([])
  const inputRf  = useRef(null)

  const handleShow = () =>{
    setShow(true)
  }
  const handleClose = ()=>{
    setShow(false);
  }
  const openHelpDisk = ()=>{
    setHelpdisk(true);
  }
  const closeHelpDisk = ()=>{
    setHelpdisk(false);
  }
  const seMessage= () =>{
    alert()
   if(message.trim()){
    setMessage([...message,message])
    setMessage("")
    console.log(message)
   }
   
  }
 
  return (
    <React.Fragment>
   
      <Navbar  className="header" bg='primary' variant="success" style={{width:"auto"}} >
      <Button variant="primary" onClick={handleShow} className="ms-2">
          ☰
        </Button>
        <Navbar.Brand className=" text-light ms-2" >my app</Navbar.Brand>
       
         <Button className="ms-auto text-light me-4 " onClick={openHelpDisk} >
         Help disk
         </Button>
       
     
      </Navbar>
   <Offcanvas show={show} onHide={handleClose} className="bg-primary text-light">
    <Offcanvas.Header closeButton>
      <Offcanvas.Title>menu</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
      <Nav.Link>Home</Nav.Link>
      <Nav.Link>Acount</Nav.Link>
      <Nav.Link>Contact</Nav.Link>
      <Nav.Link>Logout</Nav.Link>
    </Offcanvas.Body>
   </Offcanvas>

   <Offcanvas show={helpdisk} placement="end" onHide={closeHelpDisk} className="bg-light">
    <Offcanvas.Header closeButton  className='bg-primary text-light '>
    <Offcanvas.Title >Help Disk</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body >
     <div className='chat-box border mb-2' style={{height:'500px', overflowY:"auto"}}>
  {message}  helllo
     </div>
    <Form onSubmit={(e) =>e.preventDefault()}>
      <InputGroup>
      <FormControl  type='text' placeholder='type a message' style={{ outline: "none", boxShadow: "none", borderColor: "#ccc" }}
        onChange={e=>setMessage(e.target.value)}
        onKeyDown={e=>{e.key==='Enter'&& setMessage(e.target.value)}} />
      <Button variant='success' className='rounded-circle ms-2' onClick={seMessage} >send</Button >
      </InputGroup>
      </Form>
    </Offcanvas.Body>
    
    

   </Offcanvas>

   
    </React.Fragment>
   
  )
}
