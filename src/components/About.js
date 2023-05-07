import React from 'react'
import { NavLink } from 'react-router-dom';
const About =()=>{
    return(
        <div>
           <h1>About PAGE</h1>
           <li> <NavLink to="/user/peter" state={{name:"peter",age:23,country:"India"}}>About Peter</NavLink></li>
           <li><NavLink to="/user/anil">About Anil</NavLink></li>
           
        </div>
    )
}

export default About;