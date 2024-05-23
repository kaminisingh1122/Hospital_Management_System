
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/AboutUs';
import Login from './Pages/Login';
import Appointment from './Pages/Appointment';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Register from './Pages/Register';

function App() {
    return(
        <>
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/appointment" element={<Appointment/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
            </Routes>
            <ToastContainer position='top-centre'/>
        </Router>
        </>
    );
 
}

export default App;
