import peliculas from "../mock/asyncMock";
import { card } from "./peliCard";

export const PeliLista = () => {
    let keys = 0;
    return (<>
        {peliculas.map((el) => (
            card(el, keys += 1)))}
    </>);
}