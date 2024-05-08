import { peliculas } from "../mock/asyncMock";
import { Link, useParams } from "react-router-dom";

function PeliListaHTML(arr) {

    const lista = [];

    for (let i = 0; i < arr.length; i++) {
        const id = arr[i].id,
            titulo = arr[i].titulo,
            descripcion = arr[i].descripcion,
            categoria = arr[i].categoria;


        lista.push(
            <section key={i}>
                <Link to={`/pelicula/${id}`}><h2>{titulo}</h2></Link>
                <p>{`SINOPSIS: ${descripcion}`}</p>
                <p>{categoria.map((el) => {
                    return (<><Link to={`/categoria/${el}`} key={el}>{el}</Link> · </>)
                    //ya sé que repetí código, se me hizo problematico solucionarlo ahora
                })}</p>
                <hr />
                <br />
            </section>
        )
    }
    return lista;
}
export function PeliLista() { return PeliListaHTML(peliculas) }

export function PeliID() {
    const { peliID } = useParams();
    const lista = PeliLista();
    return lista[peliID];
}

export function PelisCat() {""/* 
    const { peliCat } = useParams();
    const filtro = []
        for (let i = 0; i < peliculas.length; i++) {
            filtro.push(peliculas.filter((peli) => peli[i].categoria2 == peliCat))
        }
    return PeliListaHTML(filtro) */
}