import React, { useState } from "react";

/// Modifica el componente para que se puedan agregar tareas

function Tasks() {
  const [taskList, setTaskList] = useState([
    "Sacar la ropa",
    "Hacer la cama",
    "Leer un rato",
  ]);
  const [newTask, setNewTask] = useState("");

  const sendNewTask = (event) => {
    event.preventDefault();
    setTaskList([...taskList, newTask]);
  };

  return (
    <div className="wrapper">
      <div className="list">
        <h3>Por hacer:</h3>
        <ul className="todo">
          {taskList.map((task) => (
            <li>{task}</li>
          ))}
        </ul>
        <form onSubmit={(event) => sendNewTask(event)}>
          <input
            value={newTask}
            type="text"
            id="new-task"
            placeholder="Ingresa una tarea y oprime Enter"
            onChange={(event) => setNewTask(event.target.value)}
          />
        </form>
      </div>
    </div>
  );
}
export default Tasks;
