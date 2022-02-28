import axios from 'axios';
import React, { useEffect } from 'react';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import { useForm } from 'react-hook-form';


function Register() {

  const {register,handleSubmit, formState:{errors}} = useForm();

  let [name,setName] = useState('');
  let [email,setEmail] = useState('');
  let [phone,setPhone] = useState('');
  let [password,setPassword] = useState('');
  let [confirm, setConfirm] = useState('');
  let [match, setMatch] = useState('');
  let [message,setMessage] = useState('');

  async function onSubmit(){
    let res = await axios.post('http://localhost:4000/users/register/',
    {name,email,phone,password});
    
    if(res.data.statuscode===200){setMessage('Registered successfully')}
    else if(res.data.statuscode===400){setMessage('User already registered')}
  }

  useEffect(()=>{
    if(confirm === password){setMatch(false)}
    else {setMatch(true)}
  },[confirm])

    return (
      <div className="container">
    <div className="form-container">
      <h2>REGISTER HERE</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
      <div className='from-item'>
      <label htmlFor ="name">Name</label>
      <br></br>
      <input type="text" name="name" placeholder="EnterName" 
      {...register('Name',{required:true})}
      onChange={(b)=>{setName(b.target.value)}}/>
      <span style={{color:"red"}}>
      {errors.Name && <p>This Field is Required</p>}
      </span>
      </div>
      
      <div className='from-item'>
      <label htmlFor ="email">Email</label>
      <br></br>
      <input type="email" name="email" placeholder="EnterEmail" 
      {...register('Email',{required:true, pattern:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/})}
      onChange={(b)=>{setEmail(b.target.value)}}></input>
      <span style={{color:"red"}}>
      {errors.Email && <p>Please Check your email</p>}
      </span>
      </div>
      
      <div className='from-item'>
      <label htmlFor ="phone">Phone</label>
      <br></br>
      <input type="phone" name="phone" placeholder="EnterPhone" 
      {...register('Phone',{required:true, minLength:10})}
      onChange={(b)=>{setPhone(b.target.value)}}></input>
      <span style={{color:"red"}}>
      {errors.Phone && <p>Please check your phone number</p>}
      </span>
      </div>
      
      <div className='from-item'>
      <label htmlFor ="password">Password</label>
      <br></br>
      <input type="password" name="password" placeholder="EnterPassword" 
      {...register('Password',{required:true, minLength:8 , pattern:'^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'})}
      onChange={(b)=>{setPassword(b.target.value)}}></input>
      <span style={{color: 'red'}}>
      {errors.Password && <p>Password should contain atleast 8 characters<br/> including upper and lowercase letters,<br/> digits, special characters</p>}
      </span>
      </div>
      
      <div className='from-item'>
      <label htmlFor ="confirm password">Confirm password</label>
      <br></br>
      <input type="password" name="confirm password" placeholder="EnterPassword" onChange={(b)=>{setConfirm(b.target.value)}}></input>
      </div>

      <button type='submit' className='form-button'>Submit</button>
    
    </form>

      <div style={{color:"red"}} >
      {match? <p>Password should match</p>:<></>}
      <h3 style={{color:"rgb(238, 179, 29)"}}>{message}</h3>
      </div>
      <Link to={'/verification'}>Verify</Link>
    </div>
    </div>
  )
}

export default Register
