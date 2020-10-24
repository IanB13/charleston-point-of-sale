import {useState} from 'react'
import './App.css';
import getAvailableAreas from './services/getAvailableAreas';
import AreaList from './components/AreaList'

const App = () => {
  const [startDate , setStartDate] = useState(null) 
  const [endDate , setEndDate] = useState(null)
  const [availAreas, setAvailAreas] = useState(null)

  const startBoi = (e) =>{
    console.log("start date", e.target.value)
    setStartDate(e.target.value)
  }

  const endBoi = (e) =>{
    console.log("end date",e.target.value)
    setEndDate(e.target.value)
  }

  const getAreas = async () =>{
    const areas = await getAvailableAreas(startDate,endDate)
    setAvailAreas(areas)
  }

  return (
    <div>
      Find Avalible Areas
      <div>
        <input type= "date" onChange = {startBoi}/>
        <input type= "date" onChange = {endBoi} />
      </div>
      <div>
        <button onClick = {getAreas} >
          Get Avalible Areas
        </button>
      </div>
      <AreaList areas = {availAreas} />
    </div>
  );
}

export default App;
