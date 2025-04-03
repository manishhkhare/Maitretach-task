import { useState } from 'react'
import Headercomponent from './Headercomponent'
import Bodycomponent from './Bodycomponent'
import Footercomponent from './Footercomponent'
import Style from '../src/Component.module.css'
import Header from './screens/Header'
import Home from './screens/Home'
import Menu from './screens/menu'
import Registeration from './screens/Rergisteration'
import { Route, Router, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Login from './screens/Login'
import Thankyoupage from './screens/thankyoupage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition={Bounce}
      /> */}
  {/* <div className={Style.height} >
  <Headercomponent/>
     <Bodycomponent/>
     <Footercomponent/>

  </div> */} 
   <Header/>
  
    {/* <Routes>
      <Route path="/Menu" element={<Menu/>}></Route>
      <Route path="/Home" element={<Home/>}></Route>
      <Route path="/" element={<Registeration/>}></Route>

    </Routes> */}

 
    {/* <Thankyoupage/> */}
    
     {/* <Menu/> */}
    {/* ✅ Wrap everything in BrowserRouter */}
      <ToastContainer position="top-center" autoClose={500} hideProgressBar={false} />


      <Routes> {/* ✅ Ensure Routes is inside Router */}
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Registeration />} />
        <Route path="/menu" element={<Menu />} /> {/* ✅ Correct lowercase paths */}
        <Route path="/home" element={<Home />} />
        <Route path="/ordered" element ={<Thankyoupage/>}/>
      </Routes>
   
     
     
    </>
  );
}

export default App
