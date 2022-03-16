import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import "./formulario.css";

const Formulario = ({ setTodos, todos, todoItem }) => {
  const [id, setId] = useState("");
  const [editionMode, setEditionMode] = useState(false);
  const [form, setForm] = useState({
    id: nanoid(),
    name: "",
    date: "",
    todo: "",
  });

  useEffect(() => {
    if (Object.keys(todoItem).length > 0) {
      setForm(todoItem);
      setId(todoItem.id);
      setEditionMode(true);
    }
  }, [todoItem]);

  const [error, setError] = useState(false);

  const { name, date, todo } = form;

  const handleChange = (e) => {
    setForm({
      ...form,
      id: nanoid(),
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = () => {
    console.log("cague de rii");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !date.trim() || !todo.trim()) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
      return;
    }
    setTodos([...todos, form]);
    setForm({
      id: "",
      name: "",
      date: "",
      todo: "",
    });
  };

  const handleEdit = (e) => {
    e.preventDefault();
    if (!name.trim() || !date.trim() || !todo.trim()) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
      return;
    }
    const arrayFiltrado = todos.map((todo) =>
      todo.id === id ? { id, ...form } : todo
    );
    setTodos(arrayFiltrado);
    setForm({
      id: "",
      name: "",
      date: "",
      todo: "",
    });
    setEditionMode(false);
    setId("");
  };

  return (
    <form className="mt-5 " onSubmit={editionMode ? handleEdit : handleSubmit}>
      {error && (
        <p className="alert alert-danger text-center">
          Todos los campos son obligatorios...
        </p>
      )}
      <h1 className="text-center">Crea una Tarea</h1>
      <label className="mt-3">Escribe tu nombre: </label>
      <input
        type="text"
        placeholder="Nombre"
        name="name"
        value={name}
        className="form-control"
        onChange={handleChange}
      />
      <label className="mt-3">Nombre del todo: </label>
      <input
        name="todo"
        type="text"
        placeholder="Escribe tu tarea"
        className="form-control "
        value={todo}
        onChange={handleChange}
      />
      <label className="mt-3">Elige una fecha: </label>
      <input
        type="datetime-local"
        className="form-control"
        value={date}
        name="date"
        onChange={handleChange}
      />
      <div className="d-grid gap-2 mt-4">
        {editionMode ? (
          <button className="btn btn-warning " onClick={handleClick}>
            Editar Todo
          </button>
        ) : (
          <button className="btn btn-primary " onClick={handleClick}>
            Crear Todo
          </button>
        )}
      </div>
    </form>
  );
};

export default Formulario;
