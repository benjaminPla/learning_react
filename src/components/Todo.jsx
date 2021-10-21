import React, { useState } from "react";

export default function Todo() {
  const [inputValue, setInputValue] = useState("");
  const handleChange = ({ target }) => {
    setInputValue(target.value);
  };

  const [tasks, setTasks] = useState([]);
  const handleClick = () => {
    if (tasks.includes(inputValue)) return;
    if (!inputValue) return;
    setTasks([...tasks, inputValue]);
    setInputValue("");
  };

  const handleDelete = ({ target }) => {
    setTasks(tasks.filter((task) => task !== target.id));
  };

  return (
    <>
      <h1>Todo</h1>
      <input onChange={handleChange} value={inputValue} placeholder="New Task" />
      <button onClick={handleClick}>Add Taks</button>
      <ul>
        {tasks.map((task, index) => {
          return (
            <li key={index}>
              {task}
              <span onClick={handleDelete} id={task}>
                X
              </span>
            </li>
          );
        })}
      </ul>
    </>
  );
}
