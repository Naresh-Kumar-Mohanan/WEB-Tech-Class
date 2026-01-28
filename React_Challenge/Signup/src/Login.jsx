import React, { useState } from 'react'

const Login = () => {
    let [login,setLogin]=useState({
        userName:"",
        password:""
    })

    function handleInput(e){
        console.log(e.target);
        setLogin({...login,[e.target.name]:e.target.value})

    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(login);

        setLogin({
            userName:"",
            password:""
        })
        
    }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter the UserName' name='userName' value={login.userName} onInput={handleInput}/><br /><br />
        <input type="text" placeholder='Enter the Password' name='password' value={login.password} onInput={handleInput}/><br /><br />
        <button>Login</button>
      </form>
    </div>
  )
}

export default Login
