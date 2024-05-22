import peliculas from "../mock/asyncMock";
import { useParams } from "react-router-dom";


export const PelisCateg = () => {
    const { catParam } = useParams()
    const filtro = peliculas.filter((element) => element.categoria === catParam);

    return (
        <ul key="a">
            {filtro.map((element) => (
            <li key={element.id}>{element}</li>
            ))}
        </ul>
    );
}