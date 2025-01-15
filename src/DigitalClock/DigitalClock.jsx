/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useEffect } from "react";

const DigitalClock = () => {
  
  const [Time, setTime] = useState(new Date());

  useEffect(() => {
    const IntervalId = setInterval(() => {
      setTime(new Date());
    },1000);
    return () => {
      clearInterval(IntervalId);
    };
  }, []);

  function TimeFormat() {
    let hours = Time.getHours();
    const seconds = Time.getSeconds();
    const minutes = Time.getMinutes();
    const milli = Time.getMilliseconds();
    const meridiam = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    return `${timepad(hours)}:${timepad(minutes)}:${timepad(seconds)} ${meridiam}`;
  }
  function timepad(number) {
    return (number < 10 ? "0" : "") + number
  }

  return (
    <div>
      <div>
        <p className="text-white text-7xl font-bold text-center">
          {TimeFormat()}
        </p>
      </div>
    </div>
  );
};

export default DigitalClock;
