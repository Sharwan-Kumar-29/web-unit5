const root = ReactDOM.createRoot(document.getElementById("root"));
const { useState } = React;

function Counter() {
  const [count, setCount] = useState(0);
  const [stepValue, setValue] = useState("");

  function handleIncrement(i) {
    setCount(count + i);
  }

  function handleDecrement(i) {
    setCount(count - (i ? i : 1));
  }

  function handleInputChange(e) {
    setValue(Number(e.target.value));
  }

  return (
    <>
      <button onClick={() => handleIncrement(stepValue ? stepValue : 1)}>
        Increment
      </button>
      <h1> {count < 0 ? 0 : count} </h1>
      <button onClick={() => handleDecrement(stepValue)}>Decrement</button>

      <div>
        <label htmlFor="degree">
          Enter Steps Value:
          <input
            id="degree"
            value={stepValue == 0 ? "" : stepValue}
            type="number"
            placeholder="Enter Steps Value to Jump"
            onChange={(e) => handleInputChange(e)}
          />
        </label>
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <Counter />
    </>
  );
}

root.render(<App />);
