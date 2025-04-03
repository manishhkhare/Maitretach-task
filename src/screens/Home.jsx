import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigator = useNavigate();
    let gotomenu = ()=>{
        navigator('/menu')

    }
  return (<>
  <div className="container-sm  p-3   " style={{height:"100vh"}}>
  
    <div class="row justify-content-center align-items-center g-2 h-100" >
        <div class="col-sm-3"></div>
        <div class="col-6 text-center fs-1">Welcome To Food's Kitchen
           <div>
            <button type='button' className='btn btn-primary'
             style={{background:"#3F51B5"}} onClick={()=>gotomenu()}>go to menu </button>
           </div>
        </div>
        <div class="col-sm-3"></div>
    </div>
   
  </div>
  </> )
}
