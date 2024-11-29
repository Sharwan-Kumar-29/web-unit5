const root = ReactDOM.createRoot(document.getElementById("root"));
const { useState } = React;

function RenderTasks() {
  const [tasks, setTasks] = useState({
    task: "",
    priority: "",
    status: "Pending",
  });

  const [tasksArr, setTasksArr] = useState([]);

  function handleInputChange(e) {
    e.preventDefault();
    const {
      target: { name, value },
    } = e;

    setTasks({ ...tasks, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!tasks.task || !tasks.priority) {
      alert("Please Fill All the Input Fields");
      return;
    }

    setTasksArr([...tasksArr, tasks]);
    setTasks({
      task: "",
      priority: "",
      status: "Pending",
    });
  }

  function handleDeleteTasks(e, i) {
    e.preventDefault();
    let newTaskArr = tasksArr.filter((elem, idx) => idx != i);
    setTasksArr([...newTaskArr]);
  }

  function handleStatusToggle(e, i) {
    e.preventDefault();

    const updatedTasks = tasksArr.map((task, idx) => {
      if (idx == i) {
        return {
          ...task,
          status: task.status == "Pending" ? "Completed" : "Pending",
        };
      }
      return task;
    });
    setTasksArr(updatedTasks);
  }

  return (
    <>
      <div id="form-table">
        <form onSubmit={handleSubmit}>
          <label htmlFor="task">
            Task Content:
            <input
              value={tasks.task}
              name="task"
              type="text"
              placeholder="Enter Task Content Here"
              onChange={handleInputChange}
              required
            />
          </label>
          <br />
          <label htmlFor="priority">
            Task Priority:
            <input
              value={tasks.priority}
              name="priority"
              type="text"
              placeholder="Enter Task Priority Here"
              onChange={handleInputChange}
              required
            />
          </label>
          <br />
          <input type="submit" value="Add Task" />
        </form>

        <div id="table">
          <table border="1">
            <thead>
              <tr>
                <th>Task</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {tasksArr.map((elem, i) => {
                return (
                  <>
                    <tr
                      style={{
                        textDecoration:
                          elem.status == "Completed" ? "line-through" : "none",
                      }}
                      key={i}
                    >
                      <td>{elem.task}</td>
                      <td>{elem.priority}</td>
                      <td
                        style={{ cursor: "pointer" }}
                        onClick={(e) => handleStatusToggle(e, i)}
                      >
                        {elem.status}
                      </td>
                      <td>
                        <i
                          onClick={(e) => handleDeleteTasks(e, i)}
                          className="fa-solid fa-circle-xmark"
                        ></i>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

function App() {
  return <RenderTasks />;
}

root.render(<App />);
