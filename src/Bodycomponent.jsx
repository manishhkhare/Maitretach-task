import React, { useEffect, useState } from 'react'
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
import { Button, Container, Form, InputGroup } from 'react-bootstrap'

export default function Bodycomponent() {
  const [origin,setOrigin]=useState("");
  const [destination,setDestination]= useState("");
  const [distance,setdistance] = useState("");
  const api = '5b3ce3597851110001cf624848c5c3f40fc94b01bb47a4232fd27e46'


  const hendleroute = async() =>{
 
    if(!origin || !destination){
        // console.log(destination,origin)
        return alert("please enter its")
          }
      const originCoords = await getCoordinates(origin)
      const destinationCoords = await getCoordinates(destination)
       console.log(originCoords,destinationCoords)
      
      if (!originCoords || !destinationCoords) {
      return alert("Invalid locations. Please try again.");
        
      } 

      const body = {
        locations:[originCoords,destinationCoords],
        metrics:['distance']

      };

      const response = await fetch(
         `https://api.openrouteservice.org/v2/matrix/driving-car`,{
            method:'POST',
            headers:{
              'content-Type':'application/json',
               Authorization:api,
                  }, 
            body:JSON.stringify(body)
          }
            ).then(res=>res.json())
             .then(result=>{
              setDestination({...distance,distance:result.distances})
                console.log(result.routes[0])
             })
             console.log(distance)
          }
 
    const getCoordinates = async(place)=>{
      const response  = await fetch(`https://api.openrouteservice.org/geocode/search?api_key=${api}&text=${place}`)
      .then(res=>res.json())
        .then(result=>{ 
            if(result.features.length > 0){
              return result.features[0].geometry.coordinates
              // console.log(data)
            } else{
              console.log(result)
            }
    }).catch(error=>console.log(error))
      return response;
  } 
    
   return (
  <>
  <Container fluid className='border p-0'  style={{height:"100vh"}}>
  <div className='sarch-bar d-flex justify-content-center p-2 ' style={{backgroundColor:"#ddd"}}>
  <Form >
     <InputGroup  style={{width:'400px'}}>
       <Form.Control type='text' className='rounded-pill' placeholder='serach ..'style={{outline:"none",boxShadow: "none", borderColor: "#ccc" }} >
         </Form.Control>

       <Button className='rounded-pill ms-1'>Serch</Button>
     </InputGroup>   
    </Form>
    
  </div>
  <div className='h-50 d-flex justify-content-center'>

    <Form className='w-50 mt-4 position-relative '>
      <Form.Control type='text' className="mb-3" onChange={e=>setOrigin(e.target.value)} placeholder='origine..'></Form.Control>
      <Form.Control type='text' placeholder='destination..' onChange={e=>setDestination(e.target.value)}></Form.Control>
      <Button   size='sm' variant='success' className="mt-1 form-control" onClick={hendleroute}> Serch</Button>   
    </Form>
    

  </div>

  <MapContainer center={[23.2599, 77.4126]} zoom={13} style={{ height: "400px", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[51.505, -0.09]}>
        <Popup>Hello</Popup>
      </Marker>
    </MapContainer>
 
  
  </Container>

  
  </>
  )
}
