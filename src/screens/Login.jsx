import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Login() {
    const [logindata,setLoginData] = useState({
        email:'',
        password:''
      })
        const navigation = useNavigate();
      let handler = (e) =>{
        e.preventDefault()
        if(logindata.email ===''|| logindata.password ===''){
         
          alert('empty')
        }else{
          toast.info("logindata submitted");
          navigation('/home')
        }
        console.log(logindata)
      }
      return (
        <> 
            <div style={{ height:"400px" ,width:'500px'}} 
            className='mt-5 p-5 container border d-flex  justify-content-center shadow'>

        
            <form className='w-100 '>
            <h1>Login </h1>
                        <div className="mb-3" >
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" 
            onChange={(e=>setLoginData({...logindata,email:e.target.value}))}  />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control shadow-none" id="exampleInputPassword1"
            onChange={(e=>setLoginData({...logindata,password:e.target.value}))} />
              </div>
              <button type="submit" className="btn btn-primary" onClick={(e)=>{handler(e)}}>Submit</button>
                           
            </form>
      
       </div>
      
        </>
      )
    }

