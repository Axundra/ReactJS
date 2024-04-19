import Cart from "./CartWidget"

function Nav() {
    return (
        <header>
            <h1>SALCHIFLIX</h1>
            <div>
                <ul><a href="#">Accion</a></ul>
                <ul><a href="#">Comedia</a></ul>
                <ul><a href="#">Documentales</a></ul>
                <ul><a href="#">Ficción</a></ul>
                <ul><a href="#">Terror</a></ul>
            </div>
            <Cart />
        </header>
    )
}

export default Nav