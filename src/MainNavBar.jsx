import { NavLink } from "react-router-dom";

const MainNavBar = () => {

    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home Page</NavLink>
                </li>
                <li>
                    <NavLink to="/chiSiamo">Chi Siamo</NavLink>
                </li>
                <li>
                    <NavLink to="/products">Prodotti</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default MainNavBar