import React from "react";
import "./formulario.css";

const Formulario = () => {
  return (
    <form className="mt-5 ">
      <h1 className="text-center">Crea una Tarea</h1>
      <label className="mt-3">Escribe tu nombre: </label>
      <input type="text" placeholder="Nombre" className="form-control" />
      <label className="mt-3">Nombre del todo: </label>
      <input
        type="text"
        placeholder="Escribe tu tarea"
        className="form-control "
      />
      <label className="mt-3">Elige una fecha: </label>
      <input type="datetime-local" className="form-control" />
      <button className="btn btn-primary mt-3">Crear</button>
    </form>
  );
};

export default Formulario;
