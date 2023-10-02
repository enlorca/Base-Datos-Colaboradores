import './Listado.css'
import Table from 'react-bootstrap/Table';

const Listado = ({ListaColaboradores}) => {
  return (
    <div className='table'>
    <Table striped>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Edad</th>
          <th>Cargo</th>
          <th>Telefono</th>
        </tr>
      </thead>
      <tbody>
            {ListaColaboradores.map((colaborador) => { 
                return (
                    <tr key={colaborador.id}>
                        <td>{colaborador.nombre}</td>
                        <td>{colaborador.correo}</td>
                        <td>{colaborador.edad}</td>
                        <td>{colaborador.cargo}</td>
                        <td>{colaborador.telefono}</td>
                    </tr>   
                )
            })}
      </tbody>
    </Table>
    </div>
  )
}

export default Listado
