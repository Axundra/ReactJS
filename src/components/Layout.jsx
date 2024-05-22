import peliculas from "../mock/asyncMock";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const PeliID = (click) => {
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
export const PelisCateg = () => {//                      ↓no estoy seguro si esta es la mejor forma de hacer el filtro por categorias↓
    const { peliCat } = useParams(),
        [pelis, setPelis] = useState([]),
        filtro = [];

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