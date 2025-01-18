/* eslint-disable no-unused-vars */
import { useState, useRef } from "react";

function Animated() {
  const [color, setColor] = useState("red");
  const [bgcolor, setBgColor] = useState("white");
  const [progress, setProgress] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const intervalRef = useRef(null);
  function handleStart() {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev === 100) {
            clearInterval(intervalRef.current);
            setIsRunning(false);
            return 100;
          }
          return prev + 1;
        });
      }, 100);
    }
  }

  const handleStop = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setProgress(0);
    setIsRunning(false);
  };

  return (
    <>
      <div className="h-full flex flex-col w-full items-center justify-center">
        <p className="text-4xl font-bold text-center">Animated Button</p>
        <div className="flex flex-col">
          <label htmlFor="">
            Color:
            <input
              className="w-full h-10 border-2"
              type="color"
              onChange={(e) => {
                setColor(e.target.value.toLowerCase());
              }}
            />
          </label>
          <label htmlFor="">
            BackGround Color:
            <input
              className="w-full h-10 border-2"
              type="color"
              onChange={(e) => {
                setBgColor(e.target.value.toLowerCase());
              }}
            />
          </label>
        </div>
        <div className="flex items-center justify-center gap-10">
          {/* Start Button */}
          <button
            style={{ backgroundColor: bgcolor, color: color }}
            className="w-32 border-4 p-5 m-5 rounded-2xl hover:text-black hover:bg-white duration-150 hover:font-bold  hover:translate-y-5 hover:scale-110 shadow-2xl hover:animate-bounce"
            onClick={handleStart}
          >
            Start
          </button>

          {/* Reset Button */}
          <button
            style={{ backgroundColor: bgcolor, color: color }}
            className="w-32 border-4 p-5 m-5 rounded-2xl duration-150 hover:font-bold hover:translate-y-5 hover:scale-110 shadow-2xl hover:animate-bounce"
            onClick={handleReset}
          >
            Reset
          </button>

          {/* Stop Button */}
          <button
            style={{ backgroundColor: bgcolor, color: color }}
            className="w-32 border-4 p-5 m-5 rounded-2xl hover:text-black hover:bg-white duration-150 hover:font-bold hover:translate-y-5 hover:scale-110 shadow-2xl hover:animate-bounce"
            onClick={handleStop}
          >
            Stop
          </button>
        </div>
        <div className="w-[50vw] h-5 bg-slate-300 rounded-full shadow-2xl">
          <div
            style={{
              backgroundColor: `${color}`,
              width: `${progress}%`,
            }}
            className="h-full bg-green-500 rounded-full transition-all duration-150 shadow-2xl"
          ></div>
        </div>
      </div>
    </>
  );
}

export default Animated;
