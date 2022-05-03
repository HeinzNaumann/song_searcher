import { useState } from 'react'

const Formulario = () => {

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

    return (
        <form >
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