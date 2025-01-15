// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const UpdateArray = () => {
  const [foods, setFoods] = useState(["apple", "orange", "banana"]);

  function AddArray() {
    const newFood = document.getElementById("FoodInput").value;
    document.getElementById("FoodInput").value = "";

    setFoods((f) => [...f, newFood]);
  }
  function RemoveArray(index){
    setFoods(foods.filter((_,i)=>i !== index))
  }
  return (
    <div>
      <p>Lists of Fruits</p>
      <ul>
        {foods.map((food, index) => (
          <li key={index} onClick={()=>RemoveArray(index)}>{food}</li>
        ))}

        <input type="text" id="FoodInput" placeholder="Enter Fruits Name" />
        <button onClick={AddArray}> BUTTON</button>
      </ul>
    </div>
  );
};

export default UpdateArray;
