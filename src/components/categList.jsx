import peliculas from "../mock/asyncMock";
import { Link, useParams } from "react-router-dom";


export const PelisCateg = () => {

    const { catParam } = useParams(),
        filtro = peliculas.filter((el) => el.categoria.includes(catParam))
    let keys = 0;

    return (<>
        {filtro.map((el) => (
            <ul key={`peliKey_${keys += 1}`}>
                <Link to={`/pelicula/${el.id}`}><h2>{el.titulo}</h2></Link>
                <p>SINOPSIS:</p>
                <p>{el.descripcion}</p>
                <p>{el.categoria.map((elCat) => {
                    return (<Link to={`/categoria/${elCat}`} key={elCat}>{`${elCat} · `}</Link>)
                })}
                </p>
                <hr />
            </ul>
        ))}
    </>);
}