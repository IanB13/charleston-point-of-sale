import {useState} from 'react'
import './App.css';
import getAvailableAreas from './services/getAvailableAreas';
import RoomsList from './components/RoomsList'

const App = () => {
  const [startDate , setStartDate] = useState(null) 
  const [endDate , setEndDate] = useState(null)
  const [availRooms, setAvailRooms] = useState(null)

  const startBoi = (e) =>{
    console.log("start date", e.target.value)
    setStartDate(e.target.value)
  }

  const endBoi = (e) =>{
    console.log("end date",e.target.value)
    setEndDate(e.target.value)
  }

  const getRooms = async () =>{
    const rooms = await getAvailableAreas(startDate,endDate)
    setAvailRooms(rooms)
  }

  return (
    <div>
      Find Avalible Rooms
      <div>
        <input type= "date" onChange = {startBoi}/>
        <input type= "date" onChange = {endBoi} />
      </div>
      <div>
        <button onClick = {getRooms} >
          Get Avalible Rooms
        </button>
      </div>
      <RoomsList rooms = {availRooms} />
    </div>
  );
}

export default App;
