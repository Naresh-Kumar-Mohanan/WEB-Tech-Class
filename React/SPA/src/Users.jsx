import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Users= () => {

  let [users,setUsers]=useState(null)
  let [loading, setLoading]=useState(true)

  useEffect(()=>{

    async function abc(){
      let res = await axios.get("https://6992c2388f29113acd3ea556.mockapi.io/details")
        // let data= await res.json()

        console.log(res.data);
        

       setLoading(false)
        setUsers(res.data)
      
    }
    abc()
  },[])

  if(loading){
    return <div>
      Loading
    </div>
  }
  return (
    <div>
     {users.map((e)=>{
      return <div>
        {e.name}
      </div>
     })}
    </div>
  )
}

export default Users
