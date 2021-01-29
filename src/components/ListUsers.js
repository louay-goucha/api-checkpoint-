import React,{useState,useEffect} from 'react'
import axios from'axios'
import UserCard from './UserCard'

import { Redirect } from 'react-router-dom'

function ListUsers({isLogin}) {
   const [users, setUsers] = useState([{}]) 

  useEffect(()=>{
   const fetchData=()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res=>setUsers(res.data))
    .catch(err=>console.log(err))
   }
   fetchData()
  },[])
  



   return(
     <>
  {(!isLogin) ?  <Redirect to='/' />
   : (
    <div>
   
   {users.map((user,i)=><UserCard user={user} key={i} />)}
  
  </div>
  )}
  </>
   )
   }
    
      


export default ListUsers;
