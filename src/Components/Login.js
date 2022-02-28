import React from 'react';
import {useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


function Login() {
  let [email,setEmail] = useState('');
  let [password,setPassword]= useState('');
  let [message,setMessage] = useState('');
//  console.log(email,password);
async function handleSubmit(event){
  if(event){
    event.preventDefault();
  }
    console.log(email);
    let res= await axios.post('http://localhost:4000/users/login',
    {email:email,password:password});
         console.log(res);
        if(res.data.statuscode===200){setMessage('Login successful')}
        else if(res.data.statuscode===404){setMessage('Verify your account before Login')}
        else if(res.data.statuscode===408){setMessage('Invalid user')}
        else if(res.data.statuscode===400){setMessage('Invalid password')}
    }
    
  return <>
  <div className="container">
   <div className="form-container">
      <h3>Login</h3>
      <form>
        <div className='from-item'>
        <label htmlFor='email'>Email</label>
        <br></br>
        <input type='email' placeholder='Enter Email' onChange={(b)=>setEmail(b.target.value)}/>
        </div>
        <div className='from-item'>
        <label htmlFor='password'>Password</label>
        <br></br>
        <input type='password' placeholder='Enter Password' onChange={(b)=>{setPassword(b.target.value)}}/>
        </div>
      <button type='submit' className='form-button' onClick={handleSubmit}>Login</button>
      </form>
      <h3 style={{color:'green'}}>{message}</h3>
      <Link to='/forgotpassword'>ForgotPassword</Link>
    </div>
    </div>
    </>
}

export default Login
