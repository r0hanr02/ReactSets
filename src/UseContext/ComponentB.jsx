/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import ComponentC from './ComponentC'
import { myComponent } from './UseContext'

const ComponentB = () => {
  const user = useContext(myComponent)
  return (
    <div className='border-white border-2 p-2'>
      <p className='text-3xl text-white'>
        Component B
        <p>{user}</p>
        <ComponentC/>
      </p>
    </div>
  )
}

export default ComponentB
