//Con el atajo "rafce" me ahorro escribir todo el componente, de esta froma queda bastante igual solo que en el otro no uso arrow function

import { useState, useEffect } from 'react'
import Error from './Error'

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  /*  El state siempre tiene que ser declarado en la parte superior del componente. Dentro del componente pero fuera del return
   este va a entregar una variable y una función que modifica la variable */
  /* setNombre("Dylan")
  console.log(nombre) */

  const [nombre, setNombre] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [fecha, setFecha] = useState('')
  const [sintomas, setSintomas] = useState('')

  const [error, setError] = useState(false)

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
  }, [paciente])


  const generarId = () => {
    const random = Math.random().toString(36).substr(2)
    const fecha = Date.now().toString(36)

    return (random + fecha)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validación del Formulario
    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      setError(true)
      return

    }
    setError(false)

    //Objeto de paciente
    const objPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
    }

    if (paciente.id) {
      //Editando el Registro
      objPaciente.id = paciente.id

      const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objPaciente : pacienteState)

      setPacientes(pacientesActualizados)
      setPaciente({})

    } else {
      //Nuevo Registro
      objPaciente.id = generarId()
      setPacientes([...pacientes, objPaciente]) //esto hace que genere un nuevo arreglo sin modificar el arreglo incial

    }




    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')

  }


  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-xl mt-5 text-center mb-10">
        Añade Pacientes y {""}
        <span className="text-indigo-400 font-bold">Administralos</span>
      </p>

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 ml-4">

        {error && <Error><p>Todos los campos son obligatorios</p></Error>}

        <div className="mb-5">
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}

          // onChange={ (e) => console.log(e.target.value) } //Es igual a un addeventlistener - esto es para ver en consola lo que esta escribiendo el usuario. si le agrego setnombre adelante lo modifica
          />
        </div>

        <div className="mb-5">
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email Propietario</label>
          <input
            id="email"
            type="email"
            placeholder="Email del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Fecha de alta</label>
          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Sintomas</label>
          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los sintomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-400 w-full p-3 text-white uppercase font-bold hover:bg-indigo-600 rounded-md cursor-pointer transition-all"
          value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
        />

      </form>

    </div>
  )
}

/* 
CSS
input/submit>
  hover:bg-indigo-600 - es para que cuando se pase el cursor por encima del boton cambie de color
  cursor-pointer - es para que cuando se pase el mouse por encima del boton salga la manito del click
  transition-all - es para que cuando se pase el mouse por encima haga una animacion y no cambie muy de la nada 


div>
md:w-1/2 - quiere decir que en un tamaño mediano va a tomar el tamaño del 50%
lg:w-2/5 - query para pantallas mas grandes y el 2/5 es masomenod un 40%

  h2>
    font-black - Pone la fuente en negrita
    text-3xl - modifica el tamaño de la letra

  p> 
  text-lg -modifica el tamaño de la letra

    span> 
    font-bold - modifica la fuente, es como una negrita pero mas fina

  form> 
    bg-white - fondo blanco
    shadow-md - le aplica una sombra media, con lg ya es mucho
    rounded-lg - le aplica el estilo redondeado
    py-10 - le aplica padding al elemento en el eje Y, el padding es el espacio dentro
    px-5 - le aplica padding en el eje X

      label> 
        block - hace que el elemento ocupe todo el bloque
        el htmlFor es para que cuando se apriete en el label vaya directamente al input, para esto el input tiene que tener el mismo id
      
      input>
        border-2 - le agrega un borde al input
        w-full - es para que ocupe todo el contenedor
        p-2 - es el padding del elemento en todos los bordes
        placeholder-gray - es ele color de las plabras que estan dentro del input

*/

export default Formulario