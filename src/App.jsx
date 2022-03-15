import React, { useState } from "react";
import Cards from "./components/Cards";
import Formulario from "./components/Formulario";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todoItem, setTodoItem] = useState("");
  return (
    <>
      <div className="wrapper">
        <Formulario setTodos={setTodos} todos={todos} todoItem={todoItem} />
        <div className="container mt-5 CardContainer">
          {todos.map((item) => {
            return <Cards item={item} setTodoItem={setTodoItem} />;
          })}
        </div>
      </div>
    </>
  );
};

export default App;
