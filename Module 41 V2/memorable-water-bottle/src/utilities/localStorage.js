const getStoredCart = () => {
    const cartString = localStorage.getItem('cart');
    if (cartString) {
        return JSON.parse(cartString);
    }
    return [];
}

const setStoredCart = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
}

const addToLS = (bottle)  => {
    const cart = getStoredCart();
    cart.push(bottle);
    setStoredCart(cart);
}
const removeFromLS = (id) => {
    const cart = getStoredCart();
    const updatedCart = cart.filter((idx) => idx !== id);
    setStoredCart(updatedCart);
}
export { addToLS, setStoredCart, getStoredCart, removeFromLS };