/* eslint-disable no-unused-vars */
import React, { useRef, useState, useEffect } from "react";

const UseRef = () => {
  const inputRef = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  console.log(inputRef);

  useEffect(() => {
    console.log("Component Rendered");
  }, []);

  const add = () => {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor="yellow";
    inputRef2.current.style.backgroundColor="";
    inputRef3.current.style.backgroundColor="";
  };
  const add2 = () => {
    inputRef2.current.focus();
    inputRef.current.style.backgroundColor="";
    inputRef2.current.style.backgroundColor="red";
    inputRef3.current.style.backgroundColor="";
  };
  const add3 = () => {
    inputRef3.current.focus();
    inputRef.current.style.backgroundColor="";
    inputRef2.current.style.backgroundColor="";
    inputRef3.current.style.backgroundColor="green";
  };
  return (
    <div className="flex flex-col items-center justify-between gap-5">
      <button className="border-white border-2 p-3 text-white" onClick={add}>
        Click here
      </button>
      <input type="text" ref={inputRef} />
      <button className="border-white border-2 p-3 text-white" onClick={add2}>
        Click here
      </button>
      <input type="text" ref={inputRef2} />
      <button className="border-white border-2 p-3 text-white" onClick={add3}>
        Click here
      </button>
      <input type="text" ref={inputRef3} />
    </div>
  );
};

export default UseRef;
