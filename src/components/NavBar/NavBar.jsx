
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return(
        <nav>
            <h3>Ecommerce</h3>
            <div>
                <button>Accesorios</button>
                <button>Personajes</button>
                <button>Personalizados</button>
            </div>
            <CartWidget /> 
        </nav>
    )
}

export default NavBar