// import React from 'react'

import { useState } from "react"

const UseStateHooks = () => {
    const[Name,setName]=useState("Guest")
    const[age,setAge]=useState(0)
    const[isEmployed,setIsEmployed]=useState(false)

    function changeName() {
        setName("Rohan")
    }
    function AgeIncrement(){
        setAge(age + 1)
    }
    const status =()=>{
        setIsEmployed(!isEmployed)
    }
  return (
    <div>
        <h2>Name :  {Name}</h2> 
        <button className="border-2 p-2 m-2 border-black" onClick={changeName}>Set Name</button>
        <h2>Age :  {age}</h2>
        <button className="border-2 p-2 m-2 border-black" onClick={AgeIncrement}>Set Age</button>
        <h2>Is Employed :  {isEmployed ? "Yes" : "No" }</h2>
        <button className="border-2 p-2 m-2 border-black" onClick={status }>Toggle Status</button>
      
    </div>
  )
}

export default UseStateHooks
