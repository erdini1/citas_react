const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {

    const { nombre, propietario, email, fecha, sintomas, id } = paciente

    const handleEliminar = () => {
        const respuesta = confirm("Deseas eliminar este paciente?")

        if (respuesta) {
            eliminarPaciente(id)
        }

    }

    return (
        <div className="mx-5 my-7 bg-white shadow-md px-5 py-10 rounded-xl">

            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre Mascota: {""}
                <span className="font-normal normal-case">{nombre}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre Propietario: {""}
                <span className="font-normal normal-case">{propietario}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Email: {""}
                <span className="font-normal normal-case">{email}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de alta: {""}
                <span className="font-normal normal-case">{fecha}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {""}
                <span className="font-normal normal-case">{sintomas}</span>
            </p>

            <div className="flex justify-between mt-10">
                <button
                    className="bg-indigo-400 rounded-md font-bold text-white text-center py-2 px-10 mt-2 hover:bg-indigo-600 transition-all uppercase"
                    type="button"
                    onClick={() => setPaciente(paciente)}
                > Editar </button>

                {/* el onClick es para que cuando haga cliuck en el boton el setPaciente se se le asigne el valor que habia */}

                <button
                    className="bg-red-600 rounded-md font-bold text-white text-center py-2 px-10 mt-2 hover:bg-red-700 transition-all uppercase"
                    type="button"
                    onClick={handleEliminar}    //No se le pone el parentesis porque eso llama a la función directamente
                >Eliminar </button>
            </div>

        </div>
    )
}

export default Paciente