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