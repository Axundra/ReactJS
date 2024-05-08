const
    styleDiv = {
        display: "flex"
    },
    styleCart = {
        width: "50px",
        height: "50px"
    },
    styleN = {
        "background-color": "aqua",
        "border-radius": "100%",
        "padding-left": "5px",
        width: "15px"
    }



export function Cart() {
    return (
        <div style={styleDiv}>
            <img src="img/cart.jpeg" alt="Carrito" style={styleCart} />
            <p style={styleN}>4</p>
        </div>)
}