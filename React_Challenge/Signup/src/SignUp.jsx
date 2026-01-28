import React, { useState } from 'react'

const SignUp = () => {
  let [state, setState] = useState({
    userName: "",
    email: "",
    mobile: "",
    gender: "",
    skills: []
  })

  function handleSubmit(e) {
    e.preventDefault()
  }

  function handleInput(e) {
    // setState({ ...state, [e.target.name]: e.target.push(e.target.value) })
    if (e.target.type == "checkbox") {
      console.log("This is for Checkbox");

      let index = state.skills.findIndex(ele => ele == e.target.value)
      console.log(index);
      if (index == -1) {
        state.skills.push(e.target.value);
        setState({ ...state, skills: state.skills })
      } else {
        state.skills.splice(index, 1)
        setState({ ...state, skills: state.skills })
      }
    } else {
      setState({ ...state, [e.target.name]: e.target.value })
    }
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>

        <input type="text" placeholder='Enter the Username' name='userName' value={state.userName} onInput={handleInput} /><br /><br />
        <input type="text" placeholder='Enter the Email' name='email' value={state.email} onInput={handleInput} /><br /><br />
        <input type="text" placeholder='Enter the Mobile Number' name='mobile' value={state.mobile} onInput={handleInput} /><br /><br />

        <label htmlFor="">Gender: </label>
        <input type="radio" name='gender' onInput={handleInput} value="male" /> <label htmlFor="">Male</label>
        <input type="radio" name='gender' onInput={handleInput} value="female" /> <label htmlFor="">Female</label> <br /><br />

        <label htmlFor="">Skills</label>
        <input type="checkbox" name='skills' value="HTML" onInput={handleInput} /> <label htmlFor="">HTML</label>
        <input type="checkbox" name='skills' value="CSS" onInput={handleInput} /> <label htmlFor="">CSS</label>
        <input type="checkbox" name='skills' value="JS" onInput={handleInput} /> <label htmlFor="">JS</label>
        <input type="checkbox" name='skills' value="React" onInput={handleInput} /> <label htmlFor="">React</label>

        {/* <label htmlFor="">Skills: </label>
        <input type="checkbox" /><br /><br />

        <label htmlFor="">Password: </label>
        <input type="password" /> <br /><br /> */}

        <button>Submit</button>


      </form>
    </div>
  )
}

export default SignUp