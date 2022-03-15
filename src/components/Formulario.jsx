import React, { useState } from "react";
import { nanoid } from "nanoid";
import "./formulario.css";

const Formulario = ({ setTodos, todos, todoItem }) => {
  console.log("todos", todos);
  const [form, setForm] = useState({
    id: nanoid(),
    name: "",
    date: "",
    todo: "",
  });
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

  return (
    <form className="mt-5 " onSubmit={handleSubmit}>
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
        <button className="btn btn-primary " onClick={handleClick}>
          Crear
        </button>
      </div>
    </form>
  );
};

export default Formulario;
