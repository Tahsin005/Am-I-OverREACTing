import PropTypes from 'prop-types';
const Bottle = ({bottle, handleAddToCart}) => {
    const {id, name, price, stock, ratings, img} = bottle;
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
            <p style={generalStyle}>{id}</p>
            <p style={generalStyle}>{name}</p>
            <p style={generalStyle}>Stock: {stock? "Available": "Not Abvailale"}</p>
            <p style={generalStyle}>Ratings: {ratings}⭐</p>
            <img style={imgStyle} src={img} alt="" />
            <div style={{display: "flex", gap: "10px", justifyContent: "center", backgroundColor: "purple", borderRadius: "10px"}}>
                <p>Price: ${price}</p>
            </div>
            <br />
            <button onClick={() => handleAddToCart(bottle)}>Purchase</button>
        </div>
    );
};
Bottle.propTypes = {
    bottle: PropTypes.object.isRequired,
    handleAddToCart: PropTypes.func.isRequired,
}
export default Bottle;