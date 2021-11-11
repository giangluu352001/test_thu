import React from "react";

class ProductItem extends React.Component {

  onAddToCart = () => {
    this.props.onAddToCart(this.props.product.id)
  }

  onShowDetail = () => {
    this.props.onShowDetail(this.props.product.id)
  }

  render() {
    let {product} = this.props
    return (
        <div className="col-6 col-md-4 ProductItem text-center">
          <div className="card">
            <div className=" ProductItem__image">
              <img className="card-img-top" src={"/image/" + product.image}
                   alt="..."/>
            </div>

            <div className="card-body ProductItem__body">
              <div className="card-title ProductItem__name">{product.name}</div>
              <div
                  className="card-title ProductItem__price">{product.price}</div>
              <span className="btn ProductItem__btn"
                    onClick={this.onShowDetail}>
                <i className="fas fa-info-circle"/>
              </span>
              <span className="btn ProductItem__btn" onClick={this.onAddToCart}>
                <i className="fas fa-cart-arrow-down"/>
              </span>
            </div>
          </div>
        </div>
    )
  }
}

export default ProductItem;