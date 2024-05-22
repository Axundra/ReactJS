import { listaCat } from "../mock/asyncMock"
import { Link } from "react-router-dom";
import { Cart } from "./CartWidget";


export function Nav() {
    return (
        <header>
            <h1>SALCHIFLIX</h1>
            {/* {<Cart />} */}
            <h3>CATEGORÍAS:</h3>
            <div>
                <ul>
                    {listaCat.map((el) => {
                        return <Link to={`/categoria/${el}`} key={el}> {el} | </Link>;
                    })}
                </ul>
            </div>
            <hr />
            <hr />
        </header>
    )
}