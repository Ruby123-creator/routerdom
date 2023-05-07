import React, { useEffect } from 'react'
import {useNavigate } from 'react-router-dom';

const Home =()=>{
    const Navigate = useNavigate();
    const NavToPage = ()=>{
        Navigate('/login')
    }
    useEffect(()=>{
        if(!(localStorage.getItem('login'))){
            Navigate("/login")
        }
    })
    return(
        <div>
           <h1>HOME PAGE</h1>
           <button onClick={()=>NavToPage()}>Go to about Page</button>
           <button onClick={()=>Navigate('/filter')}>Go to Filter page</button>
           <button onClick={()=>{localStorage.setItem('login' ,false)
         NavToPage("/login")}}>LOG out Page</button>
        </div>
    )
}

export default Home;