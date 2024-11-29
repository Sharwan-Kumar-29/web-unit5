const root = ReactDOM.createRoot(document.getElementById("root"));

const { useState } = React;

function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Low");

  function handleSubmit(e) {
    e.preventDefault();
    if (!title) return;

    const newTask = {
      id: Date.now(),
      title,
      priority,
      completed: false,
    };

    addTask(newTask);
    setTitle("");
    setPriority("Low");
  }

  return (
    <>
        <h2>Add Tasks</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

        <button type="submit">Add Task</button>
      </form>
    </>
  );
}

function Filters({ filter, setFilter }) {
  return (
    <>
      <div className="filters">
        <select
          value={filter.priority}
          onChange={(e) =>
            setFilter((prev) => ({ ...prev, priority: e.target.value }))
          }
        >
          <option value="All">All Priorities</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <select
          value={filter.status}
          onChange={(e) =>
            setFilter((prev) => ({ ...prev, status: e.target.value }))
          }
        >
          <option value="All">All Statuses</option>
          <option value="Completed">Completed</option>
          <option value="Incomplete">Incomplete</option>
        </select>
      </div>
    </>
  );
}

function TaskList({ tasks, updateTask, deleteTask }) {
  return (
    <>
      <ul className="task-list">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`task ${task.priority.toLowerCase()} ${
              task.completed ? "completed" : ""
            }`}
          >
            <span>{task.title}</span>
            <span>Priority: {task.priority}</span>
            <button
              onClick={() =>
                updateTask(task.id, { completed: !task.completed })
              }
            >
              {task.completed ? "Mark Incomplete" : "Mark Complete"}
            </button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState({ priority: "All", status: "All" });

  function addTask(task) {
    setTasks((prev) => [...prev, task].sort(sortTasks));
  }

  function updateTask(id, updates) {
    setTasks((prev) =>
      prev
        .map((task) => (task.id === id ? { ...task, ...updates } : task))
        .sort(sortTasks)
    );
  }

  function sortTasks(a, b) {
    const priorityOrder = { High: 1, Medium: 2, Low: 3 };
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  }

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    const priorityMatches =
      filter.priority === "All" || task.priority === filter.priority;
    const statusMatches =
      filter.status === "All" ||
      (filter.status === "Completed" && task.completed) ||
      (filter.status === "Incomplete" && !task.completed);
    return priorityMatches && statusMatches;
  });

  return (
    <div className="app">
      <h1>Task Manager</h1>
      <div className="input-form">
        <TaskForm addTask={addTask} />
        <Filters filter={filter} setFilter={setFilter} />
      </div>
      <TaskList
        tasks={filteredTasks}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />
    </div>
  );
}

root.render(<App />);
