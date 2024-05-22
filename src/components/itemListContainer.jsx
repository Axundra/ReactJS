import { Link } from "react-router-dom"
import peliculas from "../mock/asyncMock";

/*export const PeliLista = () => {

    const lista = [];

    for (let i = 0; i < peliculas.length; i++) {
        const id = peliculas[i].id,
            titulo = peliculas[i].titulo,
            descripcion = peliculas[i].descripcion,
            categoria = peliculas[i].categoria;

        peliculas.push(
            <section key={i}>
                <Link to={`/pelicula/${id}`}><h2>{titulo}</h2></Link>
                <p>SINOPSIS:</p>
                <p>{descripcion}</p>
                <p>{categoria.map((el) => {
                    return (<><Link to={`/categoria/${el}`} key={el}>{el}</Link> · </>)
                })}</p>
                <hr />
            </section>
        )
    }
    return lista;
}
 */

export const PeliLista = () => {
    const key = 0;

    return (
        peliculas.map(el => {
            return (
                <section key={key + 2000}>{/* numero grande para evitar conflictos con otas keys */}
                    <Link to={`/pelicula/${el.id}`}><h2>{el.titulo}</h2></Link>
                    <p>SINOPSIS:</p>
                    <p>{el.descripcion}</p>
                    <p>{el.categoria.map((elCat) => {
                        return (<><Link to={`/categoria/${elCat}`} key={elCat}>{elCat}</Link> · </>)
                    })}
                    </p>
                    <hr />
                </section>
            )
        })
    )
}

//<pushHTML arr={lista} id={id} titulo={titulo} descripcion={descripcion} categoria={categoria} i={i}/>