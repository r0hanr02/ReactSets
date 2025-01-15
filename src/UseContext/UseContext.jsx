/* eslint-disable no-unused-vars */
import React,{createContext, useState} from 'react'
import ComponentA from './ComponentA'

export const myComponent =createContext()
const UseContext = () => {
    
    const [user,setUser]=useState("Rohan")

  return (
    <div className='border-white border-2 p-2 '>
      <p className='text-3xl text-white'>{`Hello From ${user}`}</p>
      <myComponent.Provider value={user}>
        <ComponentA user={user}/>
      </myComponent.Provider>
    
    </div>
    
  )
}

export default UseContext
