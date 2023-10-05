import "./Formulario.css";
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
  
  const correoValido = (email) => {
    const regex =
      /^[^@]+@[^.]+\..+$/;
    return regex.test(email);
  };

  const validarNombre = (nombre) => {
    const regexName = /^[A-Za-z\s-]+$/;
    return regexName.test(nombre);
  };
  
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
    } else if (
      validarNombre(NewCollaborator.nombre) !== true
    ) {
      setAlertMessage("El nombre no es válido. Solo se permiten letras, espacios y guiones.");
      setColorMessage("true");
      console.log("Alert message set:", alertMessage);
      console.log("Color message set:", colorMessage);
    } else if (correoValido(NewCollaborator.correo) !== true) {
      setAlertMessage("El correo no es valido.");
      setColorMessage("true");
      console.log("Alert message set:", alertMessage);
      console.log("Color message set:", colorMessage);
    } else if (
      isNaN(NewCollaborator.edad) ||
      NewCollaborator.edad < 0 ||
      NewCollaborator.edad > 150)
     {
      setAlertMessage("Por favor ingrese un numero entero entre 0 y 150 para la edad.");
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
    <div className="sectionForm">
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
