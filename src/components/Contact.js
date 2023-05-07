import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';

const Contact =()=>{
    return(
        <div>
           <h1>Contact PAGE</h1>
           <div style={{display:'flex' , flexDirection:'column'}}>
           <li> <NavLink to="company">Company page</NavLink></li>
           <li><NavLink to="channel">Channel page</NavLink></li>  
           <li><NavLink to="other">Other's page</NavLink></li>    
  

           <Outlet/>
           </div>
          

        </div>
    )
}

export default Contact;