/* eslint-disable no-unused-vars */
import React from 'react'
import ComponentB from './ComponentB'

const ComponentA = () => {
  return (
    <div className='border-white border-2 p-2'>
      <p className='text-3xl text-white'>
        Component A
        <ComponentB/>
      </p>
    </div>
  )
}

export default ComponentA
