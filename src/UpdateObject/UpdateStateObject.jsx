// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const UpdateStateObject = () => {
  const [car, setCar] = useState({
    name: "Mustang",
    year: 2002,
    model: "Ford",
  });

  function handleNameChange(e){
    setCar(c => ({...c, name:e.target.value}))
  }
  function handleYearChange(e){
    setCar(c => ({...c, year:e.target.value}))
  }
  function handleModelChange(e){
    setCar(c => ({...c, model:e.target.value}))
  }
  return (
    <div>
      <p> Your Favorite Car Is {car.name} {car.year} {car.model} </p>

      <input type="text" value={car.name} onChange={handleNameChange} />
      <input type="number" value={car.year} onChange={handleYearChange} />
      <input type="text" value={car.model} onChange={handleModelChange} />
    </div>
  );
};

export default UpdateStateObject;
