/* eslint-disable no-unused-vars */
import React,{useContext} from 'react'
import {myComponent} from './UseContext'

const ComponentC = () => {
  const user =useContext(myComponent)
  return (
    <div className='border-white border-2 p-2'>
      <p className='text-3xl text-white'>
        Component C
       <p>
        {`BYE ${user}`}
        </p>
      </p>
    </div>
  )
}

export default ComponentC
