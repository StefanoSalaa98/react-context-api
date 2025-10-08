const Product = (props) => {

    const { image, title, price, category } = props;

    return (
        <>
            <div className="image">
                <img src={image} alt="" />
            </div>
            <h2>{title}</h2>
            <strong>{price} €</strong>
            <span>CATEGORY: {category}</span>
        </>

    )
}

export default Product