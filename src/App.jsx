import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {ListaColaboradores} from './ListaColaboradores'
import Listado from './Components/Listado/Listado';
import { useState } from 'react';
import Formulario from './Components/Formulario/Formulario';
function App() {
  const [Collaborators, setCollaborators] = useState(ListaColaboradores)
  return (
    <main className='container'>
    <h1 className='text-center'>Lista de colaboradores</h1>
    <section>
    <Listado ListaColaboradores={Collaborators}/>
    <Formulario 
    setCollaborators={setCollaborators}
    Collaborators={Collaborators}
    />
    </section>
    </main>
  )
}

export default App
