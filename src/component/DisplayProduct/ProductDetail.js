import React, {Fragment} from "react";

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1
    }
  }

  getProduct = () => {
    let {productId} = this.props
    return this.getProductById(productId)
  }

  getProductById = (id) => {
    for (let product of this.props.products) {
      if (product.id === id) {
        return product
      }
    }
  }

  getCategory = () => {
    let product = this.getProduct()
    if (this.props.categories && product) {
      let {categories} = this.props
      // eslint-disable-next-line array-callback-return
      for (const category of categories) {
        if (product.category === category.id) {
          return category.name
        }
      }
    }

  }

  onChangeQuantity = (event) => {
    this.setState({
      quantity: event.target.value
    })
  }

  onAddToCart = () => {
    let {productId} = this.props
    let {quantity} = this.state
    this.props.onAddToCart(productId, parseInt(quantity))
  }

  render() {
    let {quantity} = this.state
    let product = this.getProduct()
    let category = this.getCategory()
    return (
        <div className="ProductDetail">
          <div className="ProductDetail__container">
            <div className="ProductDetail__top">
              <span className="ProductDetail__close-btn"
                    onClick={() => this.props.onCloseShowDetail()}
              >
                <i className="fas fa-times"/>
              </span>
            </div>
            {
              !product ||
              (
                  <div className="row ProductDetail__body">
                    <div
                        className="col-12 col-md-5 col-lg-6 ProductDetail__image">
                      <div>
                        <img src={"/image/" + product.image} alt=""/>
                      </div>
                      {/*<div className="ProductDetail__preview">*/}
                      {/*  Chỗ này để xem trước nè*/}
                      {/*</div>*/}
                    </div>
                    <div className="col-12 col-md-7 col-lg-6 ">
                      <div
                          className="ProductDetail__info">
                        <h2 className="ProductDetail__title">
                          {product.name}
                        </h2>
                        <div className="ProductDetail__author">
                          {
                            product.author.map((author, index) => {
                              return <Fragment key={index}>
                                {index === 0 || <span>•</span>}
                                {author}
                              </Fragment>
                            })
                          }

                        </div>

                        <div className="ProductDetail__price">
                          {product.price}₫
                        </div>
                        <div className="ProductDetail__separate"/>
                        <div className="ProductDetail__category">
                          <span>Danh mục:</span>
                          {category}
                        </div>
                        <div className="ProductDetail__separate"/>
                        <div className="ProductDetail__quantity">
                          <span>Số lượng:</span>
                          <input type="number" placeholder=""
                                 value={quantity}
                                 onChange={(event) => this.onChangeQuantity(
                                     event)}
                          /><br/>
                          <div className="ProductDetail__add-btn"
                               onClick={this.onAddToCart}
                          >
                            <i className="fab fa-opencart"/> Thêm vào giỏ hàng
                          </div>
                        </div>
                        <div className="ProductDetail__separate"/>
                        <div className="ProductDetail__description">
                          <span>Mô tả</span><br/>
                          {product.description}
                        </div>
                        <div className="ProductDetail__separate"/>
                        <div className="ProductDetail__relation">
                          <span> Sản phẩm khác</span><br/>
                          <div className="ProductDetail__others">
                            {
                              product.relation.map((relationId, index) => {
                                return <div key={index}
                                            className="row  ProductDetail__others-item"
                                            onClick={() => this.props.onShowDetail(
                                                relationId)}
                                >
                                  <div className="col-3">
                                    <img
                                        src={"/image/" + this.getProductById(
                                            relationId).image} alt=""/>
                                  </div>

                                  <div className="col-9">
                                    <span> {this.getProductById(
                                        relationId).name}</span>
                                    <br/>
                                    <span style={{
                                      color: "red",
                                      fontSize: "14px"
                                    }}>
                                      {this.getProductById(relationId).price}
                                    </span>
                                  </div>
                                </div>
                              })
                            }

                          </div>

                        </div>
                        <div className="ProductDetail__separate"/>
                        <div className="ProductDetail__comment">
                          <span> Bình luận</span><br/>
                          <span className="text-danger">Đang phát triển</span>
                        </div>
                      </div>
                    </div>

                  </div>
              )
            }
          </div>
        </div>
    )
  }
}

export default ProductDetail;