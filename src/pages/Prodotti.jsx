import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import axios from "axios"
import Product from '../components/product';
import { useBudget } from '../context/BudgetContext';

const Prodotti = () => {

    // Variabile di stato che contiene l'elenco totale dei prodotti
    const [products, setProducts] = useState([]);

    // Variabile di stato che contiene l'elenco dei prodotti filtrati
    const [filteredProducts, setFilteredProducts] = useState([products]);

    // Ottieni lo stato 'budget' direttamente
    const { budget } = useBudget();

    function fetchProducts() {
        if (!budget) {
            axios.get("https://fakestoreapi.com/products")
                .then((res) => {
                    setFilteredProducts(res.data)
                })
                .catch(error => console.log(error))
        }
        else {
            axios.get("https://fakestoreapi.com/products")
                .then((res) => {
                    setFilteredProducts(res.data.filter(product => product.price <= 30));
                })
                .catch(error => console.log(error))
        }
    }

    // filtro i prodotti in base al prezzo
    function filtraProdotti() {
        setFilteredProducts(products.filter(product => product.price <= 30));
    }

    useEffect(() => {
        fetchProducts();
    }, [budget])

    return (
        <div className="container">
            {filteredProducts.map(product =>
                <div key={product.id} className="card">
                    <Product
                        image={product.image}
                        title={product.title}
                        price={product.price}
                        category={product.category}
                    />
                    <Link to={`/products/${product.id}`}>
                        Dettaglio prodotto
                    </Link>
                </div>
            )}
        </div>
    )
}

export default Prodotti 