import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './compnents/Home';
import About from './compnents/About';
import CustomNavbar from './compnents/CustomNavbar';
import Login from './compnents/Login';
import Registration from './compnents/Registration';
import Footer from './compnents/Footer';
import ListUser from './compnents/ListUser';



function App() {


  return (
    <>
    <CustomNavbar/>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='registration' element={<Registration/>}/>
        <Route path='users' element={<ListUser/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
