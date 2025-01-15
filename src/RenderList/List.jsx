/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";

// function List() {
//   const fruits=['apple', 'banana', 'coconut', 'orange', 'pineapple']
//   const listItems= fruits.map(fruit=>   <li>{fruit}</li> )

//   return (<ol>{listItems}</ol>);
// }

function List() {
  const fruits = [
    {id:1, name: "apple", calories: 95 },
    {id:2, name: "banana", calories: 45 },
    {id:3, name: "coconut", calories: 105 },
    {id:4, name: "orange", calories: 150 },
    {id:5, name: "pineapple", calories: 95 },
  ];
//   fruits.sort((a,b)=>b.name.localeCompare(a.name));//reverse order
//   fruits.sort((a,b)=>a.name.localeCompare(b.name));//alphabetical order
// fruits.sort((a,b)=>a.calories - b.calories);// Numeric 
// fruits.sort((a,b)=>b.calories - a.calories);// reverse Numeric 

const lowCalories =fruits.filter(fruit=>fruit.calories<100)

const HighCalories =fruits.filter(fruit=>fruit.calories>=100)
  
  const listItems = HighCalories.map((HighCalorie) => <li>
                        {HighCalorie.id}&nbsp;
                        {HighCalorie.name}&nbsp;
                        {HighCalorie.calories}&nbsp;
                        </li>);

  return <ol>{listItems}</ol>;

  
}

export default List;
