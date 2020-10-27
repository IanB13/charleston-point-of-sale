import {useEffect, useState} from 'react'
import './App.css';
import getAvailableAreas from './services/getAvailableAreas';
import AreaList from './components/AreaList'
import Message from './components/BookingMessage'
import {Button,Input} from "semantic-ui-react"

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
    setStartDate(e.target.value)
  }

  const changeEndDate = (e) =>{
    setEndDate(e.target.value)
  }

  const getAreas = async () =>{
    const areas = await getAvailableAreas(startDate,endDate)
    setAvailAreas(areas)
  }
  const showColor = startDate&&endDate 
  const buttonColor = showColor?"blue":"grey"

  return (
    <div>
      <Message message ={message}/>
      <h1>Find Available Areas</h1>
      <div>
        <Input type= "date" onChange = {changeStartDate}/>
        <Input type= "date" onChange = {changeEndDate} />
        <Button color = {buttonColor} onClick = {getAreas} >
          Get Avalible Areas
        </Button>
      </div>
      <AreaList 
      areas = {availAreas} 
      startDate = {startDate} 
      endDate = {endDate} 
      setMessage = {setMessage}
      setAvailAreas = {setAvailAreas}
      />
    </div>
  );
}

export default App;
