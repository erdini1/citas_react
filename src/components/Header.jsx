//LOS COMPONENTES SON FUNCIONES Y TODOS LOS COMPONENTES EN JSX REQUIEREN UN RETURN 

function Header(){


    return(
        <>
            <h1 className="font-serif text-5xl text-center md:w-2/3 mx-auto">
                Seguimiento Pacientes {""} <br />
                <span className="text-indigo-400">Veterinaria</span>
            </h1>
        </>
    )
}

/* 
CSS

font-serif - personaliza la fuente a serif
text-5xl - modifica el tamaño de la letra
text-center centra el texto
md:w-2/3 - este es el width pero para cuando se achique la pantalla y el 2/3 quiere decir que se ubique en 2/3 de la pantalla

*/

export default Header