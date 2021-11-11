import React from 'react'
import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import './navbar.css'
function navbar({ quantity }) {
  return (
    <div className="preNav">
             <div>
                 <a  href="/">TRANG CHỦ</a> <span>|</span>
                 <a  href="/products">DANH MỤC SẢN PHẨM</a> <span>|</span>
                 <a  href="/">HỖ TRỢ</a> <span>|</span>
                 <a  href="/">THÔNG TIN CỬA HÀNG</a>
             </div>
             <div>
             <a  href="/signup">ĐĂNG KÍ</a> <span>|</span>
                 <a  href="/login">ĐĂNG NHẬP</a> <span>|</span>
                 <a  href="/cart"> 
                  <Badge badgeContent={quantity} color="primary">
                  <ShoppingCartOutlined />
                  </Badge>
                 </a>
               
             </div>
            
        </div>
  )
}

export default navbar
