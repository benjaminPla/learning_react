import React, { useState } from "react";

export default function Todo() {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = ({ target }) => {
    setInputValue(target.value);
  };
  const [textAreaValue, setTextAreaValue] = useState("");
  const handleTextAreaChange = ({ target }) => {
    setTextAreaValue(target.value);
  };

  const [tasks, setTasks] = useState([]);
  const handleClick = () => {
    if (tasks.includes(inputValue)) return;
    if (!inputValue) return;
    setTasks([...tasks, { input: inputValue, textArea: textAreaValue }]);
    setInputValue("");
    setTextAreaValue("");
  };

  const handleDelete = ({ target }) => {
    setTasks(tasks.filter((task) => task.input !== target.id));
  };

  return (
    <>
      <h1>Todo</h1>
      <div className="newTaskInputs">
        <input onChange={handleInputChange} value={inputValue} placeholder="New Task" />
        <button onClick={handleClick}>Add Taks</button>
      </div>
      <textarea onChange={handleTextAreaChange} value={textAreaValue}></textarea>
      <ul className="tasks">
        {tasks.map((task, index) => {
          return (
            <li key={index}>
              <div className="taskTitle">
                {task.input}
                <span onClick={handleDelete} id={task.input}>
                  X
                </span>
              </div>
              <div className="taskDescription">{task.textArea}</div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
