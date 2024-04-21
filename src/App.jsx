import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './Pages/Home';
// import BookAppointment from './Components/BookAppointment/BookAppointment';
import Appointment from './Pages/Appointment';
import Hospitals from './Pages/Hospitals';

function App() {

  return (
    <div className='app'>
      <Router basename='/medify'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/appointment' element={<Appointment/>}/>
          <Route path='/hospitals' element={<Hospitals/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
