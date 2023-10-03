import React from "react";
import "./Buscador.css";

const Buscador = () => {
  return (
    <div>
      <input
        type="text"
        placeholder="Busca un colaborador"
        name="busqueda"
        className="form-control w-25"
/*         onChange={Addinput}
        value={NewCollaborator.nombre} */
      />
    </div>
  );
};

export default Buscador;
