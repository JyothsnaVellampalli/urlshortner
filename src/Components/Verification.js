import React, {useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

function Verification() {
    // console.log(window.location.href);
    let [verified,setVerified] = useState('');
    let[name,setName] = useState('');
    let [email,setEmail] = useState('');
    
    let testurl = new URL(window.location.href);
    let params = new URLSearchParams(testurl.search);
    let id = params.get("id");
    // console.log(token);

    let handleSubmit= async() => {
        let res = await axios.get(`http://localhost:4000/users/verify?id=${id}`);

        if(res.data.statuscode===200){
            setVerified('Account verified');
        }
        if(res.data.statuscode===400){
            setVerified('Invalid Key')
        }

        let reponse= await axios.post('http://localhost:4000/users/urls',{url:testurl})
        console.log(reponse)
    }
   
    

  return <>
      <div className="container">
    <div className="form-container">
        
        <div className="from-item">
        <label htmlFor="name">Name</label>
        <br></br>
        <input type='name' placeholder='Enter Name' onChange={(b)=>{setName(b.target.value)}}/>
        </div>

         <div className="from-item">
        <label htmlFor="email">Email</label>
        <br></br>
        <input type='email' placeholder='Enter Email' onChange={(b)=>{setEmail(b.target.value)}}/>
        </div>
        
        
        <button className="form-button" onClick={()=>handleSubmit()}>Verify</button>
        <h3 style={{color:'green'}}>{verified}</h3>
        <Link to={'/login'}>Login</Link>
    </div>
       </div>
       </>
}

export default Verification
