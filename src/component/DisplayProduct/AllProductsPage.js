import React from 'react';
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import DisplayControl from "./DisplayControl";
import ProductDetail from "./ProductDetail";
import AddToCartToastMessage from "./AddToCartToastMessage";

class AllProductsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      products: [],
      activeCategory: '0',
      displayControl: {
        searchBy: 'name',
        searchKey: '',
        sortBy: 'year-desc'
      },
      pageSize: 6,
      currentPage: 1,
      showDetail: '',
      showAddToCartMessage: false,
      addToCartName: '',
      addToCardQuantity: 0,
      id: ''
    }
  }

  getCategoriesURI = "/data/categories.json"
  getProductsURI = "/data/products.json"

  componentDidMount() {
    this.loadCategory()
    this.loadProduct()
  }

  loadCategory = () => {
    fetch(this.getCategoriesURI)
    .then(resp => resp.json())
    .then(result => this.setState({categories: result}))
  }

  loadProduct = () => {
    fetch(this.getProductsURI)
    .then(resp => resp.json())
    .then(result => this.setState({products: result}))
  }

  onClickCategory = (categoryId) => {
    this.setState({
          activeCategory: categoryId,
          currentPage: 1
        }
    )
  }

  onChangeDisplayControl = (displayControl) => {
    this.setState({
      displayControl: displayControl,
      currentPage: 1
    })
  }

  filterProduct = () => {
    let {displayControl, products, activeCategory} = this.state
    let {searchBy, searchKey, sortBy} = displayControl
    // eslint-disable-next-line array-callback-return
    let productsAfterFilterCategory = products.filter(product => {
      if (activeCategory === "0" || activeCategory === product.category) {
        return product
      }
    })

    // eslint-disable-next-line array-callback-return
    let productsAfterSearch = productsAfterFilterCategory.filter(product => {
      if (product[searchBy].toString().toLowerCase().includes(
          searchKey.toLowerCase())) {
        return product
      }
    })

    // eslint-disable-next-line array-callback-return
    let productsAfterSort;
    productsAfterSort = productsAfterSearch.sort((a, b) => {
      let key = (sortBy.includes('year')) ? 'publication_year' :
          ((sortBy.includes('price')) ? 'price' : 'year')
      let direct = sortBy.includes('asc') ? 1 : -1
      return (a[key] > b[key]) ? direct : ((b[key] > a[key]) ? -direct : 0)
    });
    return productsAfterSort
  }

  onChangePage = (value, products) => {
    let {currentPage, pageSize} = this.state
    let maxPage = Math.ceil(products.length / pageSize)
    if (value === -1 && currentPage > 1) {
      this.setState({
        currentPage: currentPage - 1
      })
    } else if (value === 1 && currentPage < maxPage) {
      this.setState({
        currentPage: currentPage + 1
      })
    }
  }

  onShowDetail = (id) => {
    this.setState({
      showDetail: id
    })
  }

  onCloseShowDetail = () => {
    this.setState({
      showDetail: ''
    })
  }

  getProductNameById = (id) => {
    for (let product of this.state.products) {
      if (product.id === id) {
        return product.name
      }
    }
  }

  onAddToCart = (id, quantity) => {
    if (quantity <= 0) {
      return
    }
    this.setState({
      showAddToCartMessage: true,
      addToCartName: this.getProductNameById(id),
      addToCartQuantity: quantity,
      id
    })
    setTimeout(() => {
      this.setState({
        showAddToCartMessage: false,
        addToCartName: '',
        addToCartQuantity: 0,
        id: ''
      })
    }, 2500)
  }

  render() {
    let {
      categories,
      activeCategory,
      pageSize,
      currentPage,
      showDetail,
      showAddToCartMessage,
      addToCartName,
      addToCartQuantity, 
      id
    } = this.state
    let products = this.filterProduct()
    return (
        <div className="AllProductsPage container">
          <div className="row">
            <div className=" d-none d-lg-block col-lg-3">
              <CategoryList
                  categories={categories}
                  activeCategory={activeCategory}
                  onClickCategory={this.onClickCategory}
              />
            </div>
            <div className="col-12 col-lg-9">
              <div className="row">
                <div className="col-12">
                  <DisplayControl
                      categories={categories}
                      activeCategory={activeCategory}
                      onChangeDisplayControl={this.onChangeDisplayControl}
                      onClickCategory={this.onClickCategory}
                  />
                </div>
                <div className="col-12">
                  <ProductList
                      products={products}
                      onChangePage={this.onChangePage}
                      pageSize={pageSize}
                      currentPage={currentPage}
                      onShowDetail={this.onShowDetail}
                      onAddToCart={this.onAddToCart}
                  />
                </div>
              </div>
            </div>
          </div>
          {
            (!showDetail) ||
            <ProductDetail
                productId={showDetail}
                categories={categories}
                products={this.state.products}
                onCloseShowDetail={this.onCloseShowDetail}
                onAddToCart={this.onAddToCart}
                onShowDetail={this.onShowDetail}
            />
          }
          {
            !showAddToCartMessage ||
            <AddToCartToastMessage
                addToCartName={addToCartName}
                addToCartQuantity={addToCartQuantity}
                id={id}
            />
          }
        </div>
    )
  }

}

export default AllProductsPage;
