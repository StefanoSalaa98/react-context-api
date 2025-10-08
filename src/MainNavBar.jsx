import { NavLink } from "react-router-dom";
import { useBudget } from "./context/BudgetContext";

const MainNavBar = () => {

    // Ottieni lo stato 'budget' e la funzione 'togglebudget'
    const { budget, toggleBudget } = useBudget();

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
            <button style={{ background: budget === true ? '#333' : '#f0f0f0', color: budget === true ? "white" : "black" }} onClick={toggleBudget}>
                {budget === true ? 'DISATTIVA' : 'ATTIVA'} BUDGET
            </button>
        </nav>
    )
}

export default MainNavBar