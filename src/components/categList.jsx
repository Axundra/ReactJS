import peliculas from "../mock/asyncMock";
import { Link, useParams } from "react-router-dom";
import { card } from "./peliCard";


export const PelisCateg = () => {

    const { catParam } = useParams(),
        filtro = peliculas.filter((el) => el.categoria.includes(catParam))
    let keys = 0;

    return (<>
        {filtro.map((el) => (
            card(el, keys += 1)))}
    </>);
}