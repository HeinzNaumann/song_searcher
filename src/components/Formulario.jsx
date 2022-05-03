import { useState } from 'react'
import useLetras from '../Hook/UseLetras'

const Formulario = () => {

    const { setAlerta, busquedaLetra } = useLetras()
    const [busqueda, setBusqueda] = useState({
        artista: "",
        cancion: ""
    })

    const handleChange = (e) => {
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (Object.values(busqueda).includes('')) {
            setAlerta('Coloca nombre de artista y canción')
        }

        busquedaLetra(busqueda)


    }

    return (
        <form onSubmit={handleSubmit}>
            <legend>Busca por Artistas y Canción</legend>
            <div className="form-grid">
                <div>
                    <label>Artista</label>
                    <input
                        type="text"
                        name="artista"
                        placeholder="Nombre Artista"
                        onChange={e => handleChange(e)}
                        value={busqueda.artista}

                    />
                </div>
                <div>
                    <label>Canción</label>
                    <input
                        type="text"
                        name="cancion"
                        placeholder="Nombre Canción"
                        onChange={e => handleChange(e)}
                        value={busqueda.cancion}

                    />
                </div>
                <input type="submit" value="Buscar" />
            </div>
        </form>
    )
}

export default Formulario