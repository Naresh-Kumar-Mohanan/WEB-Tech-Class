import React ,{useRef} from 'react'

const UcForms = () => {
    let obj={
        email:"",
        password:""
    }

    let emailRef = useRef()
    let passRef = useRef()

    function handleSubmit(e){
        e.preventDefault()

        obj.email=emailRef.current.value
        obj.password=passRef.current.value
       
        console.log(obj);
        
       
    

        emailRef.current.value=""
        passRef.current.value=""

        // console.log(emailRef.current.value);
        // console.log(passRef.current.value);
        

    }
  return (
    <div>
      <form onClick={handleSubmit}>
        <input type="text" placeholder='Enter the Email' ref ={emailRef}/> <br /><br />
        <input type="text" placeholder='Enter the Password' ref={passRef}/><br /><br />
        <button>Login</button>
      </form>
    </div>
  )
}

export default UcForms
