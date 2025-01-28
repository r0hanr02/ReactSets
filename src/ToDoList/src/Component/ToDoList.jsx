/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useState } from "react";
import "./TodoLis.css";
import { MdDelete } from "react-icons/md";


const getData=()=>{
    let list = localStorage.getItem("Task")
    if (list) {
        return JSON.parse(localStorage.getItem("Task"))
    }else{
        return[]
    }
}

const ToDoList = () => {
  const [input, setInput] = useState("");
  const [task, setTask] = useState(getData());

 

  const addTask = () => {
    if (input.trim() !== "") {
      setTask([...task, input]);
      setInput("");
    }
  };

  const deleteItem = (index) => {
    const newTasks = task.filter((_, idx) => idx !== index);
    setTask(newTasks);
  };

  useEffect(() => {
    localStorage.setItem("Task",JSON.stringify(task))
  }, [task])
  
  return (
    <div>
      <h1>To Do List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {task.map((tasks, idx) => (
          <li key={idx}>
            {tasks}
            <button
              onClick={() => deleteItem(idx)} // Correctly pass the index here
              style={{
                marginLeft: "10px",
                color: "white",
                backgroundColor: "red",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                padding: "5px",
              }}
            >
              <MdDelete size={20} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
