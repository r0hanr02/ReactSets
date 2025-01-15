/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";

const StopWatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const inputRef = useRef(null)
  const startTimeRef =useRef(0)

  useEffect(()=>{
    if(isRunning){
        inputRef.current = setInterval(() => {
            setElapsedTime(Date.now()-startTimeRef.current)
        }, 10);
    }
    return ()=>{
        clearInterval(inputRef.current)
    }
  },[isRunning])

  function start() {
    setIsRunning(true)
    startTimeRef.current=Date.now() - elapsedTime
  }
  function stop() {
    setIsRunning(false)
    
  }
  function reset() {
    setElapsedTime(0)
    setIsRunning(false)
  }
  function format() {
    let hours = Math.floor(elapsedTime / (1000*60+60))
    let minutes = Math.floor(elapsedTime / (1000*60)%60)
    let seconds = Math.floor(elapsedTime / (1000)%60)
    let milliSeconds = Math.floor((elapsedTime % 1000)/10)

    hours = String(hours).padStart(2,"0");
    minutes = String(minutes).padStart(2,"0");
    seconds = String(seconds).padStart(2,"0");
    milliSeconds = String(milliSeconds).padStart(2,"0");

    return `${hours}:${minutes}:${seconds}:${milliSeconds}`
  }
  return (
    <div className="flex flex-col items-center gap-2 border-2 justify-center w-1/2">
      <p className="text-3xl">StopWatch</p>
      <div className="text-7xl">{format()}</div>
      <div>
        <button
          onClick={start}
          className="p-5 border-2 m-4 hover:cursor-pointer hover:bg-white hover:text-black hover:scale-105 duration-150 hover:font-bold"
        >
          Start
        </button>
        <button
          onClick={reset}
          className="p-5 border-2 m-4 hover:cursor-pointer hover:bg-white hover:text-black hover:scale-105 duration-150 hover:font-bold"
        >
          Reset
        </button>
        <button
          onClick={stop}
          className="p-5 border-2 m-4 hover:cursor-pointer hover:bg-white hover:text-black hover:scale-105 duration-150 hover:font-bold"
        >
          Stop
        </button>
      </div>
    </div>
  );
};

export default StopWatch;
