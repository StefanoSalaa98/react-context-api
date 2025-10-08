import { useState, useEffect } from "react";
// importo l'hook per poter leggere il parametro
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios"


const Prodotto = () => {

    // recupero il parametro dinamico id
    const { id } = useParams();

    const navigate = useNavigate();

    // stato del componente (prodotto che è stato cliccato)
    const [product, setProduct] = useState();

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(res => {
                setProduct(res.data);
                // se la API non restituisce niente perche l'id non è corretto, allora ricarico la pagina con la lista dei prodotti
                if (res.data === "") {
                    navigate("/products")
                };
            })
            .catch(err => console.log(err)
            )

    }, [])

    return (
        <div>
            {product ? (
                <div className="prodotto" >
                    <h2>{product.title}</h2>
                    <strong>{product.price} €</strong>
                    <span>CATEGORY: {product.category}</span>
                    <div className="container">
                        <div className="image">
                            <img src={product.image} alt="" />
                        </div>
                        <div className="descrizione">
                            <p>{product.description}</p>
                        </div>
                    </div>
                    <Link to={"/products"}>
                        Lista prodotti
                    </Link>
                </div>
            )
                :
                (<p>Loading...</p>)
            }
        </div>
    )
}

export default Prodotto