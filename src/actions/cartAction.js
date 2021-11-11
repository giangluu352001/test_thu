import axios from 'axios'

export const addItemCart = (id, quantity) => async (dispatch, getState) => {
    const res = await axios.get(`http://localhost:3000/data/products.json`)
    let data = res.data;
    let product = {};
    data.forEach((item) => {
        if (item.id === id) {
            product = item
        }
    });
    dispatch({
        type: "ADD_TO_CART",
        payload: {
            item: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            stock: product.stock,
            quantity,
        }
    })
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
}

export const removeItemsFromCart = (id) => async (dispatch, getState) => {
    dispatch({
      type: "REMOVE_CART_ITEM",
      payload: id,
    });
  
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
  };