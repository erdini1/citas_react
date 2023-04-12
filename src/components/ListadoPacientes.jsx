import Paciente from "./Paciente"

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll">

      {/* Se coloca un ternario para que valide si hay datos, en el caso en que haya se ejecuta la parte del listado de paceintes. en el caso en que no  */}
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {""}
            <span className="text-indigo-400 font-bold">Pacientes y citas</span>
          </p>

          {/* Para iterar hay que utiliza map, luego para ir al valor del elemento dentro del vector hay que colocar el elemento dentro del parentesis e ir llamando con el punto */}

          {/* Genera un paciente por cada uno de ellos */}
          {pacientes.map(paciente => (
            <Paciente
              key={paciente.id}  //Siempre que muestre un listado utilizando .map hay que tener un key unico
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando pacientes {""}
            <span className="text-indigo-400 font-bold"> apareceran en este lugar</span>
          </p>
        </>
      )}
      {/* Se puede agregar condiciones que pasan segun se cumpla en cualquier lado */}


    </div>
  )
}

/* 
CSS
  div>
    h-screen - va a forzar a que el listado de pacientes tenga cierto tamaño
    overflow-y-scroll - es para agregar una barra para scrollear de arriba hacia abajo solo en la parte de listado de paceintes



*/

export default ListadoPacientes