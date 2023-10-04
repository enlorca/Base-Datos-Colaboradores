import React from "react";
import { useState } from "react";
import "./Buscador.css";

const Buscador = ({ handleInputChange }) => {
  const handleChange = (e) => {
    handleInputChange(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Busca un colaborador"
        name="busqueda"
        className="form-control w-25"
        onChange={handleChange}
      />
    </div>
  );
};

export default Buscador;
