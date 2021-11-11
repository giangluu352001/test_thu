import React, { Fragment, useState } from 'react'
import './Cart.css'
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import Navbar from './Navbar'
import { Link } from "react-router-dom";
import { Typography} from "@material-ui/core";
import { useSelector, useDispatch } from 'react-redux'
import { addItemCart, removeItemsFromCart } from '../../actions/cartAction';
const remove = <svg xmlns="http://www.w3.org/2000/svg" height="1vmax" viewBox="0 0 24 18" width="1vmax" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"/></svg>
const back = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
function Cart() {
    const { cartItems } = useSelector((state) => state.cart)
    const [shipping, setShipping] = useState(5)
    const [discountCode, setDiscountCode] = useState()
    const [noDiscountCode, setNoDiscountCode] = useState()
    const [invalidDiscountCode, setInvalidDiscountCode] = useState()
    const handleDiscountClick = (e) => {
        e.preventDefault()
        if (!discountCode) {
            setNoDiscountCode(true)
            setInvalidDiscountCode(false)
        } 
        else { 
            setNoDiscountCode(false)
            if(discountCode !== "HELLO") {
                setInvalidDiscountCode(true)
            }
            else {
                setInvalidDiscountCode(false)
            }
        }

    }
    const dispatch = useDispatch() 
    const increase = (id, quantity, stock) => {
        if(stock <= quantity) return;
        dispatch(addItemCart(id, quantity + 1))
    }
    const decrease = (id, quantity) => {
        if (1 >= quantity) return; 
        dispatch(addItemCart(id, quantity - 1))
      };

    const deleteCartItems = (id) => {
        dispatch(removeItemsFromCart(id));
    };

    const price = cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0)
    return (
        <Fragment>
            {cartItems.length === 0 ? (
                <div className="emptyCart">
                    <RemoveShoppingCartIcon />
                    <Typography>No Product in Your Cart</Typography>
                    <Link to="/">View Products</Link>
                </div>
            ): (
            <Fragment>
                <Navbar quantity={cartItems.length} />
                <div className="card">
                <div className="row"> 
                <div className="col-md-8 cart">
                    <div className="title">
                    <div className="row size-header">
                        <div className="col">
                        <div className="cardb">Giỏ hàng của tôi</div>
                        </div>
                    </div>
                    </div>
                    <div className="row border-top border-bottom">
                    {cartItems && cartItems.map((item) => (
                        <div className="CartItemCard">
                            <div className="item_image">
                                <img src={"/image/" + item.image} alt="error" /> 
                            </div>
                            <div className="title2">
                                <h2>{item.name}</h2>
                                <p>Chao cac ban lai la minh day hehe sao the</p>
                            </div>
                            <div className="cartInput">
                                <button onClick={() =>
                                decrease(item.item, item.quantity)}>&#8722;</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => 
                                increase(item.item, item.quantity, item.stock)}>&#43;</button> 
                            </div>
                            <div className="price">
                                <p>{item.price * item.quantity}</p>
                            </div>
                            <button className="flexbutton" onClick={() => deleteCartItems(item.item)}>
                                <span className="icon">{remove} </span>
                                <span className="text">REMOVE</span>
                            </button>
                        </div>
                    ))}
                    </div>
                    <div className="back-to-shop"><a href="/">{back}</a><span className="text-muted">Trở về trang chủ</span></div>
                </div>
                <div className="col-md-4 summary size-summary">
                    <div className="text-center">
                    <h5><b>TÓM TẮT ĐƠN HÀNG</b></h5>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col" style={{paddingLeft: 0}}>Tổng món hàng</div>
                        <div className="col text-end">{cartItems.reduce((acc, item) => acc + item.quantity, 0)}</div>
                    </div>
                    <div className="row">
                        <div className="col" style={{paddingLeft: 0}}>Tổng tiền</div>
                        <div className="col text-end">{price}</div>
                    </div>
                    <p className="row mt-3 mb-3">Chi phí giao hàng</p>
                    <select className="mb-2" onChange={e => setShipping(parseInt(e.target.value))}>
                        <option className="text-muted" value="5">Giao hàng tiêu chuẩn $5.00</option>
                        <option className="text-muted" value="15">Giao hàng nhanh $15.00</option>
                        <option className="text-muted" value="20">Chuyển phát nhanh €20.00</option>
                    </select>
                    <form className="pt-0" onSubmit={handleDiscountClick}>
                        <p>Mã giảm giá</p> <input  className="mb-4" id="code" placeholder="Enter your code" 
                        onChange={e => setDiscountCode(e.target.value)}/>
                        <div class="text-center">
                            <button className="apply">APPLY</button>
                        </div>
                    </form>
                    {noDiscountCode && <p className="alertt text-center text-danger">Mã chưa được nhập!</p>}
                        {invalidDiscountCode ? <p className="alertt text-center text-danger">Mã không hợp lệ!</p> : <p className="text-center text-success">Bạn được giảm giá 50%</p>}
                    <div className="row" style={{borderTop: '1px solid rgba(0,0,0,.1)', padding: '2vh 0'}}>
                    <div className="col">TỔNG TIỀN</div>
                    <div className="col text-end">{price + shipping}</div>
                    </div> <Link to="/login" className="btn checkout">THANH TOÁN</Link>
                </div>
                </div>
                </div>
                
            </Fragment>
            )}
        </Fragment>
    )
}

export default Cart
