import React,{useState} from 'react'


const Signup = () => {
  let [signData, setSignData] = useState({
    name:"",
    salary:""
  })

  function handleChange(e){
    setSignData({...signData,[e.target.name]:e.target.value})

  }
  
  async function handleSubmit(e){
    e.preventDefault()

    let res = await axios.post("https://6992c2388f29113acd3ea556.mockapi.io/details",signData)
     console.log(res);
     

  //   let res = await fetch("https://6992c2388f29113acd3ea556.mockapi.io/details",{
  //   method:"POST",
  //   headers:{
  //     "Content-Type":"application/json"
  //   },
  //   body: JSON.stringify(signData)
    
  // })

  // let data= await res.json()
  // console.log(data);

  }
  
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter the user name' name='name' value={signData.name} onChange={handleChange}/>
        <input type="text" placeholder='Enter the Salary' name='salary' value={signData.salary} onChange={handleChange}/>
        <button disabled={signData.name && signData.salary ? false : true}>Submit</button>
      </form>
     
    </div>
  )
}

export default Signup
