import React, { useState } from "react";

const Cards = ({ item, setTodoItem, todos, setTodos }) => {
  const handleEdit = (todo) => {
    console.log("todo edit: ", todo);
    setTodoItem(todo);
  };

  const deleteItem = (id) => {
    const arrayFilter = todos.filter((item) => item.id !== id);
    setTodos(arrayFilter);
    // console.log(arrayFilter);
  };

  return (
    <>
      <div className="cardBody">
        <h3 className="text-center mt-2">{item.todo}</h3>
        <hr />
        <div className="infoContainer px-2">
          <p>{item.name}</p>
          <p>{item.date}</p>
        </div>
        <div className="buttonsAction">
          <button
            className="btn btn-warning mx-2 my-2"
            onClick={() => handleEdit(item)}
          >
            Editar
          </button>
          <button
            className="btn btn-danger my-2"
            onClick={() => deleteItem(item.id)}
          >
            Eliminar
          </button>
        </div>
      </div>
    </>
  );
};

export default Cards;
