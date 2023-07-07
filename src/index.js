import React from "react";
import ReactDOM from "react-dom/client"; // in react version < 18 is "react-dom" without '/client'

function App() {
  return <h1>Hello React!!!!!</h1>;
}

// React version < 18
// ReactDOM.render(<App />, document.getElementById("root"));

// React version >= 18
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);

/* But I want to activate strict mode, so instead of directly 
rendering <App/> as a root component I'll wrap it into a Strict Mode component */
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
