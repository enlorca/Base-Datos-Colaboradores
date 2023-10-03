import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {ListaColaboradores} from './ListaColaboradores'
import Listado from './Components/Listado/Listado';
import { useState } from 'react';
import Formulario from './Components/Formulario/Formulario';
import Alert from './Components/Alert/Alert';
import Buscador from './Components/Buscador/Buscador';
function App() {
  const [Collaborators, setCollaborators] = useState(ListaColaboradores)
  const [alertMessage, setAlertMessage] = useState("");
  const [colorMessage, setColorMessage] = useState("");

  return (
    <main className="container">
      <h1 className="text-center">Lista de colaboradores</h1>
      <Buscador />
      <section>
        <Listado ListaColaboradores={Collaborators} />
        <Formulario
          setCollaborators={setCollaborators}
          Collaborators={Collaborators}
          setAlertMessage={setAlertMessage}
          setColorMessage={setColorMessage}
        />
        <Alert message={alertMessage} bgColor={colorMessage} />
      </section>
    </main>
  );
}

export default App
