import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import axios from "axios"
import Product from '../components/product';

const Prodotti = () => {

    const [products, setProducts] = useState([]);

    function fetchProducts() {
        axios.get("https://fakestoreapi.com/products")
            .then((res) =>
                setProducts(res.data))
            .catch(error => console.log(error)
            )
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div className="container">
            {products.map(product =>
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