import React, { useState } from "react";
import NewTask from "./NewTask.jsx";
// import TasksList from "./TasksList.jsx";

export default function AppFunction() {
  const [newTask, allTasks] = useState({});
  const handleChange = ({ target }) => {
    const { name, value } = target;
    // allTasks((prev) => ({ ...prev, newTask: { ...prev.newTask, [name]: value, id: Date.now() } }));
    // console.log(name, value);
  };
  const handleDelete = () => {};
  const handleSubmit = () => {};

  return (
    <main>
      <h1>Tasks</h1>
      <NewTask newTask={newTask} handleChange={handleChange} handleSubmit={handleSubmit} />
      {/* <TasksList allTasks={allTasks} handleDelete={handleDelete} /> */}
    </main>
  );
}
