// eslint-disable-next-line no-unused-vars
import React,{useState} from 'react'

function UpdaterFunc() {
    const [counter, setCounter] = useState(0)

    const increment=()=>{
        setCounter(c => c + 1)
        setCounter(c => c + 1)
        setCounter(c => c + 1)
    }
    
    const reset=()=>{
        setCounter(0)
    }
    const decrement=()=>{
        setCounter(c=> c - 1)
        setCounter(c=> c - 1)
        setCounter(c=> c - 1)
    }


  return (
    <div>
      <div className='flex flex-col items-center justify-center'>
        <p className='text-7xl font-bold'>{counter}</p>
        <div>
        <button 
        className='m-3 p-3 bg-slate-400 border-2 border-black '
        onClick={increment}>Increment</button>
        <button 
        className='m-3 p-3 bg-slate-400 border-2 border-black '
        onClick={reset}>Reset</button>
        <button 
        className='m-3 p-3 bg-slate-400 border-2 border-black '
        onClick={decrement}>Decrement</button></div>
      </div>
    </div>
  )
}

export default UpdaterFunc
