import './App.css';
import getAllBookings from './services/getAllBookings'

const App = () => {

  return (
    <div>
       Hello World
       <button onClick ={getAllBookings} >
         button
       </button>
    </div>
  );
}

export default App;
