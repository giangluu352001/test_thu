export const cartReducer = (
    state = { cartItems: []}, action
) => {
    switch (action.type) {
        case "ADD_TO_CART":
            const item = action.payload
            const isItemExist = state.cartItems.find((book) => book.item === item.item)
            if (isItemExist) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((book) =>
                        book.item === isItemExist.item ? item : book)
                }
            }
            else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item],
                }
            }
        case "REMOVE_CART_ITEM":
            return {
                ...state,
                cartItems: state.cartItems.filter((i) => i.item !== action.payload),
            };
        default: return state  
     
    }
}