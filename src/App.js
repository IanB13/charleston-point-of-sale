import './App.css';
import getBookings from './services/getBookings'
import getAreas from './services/getAreas'
import getAvailableAreas from './services/getAvailableAreas';

const App = () => {
  const bookings = () =>{
    getBookings("2020-11-02","2020-12-05")
  }

  const availableAreas = () => {
    getAvailableAreas("2020-11-02","2020-12-05")
  }

  return (
    <div>
      Hello World
      <div>
        <button onClick={bookings} >
          bookings
       </button>
      </div>

      <div>
        <button onClick={getAreas} >
          Areas
       </button>
      </div>
      
      <div>
        <button onClick={availableAreas} >
          Available Areas
       </button>
      </div>
    </div>
  );
}

export default App;
