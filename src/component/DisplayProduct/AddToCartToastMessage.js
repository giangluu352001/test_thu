import React from 'react'
import { addItemCart } from '../../actions/cartAction'
import { useDispatch } from "react-redux";
function AddToCartToastMessage({ addToCartName, addToCartQuantity, id}) {

  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(addItemCart(id, addToCartQuantity))
  };
  return (
      <div>
        Đã thêm {addToCartName} x {addToCartQuantity}
        {addToCartHandler()}
      </div>

  )
}

export default AddToCartToastMessage
