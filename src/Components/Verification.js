import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

function Verification() {
    // console.log(window.location.href);
    let [verified,setVerified] = useState('');
    let[name,setName] = useState('');
    let [email,setEmail] = useState('');
    
    
    const urloriginal = async ()=>{
        // let id = getparams();
        const testurl = new URL(window.location.href);
        let params = new URLSearchParams(testurl.search);
        let id = params.get("id");
        console.log(id);
        let res = await axios.get(`http://localhost:4000/users/verify?id=${id}`);
        console.log(res.data)
        setName(res.data.name);
        setEmail(res.data.email);
        if(res.data.statuscode===200){
        let replace = await window.location.replace(`http://localhost:3000/verify?token=${res.data.token}`);}
        else if(res.data.statuscode===404){
            setVerified("URL not found");
        }
        let reponse= axios.post('http://localhost:4000/users/urls',{url:testurl});
        }
    
    useEffect(()=>{
        
        urloriginal();
        // console.log(token);
    },[]);
    
    let handleSubmit= async() => {
        // let id = getparams();
        let testurl = new URL(window.location.href);
        let params = new URLSearchParams(testurl.search);
        let id = params.get("token");
        let res = await axios.get(`http://localhost:4000/users/verifyuser?token=${id}`)
        if(res.data.statuscode===200){
            setVerified('Account verified');
        }
        if(res.data.statuscode===400){
            setVerified('Invalid Key')
        }
    }
   
    

  return <>
      <div className="container">
    <div className="form-container">
        
        <div className="from-item">
        <label htmlFor="name">Name</label>
        <br></br>
        <input type='name' placeholder='Enter Name' value={name} onChange={(b)=>{setName(b.target.value)}}/>
        </div>

         <div className="from-item">
        <label htmlFor="email">Email</label>
        <br></br>
        <input type='email' placeholder='Enter Email' value={email} onChange={(b)=>{setEmail(b.target.value)}}/>
        </div>
        
        
        <button className="form-button" onClick={()=>handleSubmit()}>Verify</button>
        <h3 style={{color:'green'}}>{verified}</h3>
        <Link to={'/login'}>Login</Link>
    </div>
       </div>
       </>
}

export default Verification
