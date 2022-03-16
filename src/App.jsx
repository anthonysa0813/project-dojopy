import React, { useState, useEffect } from "react";
import Cards from "./components/Cards";
import Formulario from "./components/Formulario";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todoItem, setTodoItem] = useState({});

  useEffect(() => {}, [todos]);

  return (
    <>
      <div className="wrapper">
        <Formulario setTodos={setTodos} todos={todos} todoItem={todoItem} />
        <div className="container mt-5 CardContainer">
          {todos.map((item) => {
            return (
              <Cards
                key={item.id}
                item={item}
                setTodoItem={setTodoItem}
                todos={todos}
                setTodos={setTodos}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default App;
