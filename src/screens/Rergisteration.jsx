import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'

export default function Registeration() {
  const [data,setData] = useState({
    name:'',
    contact:'',
    email:'',
    password:''
  })
    const navigation = useNavigate();
    let handler = (e) =>{
    e.preventDefault()
    if(data.name==='' || data.email ===''|| data.contact ==='' || data.password ===''){
     
      alert('empty')
    }else{
      toast.info("data submitted");
      navigation('/')
    }
    console.log(data)
  }
  return (
    <>
    <div style={{ height:"550px" ,width:'500px'}} 
    className='mt-5 p-5 container border d-flex  justify-content-center shadow'>

  
    <form className='w-100 '>
    <h1>Registeration </h1>
    <div className="mb-3" >
    <label htmlFor="exampleInputname1" className="form-label">Full Name</label>
    <input type="text" className="form-control shadow-none" id="exampleInputname" aria-describedby="usernameHelp" 
    onChange={(e=>setData({...data,name:e.target.value}))}
    />
    </div>
    <div className="mb-3" >
    <label htmlFor="exampleInputContact1" className="form-label">Mobile Number</label>
    <input type="text" className="form-control shadow-none" id="exampleInputContact" aria-describedby="ContactHelp" 
    onChange={(e=>setData({...data, contact:e.target.value}))}
    />
    </div>
  <div className="mb-3" >
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" 
     onChange={(e=>setData({...data,email:e.target.value}))}  />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control shadow-none" id="exampleInputPassword1"
     onChange={(e=>setData({...data,password:e.target.value}))} />
  </div>
  

  <button type="submit" className="btn btn-primary" onClick={(e)=>{handler(e)}}>Submit</button>
</form>
</div>
    </>
  )
}
