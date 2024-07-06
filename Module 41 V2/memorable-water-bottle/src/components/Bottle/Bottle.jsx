
const Bottle = ({bottle}) => {
    const {id, category, name, seller, price, stock, ratings, ratingsCount, img, shipping, quantity} = bottle;
    const bottleStyle = {
        border: "5px solid purple",
        margin: "10px",
        padding: "10px",
        borderRadius: "10px",
        fontSize: "20px",
        fontWeight: "bold",
        
    }
    const imgStyle = {
        width: "250px",
        height: "250px",
        objectFit: "cover",
        borderRadius: "10px",
        border: "5px solid purple",
    }
    const generalStyle = {
        backgroundColor: "purple",
        borderRadius: "10px",
        padding: "10px",
        color: "white",
        fontSize: "20px",
        fontWeight: "bold",
    }
    return (
        <div style={bottleStyle}>
            <p>{id}</p>
            <p style={generalStyle}>Category: {category}</p>
            <p style={generalStyle}>Name: {name}</p>
            <p style={generalStyle}>Seller: {seller}</p>
            <p style={generalStyle}>Stock: {stock}</p>
            <p style={generalStyle}>Ratings: {ratings}⭐</p>
            <p style={generalStyle}>Ratings Count: {ratingsCount}</p>
            <img style={imgStyle} src={img} alt="" />
            <div style={{display: "flex", gap: "10px", justifyContent: "center", backgroundColor: "purple", borderRadius: "10px"}}>
                <p>Price: ${price}</p>
                <p>Shipping: {shipping}</p>
                <p>Quantity: {quantity}</p>
            </div>
        </div>
    );
};

export default Bottle;