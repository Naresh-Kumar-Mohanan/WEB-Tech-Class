import React,{useState} from 'react'

const CForm = () => {

    let [emailState,setEmail] = useState()
    let [passState,setPass] = useState()

    function handleSubmit(e){
        e.preventDefault()     
    }

    function handleInput(event){
        console.log(event.target.value);

        setEmail(event.target.value)

    }
     function handleInput1(event){
        console.log(event.target.value);

        setPass(event.target.value)

    }
  return (
    <div>
      
      <form onClick={handleSubmit}>
        <h1>Controlled Forms</h1>
        <input type="text" placeholder='Enter the Email' onInput={handleInput}/><br /><br />
        <input type="text" placeholder='Enter the Password'onInput={handleInput1}/><br /><br />
        <button>Submit</button>
      </form>

    </div>
  )
}

export default CForm
