import React,{useState, useEffect} from 'react';
import axios from 'axios';

function ForgotPassword() {
    let [name,setName] = useState('');
    let [email,setEmail] = useState('');
    let [phone,setPhone] = useState('');
    let [newpassword,setNewPassword] = useState('');
    let [confirm, setConfirm] = useState('');
    let [match, setMatch] = useState('');
  let [message,setMessage] = useState('')

  async function handleSubmit(event){
    if(event){
      event.preventDefault();
    }
    let res = await axios.post('http://localhost:4000/users/forgotpassword/',
    {name,email,phone,newpassword});
     console.log({name,email,phone,newpassword});
    // console.log(res);
    
    if(res.data.statuscode===200){setMessage('Password reset Successful. Verify to login')}
    else if(res.data.statuscode===400){setMessage('Invalid credentials')}
    else if(res.data.statuscode===404){setMessage('Email doesnot registered')}
    }


  useEffect(()=>{
    if(confirm === newpassword){setMatch(false)}
    else {setMatch(true)}
  },[confirm])

    
  return <>
    <div className="container">
    <div className="form-container">
      <h3>Reset your Password</h3>
      <form>
        <div className='from-item'>
      <label htmlFor ="name">Name</label>
      <br></br>
      <input type="text" name="name" placeholder="EnterName" onChange={(b)=>{setName(b.target.value)}}></input>
      </div>
      
      <div className='from-item'>
      <label htmlFor ="email">Email</label>
      <br></br>
      <input type="email" name="email" placeholder="EnterEmail" onChange={(b)=>{setEmail(b.target.value)}}></input>
      </div>
      
      <div className='from-item'>
      <label htmlFor ="phone">Phone</label>
      <br></br>
      <input type="phone" name="phone" placeholder="EnterPhone" onChange={(b)=>{setPhone(b.target.value)}}></input>
      </div>
      
      <div className='from-item'>
      <label htmlFor ="password">New Password</label>
      <br></br>
      <input type="password" name="new password" placeholder="Enter New Password" onChange={(b)=>{setNewPassword(b.target.value)}}></input>
      </div>

      <div className='from-item'>
      <label htmlFor ="confirm password">Confirm password</label>
      <br></br>
      <input type="password" name="confirm password" placeholder="EnterPassword" onChange={(b)=>{setConfirm(b.target.value)}}></input>
      </div>

      <button type='submit' className='form-button' onClick={handleSubmit}>Reset</button>
    </form>
    <div style={{color:"red"}}>
      {match? <h4>Password should match</h4>:<></>}
      <h3 style={{color:"green"}}>{message}</h3>
    </div>
    </div>
    </div>
    </>
  
}

export default ForgotPassword
