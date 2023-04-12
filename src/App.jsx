import { useState, useEffect } from "react"
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {

  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})

  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes'))
      pacientesLS?.length > 0 && setPacientes(pacientesLS)
      //tuve que usar esta forma porque no me guardaba el storage porque actualizaba dos veces. Lo encontre en internet
    }

    obtenerLS()
  }, [])  //Si el arreglo esta vacio se va a ejecutar una sola vez cuadndo el componente este listo

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))  //Esto hace que almacene en localstorage los pacientes, en el localstorage no se puede poner vectores por lo que json.stringify lo convienrte en string

  }, [pacientes]) //el useeffect va a estar revisando los cambios que sucedan en pacientes


  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id)
    setPacientes(pacientesActualizados)
  }

  return (
    <div className="container mx-auto mt-20">
      <Header />

      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>

    </div>
  )
}


/* 
CSS

mt-12 - Margin top 12
md:flex - coloca un elemento al lado del otro. el md quiere decir que en el tamaño mediano aplique el display flex

*/


export default App
