// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const ToDoList = () => {
  const [Tasks, setTasks] = useState(["First", "Second", "Thirds"]);
  const [NewTasks, setNewTasks] = useState("");

  function addTask() {
    if (Tasks.trim !== "") {
      const newTask = [...Tasks, NewTasks];
      setTasks(newTask);
      setNewTasks("");
    }
  }
  function deleteTask(index) {
    const updatedTask = Tasks.filter((_, i) => i !== index);
    setTasks(updatedTask);
  }
  function MoveUp(index) {
    if (index > 0) {
      const updatedTask = [...Tasks];
      [updatedTask[index], updatedTask[index - 1]] = [
        updatedTask[index - 1],
        updatedTask[index]
      ];
      setTasks(updatedTask)
    }
  }
  function MoveDown(index) {
    if (index < Tasks.length - 1) {
      const updatedTask = [...Tasks];
      [updatedTask[index], updatedTask[index + 1]] = [
        updatedTask[index + 1],
        updatedTask[index]
      ];
      setTasks(updatedTask)
    }
  }
  function handleNewTask(e) {
    setNewTasks(e.target.value);
  }

  return (
    <div className="flex flex-col w-full items-center justify-center">
      <p className="text-white text-3xl font-semibold">TO DO LIST</p>
      <div>
        <input
          type="text"
          className="w-96 p-2 m-2"
          value={NewTasks}
          placeholder="Enter Task Here ....."
          onChange={handleNewTask}
        />
        <button
          className="bg-gray-400 p-2 m-2 hover:bg-gray-500 font-bold"
          onClick={addTask}
        >
          Add Items
        </button>
      </div>
      <ol>
        {Tasks.map((task, index) => (
          <li
            key={index}
            className="text-white font-bold flex items-center justify-between "
          >
            <span>{task}</span>
            <button
              className="m-2 p-2 bg-gray-400 hover:bg-gray-500 
        "
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>
            <button
              className="m-2 p-2 bg-gray-400 hover:bg-gray-500 
        "
              onClick={() => MoveUp(index)}
            >
              MoveUp
            </button>
            <button
              className="m-2 p-2 bg-gray-400 hover:bg-gray-500 
        "
              onClick={() => MoveDown(index)}
            >
              MoveDown
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ToDoList;
