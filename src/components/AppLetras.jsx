
import useLetras from "../Hook/UseLetras"
import Alerta from "./Alerta"
import Formulario from "./Formulario"
import Letra from "./Letra"
export const AppLetras = () => {

    const { alerta, letra, cargando } = useLetras()
    return (
        <>
            <header>Busqueda de letras de canciones</header>
            <Formulario />
            <main>
                <Letra />
                {alerta ? <Alerta > {alerta}</Alerta > :
                    letra ? < Letra /> :
                        cargando ? <p>Cargando</p> :
                            <p className="text-center">Busca letra de tus artistas favoritos</p>}

            </main>
        </>
    )
}
