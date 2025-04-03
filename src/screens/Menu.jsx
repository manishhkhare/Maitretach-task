import React, { use, useEffect, useState } from 'react'
import myImage from "../assets/burger.jpeg";  
import myImage1 from "../assets/pepsi.jpeg";
import myImage2 from "../assets/coke.jpeg";
import myImage3 from "../assets/fries.jpeg";
import { useNavigate } from 'react-router-dom';


export default function Menu() {
    const [fries,setFries] = useState(0)
    const [cokie,setCokie] = useState(0)
    const [ Total,setTotal] = useState(0)
    const [msg,setMsg] = useState()
      const navigator = useNavigate()
     let saveButton = () =>{
         
        setMsg("order placed")
      
        navigator('/ordered')
      

     }
   
  return (
    <>
    
    
<div>
 
  {/* Modal */}
  <div className="modal fade" id="exampleModal" tabIndex={-1} 
  aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Order Summary</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
      <div className="d-flex align-items-center justify-content-between mb-2" 
        style={{ height: "40px" }}>
          <span>cookie: {cokie}</span>
          <div>
            <button 
              className="btn btn-primary me-2 shadow-none" 
              style={{ background: "#F50057", width: "50px" }} 
              onClick={() => setCokie(value =>value? value - 1:value=0)} >
              <i className="fa-solid fa-minus"></i>
            </button>

            <button 
              className="btn btn-primary shadow-none" 
              style={{ background: "#3F51B5", width: "50px" }} 
              onClick={() => setCokie(value => value + 1)}
            >
              <i className="fa-solid fa-plus"></i>
            </button>
        </div>
      </div>

      <div className="d-flex align-items-center justify-content-between mb-2">
        <span>fries: {fries}</span>
        <div>
          <button 
            className="btn btn-primary me-2 shadow-none" 
            style={{ background: "#F50057", width: "50px" }} 
            onClick={() => setFries(value =>value?value - 1: value=0)}
          >
            <i className="fa-solid fa-minus"></i>
          </button>
          <button 
            className="btn btn-primary shadow-none" 
            style={{ background: "#3F51B5", width: "50px" }} 
            onClick={() => setFries(value => value + 1)}
          >
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>

      <div className="mt-2">Total(INR): {(cokie * 10) + (fries * 20)}</div>
    </div>
        <div className="modal-footer">
          <button type="button" 
          className="btn btn-secondary " 
          data-bs-dismiss="modal">Close</button>

          <button type="button" className="btn btn-primary " 
          style={{background:"#3F51B5"}} 
          onClick={()=>{saveButton()}}>Save And Checkout</button>

        </div>
      </div>
    </div>
  </div>
</div>

<div className='container' style={{height:'100%'}}>
      <div className="row  mt-5 d-flex justify-content-center  g-2" style={{height:""}}>
        <div className="col-sm-3  d-flex justify-content-center align-items-center">
        <div className="card " style={{width: '18rem'}}>
            <img src={myImage} className="card-img-top" alt="..." />
            <div className="card-body">
                <p className="card-text"> 
                    Hamburgure <br />
                    price:250
                    {msg}
                 </p> 
                 <div className ="buttons pt-4">
                    <button type='button' className='btn text-light fw-4 hover-bg-danger' 
                    style={{background:"#3F51B5",width:"60px"}}
                    data-bs-toggle="modal" data-bs-target="#exampleModal"
                    ><i className="fa-solid fa-plus"></i></button>

                    <button type='button' className='btn ms-2' 
                    style={{background:"#F50057",width:"60px"}}
                    data-bs-toggle="modal" data-bs-target="#exampleModal"><i 
                    className="fa-solid fa-minus"></i></button>
                 </div>
                    
              </div>
            </div>
        </div>
        <div className="col-sm-3  d-flex justify-content-center align-items-center ">

       <div className="card " style={{width: '18rem'}}>
            <img src={myImage1} className="card-img-top" alt="..." />
            <div className="card-body">
                <p className="card-text"> 
                    pepsi <br />
                    price:60
                 </p> 
                 <div className ="buttons pt-4">
                    <button type='button' 
                        className='btn text-light fw-4'
                        data-bs-toggle="modal" 
                        data-bs-target="#exampleModal"
                        style={{background:"#3F51B5",width:"60px"}} >
                          <i className="fa-solid fa-plus"></i></button>

                    <button type='button' className='btn ms-2' data-bs-toggle="modal"
                     data-bs-target="#exampleModal" style={{background:"#F50057",width:"60px"}}><i className="fa-solid fa-minus"></i></button>
                 </div>
                    
              </div>
            </div>

    </div> 
    
    <div className="col-sm-3 d-flex justify-content-center align-items-center">

    <div className="card " style={{width: '18rem'}}>
            <img src={myImage3} className="card-img-top" alt="..." />
            <div className="card-body">
                <p className="card-text"> 
                    coldrink <br />
                    price:100
                 </p> 
                 <div className ="buttons pt-4">
                    <button type='button' data-bs-toggle="modal" data-bs-target="#exampleModal" className='btn text-light fw-4' style={{background:"#3F51B5",width:"60px"}} ><i class="fa-solid fa-plus"></i></button>
                    <button type='button' data-bs-toggle="modal" data-bs-target="#exampleModal" className='btn ms-2' style={{background:"#F50057",width:"60px"}}><i class="fa-solid fa-minus"></i></button>
                 </div>
                    
              </div>
            </div>
    </div>
    
    </div>
    <div class="row  mt-4 h-75 d-flex justify-content-center " style={{height:"300px"}}>
         <div class="col-sm-3  d-flex justify-content-center align-items-center">

    <div className="card " style={{width: '18rem'}}>
            <img src={myImage2} className="card-img-top" alt="..." />
            <div className="card-body">
                <p className="card-text"> 
                    coke <br />
                    price:100
                 </p> 
                 <div className ="buttons pt-3">
                    <button type='button' 
                    data-bs-toggle="modal" data-bs-target="#exampleModal"
                     className='btn shadow-none text-light fw-4' style={{background:"#3F51B5",width:"60px"}}
                      ><i className="fa-solid fa-plus"></i></button>

                    <button type='button' data-bs-toggle="modal" 
                    data-bs-target="#exampleModal" className='btn shadow-none ms-2'
                     style={{background:"#F50057",width:"60px"}}>
                      <i className="fa-solid fa-minus"></i></button>
                 </div>
                    
              </div>
            </div>
    </div>
        <div className="col-sm-3  d-flex justify-content-center align-items-center "></div>
        <div className="col-sm-3  d-flex justify-content-center align-items-center "></div>

      
   
    
    </div>  </div> </>
  )
}
