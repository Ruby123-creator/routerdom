import React from 'react'
import { useLocation, useParams } from 'react-router-dom';
const User =()=>{
    const params = useParams();
    const {name} = params;
    const location = useLocation();
    console.log(location);
    return(
        <div>
           <h4>This is {name} page</h4>
        </div>
    )
}
export default User;
