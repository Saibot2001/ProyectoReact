
import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from "react-router-dom"
const NavBar = () => {
    return(
        <nav>
            <Link to='/'>
                <h3>Saurios Impresiones</h3>
            </Link>
            <div>
                <NavLink to={'/category/escritorio'} className ={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Escritorio</NavLink>
                <NavLink to={'/category/anime'} className ={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Anime</NavLink>
                <NavLink to={'/category/accesorios'} className ={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Accesorios</NavLink>
            </div>
            <CartWidget /> 
        </nav>
    )
}

export default NavBar