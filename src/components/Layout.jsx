import peliculas from "../mock/asyncMock";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function pushHTML(arr, id, titulo, descripcion, categoria, i) {
    arr.push(
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
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function PeliListaHTML(arr) {

    const lista = [];

    for (let i = 0; i < arr.length; i++) {
        const id = arr[i].id,
            titulo = arr[i].titulo,
            descripcion = arr[i].descripcion,
            categoria = arr[i].categoria;
        pushHTML(lista, id, titulo, descripcion, categoria, i)
    }
    return lista;
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export function PeliLista() { return PeliListaHTML(peliculas) }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export function PeliID(click) {
    const { peliID } = useParams();
    const peliActual = [PeliLista()[peliID]];
    peliActual.push(
        <div key={"button"}>
            <button onClick={click}>{`Añadir al carrito ${peliculas[peliID].titulo}`}</button>
            <hr />
            <hr />
            <hr />
            <hr />
        </div>
    )
    return peliActual;
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export function PelisCateg() {//                      ↓no estoy seguro si esta es la mejor forma de hacer el filtro por categorias↓
    const { peliCat } = useParams(),
        [pelis, setPelis] = useState([]),
        filtro = []
    useEffect(() => { setPelis(peliculas) }, [])

    for (let i = 0; i < pelis.length; i++) {
        for (let o = 0; o < pelis[i].categoria.length; o++) {
            if (pelis[i].categoria[o] == peliCat) {
                const id = pelis[i].id,
                    titulo = pelis[i].titulo,
                    descripcion = pelis[i].descripcion,
                    categoria = pelis[i].categoria;

                pushHTML(filtro, id, titulo, descripcion, categoria, i)
            }
        }
    }
    return filtro;
}