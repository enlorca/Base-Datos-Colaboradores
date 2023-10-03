import { useState } from "react";

const Formulario = ({
  setCollaborators,
  Collaborators,
  setAlertMessage,
  setColorMessage,
  alertMessage,
  colorMessage,
}) => {
  const [NewCollaborator, setNewCollaborator] = useState({
    id: "",
    nombre: "",
    correo: "",
    edad: "",
    cargo: "",
    telefono: "",
  });
  const AddColaborador = (e) => {
    e.preventDefault();
    if (
      NewCollaborator.nombre === "" ||
      NewCollaborator.correo === "" ||
      NewCollaborator.edad === "" ||
      NewCollaborator.cargo === "" ||
      NewCollaborator.telefono === ""
    ) {
      setAlertMessage("Todos los campos son obligatorios");
      setColorMessage("true");
      console.log("Alert message set:", alertMessage);
      console.log("Color message set:", colorMessage);
    } else {
      NewCollaborator.id = Collaborators.length + 1;
      setCollaborators([...Collaborators, NewCollaborator]);
      setNewCollaborator({
        id: "",
        nombre: "",
        correo: "",
        edad: "",
        cargo: "",
        telefono: "",
      });
      setAlertMessage("Colaborador agregado!");
      setColorMessage("false");
    }
  };

  const Addinput = (j) => {
    setNewCollaborator({ ...NewCollaborator, [j.target.name]: j.target.value });
  };
  return (
    <div>
      <h3>Agregar colaborador</h3>
      <form className="form p-2" onSubmit={AddColaborador}>
        <input
          type="text"
          placeholder="Nombre del colaborador"
          name="nombre"
          className="form-control"
          onChange={Addinput}
          value={NewCollaborator.nombre}
        />
        <input
          type="email"
          placeholder="Email del colaborador"
          name="correo"
          className="form-control mt-2"
          onChange={Addinput}
          value={NewCollaborator.correo}
        />
        <input
          type="number"
          placeholder="Edad del colaborador"
          name="edad"
          className="form-control mt-2"
          onChange={Addinput}
          value={NewCollaborator.edad}
        />
        <input
          type="text"
          placeholder="Cargo del colaborador"
          name="cargo"
          className="form-control mt-2"
          onChange={Addinput}
          value={NewCollaborator.cargo}
        />
        <input
          type="text"
          placeholder="Telefono del colaborador"
          name="telefono"
          className="form-control mt-2"
          onChange={Addinput}
          value={NewCollaborator.telefono}
        />
        <button type="submit" className="btn btn-primary mt-2 w-100">
          Agregar
        </button>
      </form>
    </div>
  );
};

export default Formulario;
