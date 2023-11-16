import React from "react";
import Form from "./components/form";
import FormList from "./components/list";
import "./App.css";
function App() {
  const [todos, setTodos] = React.useState([]);
  return (
    <div className="App">
      <Form todos={todos} setTodos={setTodos} />
      <FormList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
