import { Link } from "react-router-dom";

export function card(arr, keyPromt) {
    let keys = 0;

    return (
        <ul key={`${keyPromt}_${keys += 1}`}>
            <Link to={`/pelicula/${arr.id}`}><h2>{arr.titulo}</h2></Link>
            <p>SINOPSIS:</p>
            <p>{arr.descripcion}</p>
            <p>{arr.categoria.map((elCat) => {
                return (<Link to={`/categoria/${elCat}`} key={elCat}>{`${elCat} · `}</Link>)
            })}
            </p>
            <hr />
        </ul>
    )
}