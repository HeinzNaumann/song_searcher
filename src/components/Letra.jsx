import useLetras from "../Hook/UseLetras"



const Letra = () => {
    const { letra, cargando } = useLetras()
    return (
        cargando ? "cargando" :
            <div className="letra">{letra}</div>
    )
}

export default Letra