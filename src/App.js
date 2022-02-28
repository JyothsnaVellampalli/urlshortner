
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import Register from './Components/Register';
import Verification from './Components/Verification';
import ForgotPassword from './Components/ForgotPassword';

function App() {


  return <>
 
  <BrowserRouter>
  <Routes>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/verify' element={<Verification/>}/>
    <Route path='/forgotpassword' element={<ForgotPassword/>}/>
    <Route path='/' element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
 
 </>
}

export default App;
