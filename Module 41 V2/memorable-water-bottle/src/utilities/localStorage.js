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

export { addToLS, setStoredCart, getStoredCart };