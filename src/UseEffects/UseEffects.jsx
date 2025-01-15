/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

const UseEffects = () => {
  const [count, setCount] = useState(0);
  const [Color, setColor] = useState("green");
  const [Height, setHeight] = useState(window.innerHeight)
  const [Width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    document.title = `My Counter Program ${Color}`;
    window.addEventListener("resize",handleResize)
  },[count,Color])

  function addClick() {
    setCount((c) => c + 1);
  }
  function SubtractClick() {
    setCount((c) => c - 1);
  }
  function ChangeColor() {
    setColor(c=>c === "green"? "red" : "green");
  }

  function handleResize(){
    setHeight(window.innerHeight)
    setWidth(window.innerWidth)
  }
  return (
    <div>
      <p 
      style={{color:Color }}
      className="p-2 m-2 text-white font-extrabold text-3xl">
        Window Height:{Height} <br />
        Window width:{Width}
      </p>
      <button
        className="p-2 m-2 bg-slate-400  hover:scale-110 duration-150"
        onClick={addClick}
      >
        {" "}
        Click Me
      </button>
      <button
        className="p-2 m-2 bg-slate-400  hover:scale-110 duration-150"
        onClick={SubtractClick}
      >
        {" "}
        Subtract
      </button>
      <button
        className="p-2 m-2 bg-slate-400  hover:scale-110 duration-150"
        onClick={ChangeColor}
      >
        {" "}
        Color Change
      </button>

    </div>
  );
};

export default UseEffects;
