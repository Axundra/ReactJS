import { Link } from "react-router-dom"
import peliculas from "../mock/asyncMock";

export const PeliLista = () => {
    let keys = 0;
    return (peliculas.map(el => {
        return (<section key={`peliKey_${(keys += 1)}`}>
            <Link to={`/pelicula/${el.id}`}><h2>{el.titulo}</h2></Link>
            <p>SINOPSIS:</p>
            <p>{el.descripcion}</p>
            <p>{el.categoria.map((elCat) => {
                return (<Link to={`/categoria/${elCat}`} key={elCat}>{`${elCat} · `}</Link>)
            })}
            </p>
            <hr />
        </section>
        )
    })
    )
}