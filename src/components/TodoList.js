import "./styles.css";
import React, { useState } from "react";

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    setTasks((tasks) => {
      const updatedList = [...tasks, newTask];
      console.log(updatedList);
      setNewTask("");
      return updatedList;
    });
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((elem, id) => {
      return taskId != id;
    });
    setTasks(updatedTasks);
  };

  const removeAllTask = () => {
    setTasks([]);
  };

  //editTask

  return (
    <>
      <div className="Container">
        <h1>📝 TODO LIST</h1>

        <input
          type="text"
          placeholder="Enter task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />

        <button className="btn-hover color" onClick={addTask}>
          Add Task
        </button>
        <p>Your tasks are here</p>
        {tasks != [] &&
          tasks.map((task, taskId) => {
            return (
              <div key={taskId} className="task-item">
                <div className="task-text">{task}</div>
                <div className="task-actions">
                  <button onClick={() => deleteTask(taskId)}>Remove</button>
                </div>
              </div>
            );
          })}

        {tasks.length >= 1 && (
          <button onClick={removeAllTask}>Remove all task</button>
        )}
      </div>
    </>
  );
}
