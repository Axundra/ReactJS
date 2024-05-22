import { useState } from "react"
import { Link, useParams } from "react-router-dom"

const
    styleDiv = {
        "display": "flex"
    },
    styleCart = {
        "width": "50px",
        "height": "50px"
    },
    styleNum = {
        "background-color": "aqua",
        "border-radius": "50%",
        "padding": "2px",
        "padding-left": "7px",
        "padding-right": "7px",
    }




export function Cart() {
    const [cartCount, setCartCount] = useState(0),
        { idParam } = useParams();
    return (
        <div style={styleDiv}>
            <Link to={"/cart"} key={"carrito"}>
                <img src="../img/cart.jpeg" alt="Carrito" style={styleCart} />
            </Link>
            <p style={styleNum}>
                {cartCount}
            </p>
        </div>
    )
}

export function ClickAdd({setCartCount}) {
    setCartCount(cartCount + 1);
    const { peliID } = useParams();
    
}

export function CartHTML() {

}