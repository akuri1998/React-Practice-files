import React, { useState } from "react";

function App() {
  // 1. Counter (number)
  const [count, setCount] = useState(0);

  // 2. Toggle (boolean)
  const [isVisible, setIsVisible] = useState(true);

  // 3. User profile (object)
  const [user, setUser] = useState({
    name: "Gurava",
    age: 27,
  });

  // 4. Task list (array)
  const [tasks, setTasks] = useState([]);

  // Add new task
  function addTask() {
    const newTask = {
      id: Date.now(),
      text: `Task ${tasks.length + 1}`,
    };
    setTasks((prev) => [...prev, newTask]);
  }

  // Remove task
  function removeTask(id) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>React Multi-State Tracker</h1>

      {/* Counter */}
      <section>
        <h2>Counter</h2>
        <p>Count: {count}</p>
        <button onClick={() => setCount((prev) => prev + 1)}>+1</button>
        <button onClick={() => setCount((prev) => prev - 1)}>-1</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </section>

      {/* Toggle */}
      <section style={{ marginTop: "30px" }}>
        <h2>Toggle</h2>
        <button onClick={() => setIsVisible((prev) => !prev)}>
          {isVisible ? "Hide" : "Show"} Box
        </button>
        {isVisible && <div style={{ width: 100, height: 100, background: "skyblue", marginTop: 10 }} />}
      </section>

      {/* User profile */}
      <section style={{ marginTop: "30px" }}>
        <h2>User Profile</h2>
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
        <button
          onClick={() =>
            setUser((prev) => ({ ...prev, age: prev.age + 1 }))
          }
        >
          Increase Age
        </button>
        <button
          onClick={() =>
            setUser((prev) => ({ ...prev, name: "Akuri Gurava" }))
          }
        >
          Change Name
        </button>
      </section>

      {/* Task List */}
      <section style={{ marginTop: "30px" }}>
        <h2>Tasks</h2>
        <button onClick={addTask}>Add Task</button>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              {task.text}{" "}
              <button onClick={() => removeTask(task.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;
