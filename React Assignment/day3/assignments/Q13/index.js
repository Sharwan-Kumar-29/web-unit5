const root = ReactDOM.createRoot(document.getElementById("root"));

const { useState } = React;
function List() {
  const [fruits, setFruits] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function handleDelete(i) {
    fruits.splice(i, 1);
    setFruits([...fruits]);
  }

  return (
    <>
      <label htmlFor="addItems">
        Add Item (With Quantity): <br /> <br />
        <input
          value={inputValue}
          type="text"
          placeholder="Item Name - Quantity"
          onChange={(e) => {
            e.preventDefault();
            setInputValue(e.target.value);
          }}
        />
        <button
          style={{ cursor: "pointer" }}
          onClick={() => {
            setFruits([...fruits, inputValue]);
            setInputValue("");
          }}
        >
          Add Item
        </button>
        <button
          style={{ cursor: "pointer" }}
          onClick={() => {
            setFruits([]);
          }}
        >
          Delete All
        </button>
      </label>

      <div>
        {fruits.map((elem, i) => {
          return (
            <>
              <li key={i}>
                {elem}{" "}
                <span
                  onClick={() => handleDelete(i)}
                  style={{ cursor: "pointer" }}
                >
                  ❌
                </span>
              </li>
            </>
          );
        })}
      </div>
    </>
  );
}

function App() {
  return <List />;
}

root.render(<App />);
