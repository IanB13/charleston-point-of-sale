import {useEffect, useState} from 'react'
import './App.css';
import getAvailableAreas from './services/getAvailableAreas';
import getBookings from './services/getBookings'
import AreaList from './components/AreaList'
import getGuests from './services/getGuests'
import getRatePlans from './services/getRatePlans'
import Message from './components/BookingMessage'

const App = () => {
  const [startDate , setStartDate] = useState(null) 
  const [endDate , setEndDate] = useState(null)
  const [availAreas, setAvailAreas] = useState(null)
  const [message, setMessage] = useState(null)

  useEffect(()=>{
    if(message){
    setTimeout( ()=>{setMessage(null)},5000)
    }
  },[message])

  const changeStartDate = (e) =>{
    console.log("start date", e.target.value)
    setStartDate(e.target.value)
  }

  const changeEndDate = (e) =>{
    console.log("end date",e.target.value)
    setEndDate(e.target.value)
  }

  const getAreas = async () =>{
    const areas = await getAvailableAreas(startDate,endDate)
    setAvailAreas(areas)
  }

  //Testing THINGS
  const testBookings = async () =>{
    console.log(await getBookings(startDate,endDate))
  }

  const testGuests = async () =>{
    console.log("getting guests")
    console.log( await getGuests())
  }

  const testRatePlans = async () => {
    console.log("getting rate plans")
    console.log(await getRatePlans() )
  }
  //END testing things 

  return (
    <div>
      <Message message ={message}/>
      <h1>Test Area</h1>
      <div>
        <button onClick = {testBookings}>
          Test booking
        </button> <br/>
        <button onClick = {()=>setMessage(true)}>
          Test Message
        </button> <br/>
        <button onClick = {testGuests}>
          Test Guests
        </button> <br/>
        <button onClick = {testRatePlans}>
          Test rate plans
        </button> <br/>
      </div>
      Find Avalible Areas
      <div>
        <input type= "date" onChange = {changeStartDate}/>
        <input type= "date" onChange = {changeEndDate} />
      </div>
      <div>
        <button onClick = {getAreas} >
          Get Avalible Areas
        </button>
      </div>
      <AreaList 
      areas = {availAreas} 
      startDate = {startDate} 
      endDate = {endDate} 
      setMessage = {setMessage}
      />
    </div>
  );
}

export default App;
