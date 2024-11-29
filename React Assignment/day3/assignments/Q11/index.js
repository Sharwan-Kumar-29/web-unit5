const root = ReactDOM.createRoot(document.getElementById("root"));

function ToggleButton() {
  const [state, setState] = React.useState(false);

  return (
    <>
      <button onClick={() => setState(!state)}>
        {state ? "Hide" : "Show"}
      </button>

      <p style={{ display: state ? "block" : "none" }}>
        Hello, welcome to React state management!
      </p>
    </>
  );
}

function App() {
  return (
    <>
      <ToggleButton />
    </>
  );
}

root.render(<App />);
