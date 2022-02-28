import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


function Dashboard() {
  const [list,setList] = useState([]);

  const geturls = async ()=>{
    let data = await axios.get('http://localhost:4000/users/urlsdata/');
    console.log(data.data.document);
    setList(data.data.document);
  }
  
  useEffect(()=>{
    geturls();
  },[]);

  return (
    <div className="container" >
    <h2 className="title">Dashboard</h2>

    <div className="grid-container">

    <div className="nav-bar" >
    <Link to={'/register'}>Register</Link>
    <Link to={'/login'}>Login</Link>
    <Link to={'/verify'}>Verify</Link>
    </div>

    <div className="urls_container">
      <table style={{color: 'white'}}>
      <thead>
        <tr>
        <th>URL</th>
        <th>clicks</th>
        </tr>
      </thead>
      <tbody>
       {list.map((item,i)=>{
         console.log(item);
         console.log(item.url)
         return <tr key={i}>
         <td><a href={item.url}>{item.url}</a></td>
         <td>{item.count}</td>
         </tr>
       })
       }
      </tbody>
      </table>
    </div>

    </div> 
    </div>
  )
}

export default Dashboard
