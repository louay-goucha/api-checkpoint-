import React ,{useState,useEffect}from 'react'
import axios from 'axios'

import { useParams } from 'react-router-dom'
import {Redirect} from 'react-router-dom'

function Profile({isLogin}) {
    const [user, setUser] = useState({})
    const {userId}=useParams()
 
    useEffect(()=>{
    const fetchUser=()=>{
        
    axios.get("https://jsonplaceholder.typicode.com/users/?id="+userId)
    .then(res=>setUser(res.data[0]))
    .catch(err=>console.log(err))
    }
    fetchUser()
    }
     ,[userId])
  
    return ( 
    <>
    {!isLogin ? <Redirect to='/' /> :
    (  
        <div className="d-flex justify-content-center align-items-center">
          <p
            style={{
              width: "100px",
              height: "100px",
              fontSize: "1.5em"
            }}
            className="d-flex justify-content-center align-items-center mr-auto border rounded-circle text-light bg-info text-md"
          >
           
            {user && user.name && user.name[0]}
          </p>
          

          <h1 className="display-3 col">{user && user.name}</h1>
          

          <p className="lead text-center col">
           

            {user &&
              user.address &&
              `${user.address.street} , ${user.address.suite} ,
               ${user.address.city}`}
          </p>
        </div>
      ) 
    }
    </>
    
    )
    
}

export default Profile
