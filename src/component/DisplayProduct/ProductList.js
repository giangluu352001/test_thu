import React from "react";
import ProductItem from "./ProductItem";

class ProductList extends React.Component {

  displayedProducts = () => {
    let {products, pageSize, currentPage} = this.props
    return products.slice(pageSize * (currentPage - 1), pageSize * currentPage)
  }

  onAddToCart = (id) => {
    this.props.onAddToCart(id, 1)
  }

  onChangePage = (value) => {
    this.props.onChangePage(value, this.props.products)
  }

  render() {
    let products = this.displayedProducts()
    let {currentPage} = this.props
    return (
        <div className="ProductList row">
          {
            (products.length)
                ? (
                    products.map((product, index) => {
                          return <ProductItem
                              key={index}
                              product={product}
                              onAddToCart={this.onAddToCart}
                              onShowDetail={this.props.onShowDetail}
                          />
                        }
                    )
                )
                : (
                    <div className="col-12 text-center ProductList--empty  ">
                      <div className="row">
                        <div className="col-12">
                          <span className="ProductList--empty__4l">4</span>
                          <i className="ProductList--empty__0 far fa-question-circle fa-spin"/>
                          <span className="ProductList--empty__4r">4</span>
                        </div>

                        <div className="ProductList--empty__msg text-center col-12">
                          Không tìm thấy!!!
                        </div>
                      </div>
                    </div>
                )

          }
          {
            (products.length === 0) || <div
                className="ProductList__page col-12 text-center justify-content-center">
            <span className="btn ProductList__prevPage"
                  onClick={() => this.onChangePage(-1)}>
              <i className="far fa-caret-square-left"/>
            </span>
              <span className="ProductList__currentPage">{currentPage}</span>
              <span className="btn ProductList__nextPage"
                    onClick={() => this.onChangePage(1)}>
              <i className="far fa-caret-square-right"/></span>
            </div>
          }
        </div>
    )
  }

}

export default ProductList;