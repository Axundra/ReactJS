import { useParams } from "react-router-dom";
import peliculas from "../mock/asyncMock";


export const PeliID = (click) => {
    const { peliID } = useParams();
    const peliActual = [peliculas.filter((el) => el.id == peliID)];
    return
}