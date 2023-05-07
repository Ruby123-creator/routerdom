import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login =()=>{
    let navigate = useNavigate();
    useEffect(()=>{
        let login = localStorage.getItem('login')
        if(login){
        navigate('/')
        }
    })
    return (
        <div>
        <h1>Login Page</h1>
        <br />
        <input type="text" name="" id="" />
        <br />
        <input type="password" name="" id="" />
        <br />
        <button onClick={()=>
        {
            localStorage.setItem('login' ,true)
            navigate('/')
        }
}
    
    
    >Login</button>
        </div>
    )
}
export default Login;