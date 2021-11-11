import React from "react";

class DisplayControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchByLabel: "Tác giả",
      sortByLabel: "Mới nhất",
      searchBy: 'name',
      searchKey: '',
      sortBy: 'year-desc'
    }
  }

  onChangeSearchBy = (key, label) => {
    this.setState({
      searchByLabel: label,
      searchBy: key
    }, () => {
      this.onChangeDisplayControl()
    })

  }
  onChangeSortBy = (key, label) => {
    this.setState({
      sortByLabel: label,
      sortBy: key
    }, () => {
      this.onChangeDisplayControl()
    })
  }
  onChangeSearchKey = (event) => {
    this.setState({
      searchKey: event.target.value
    }, () => {
      this.onChangeDisplayControl()
    })
  }

  onChangeDisplayControl = () => {
    let {searchBy, searchKey, sortBy} = this.state
    this.props.onChangeDisplayControl({
      searchBy: searchBy,
      searchKey: searchKey,
      sortBy: sortBy
    })
  }

  getCategoryLabel = () => {
    let {categories, activeCategory} = this.props
    for (let category of categories) {
      if (category.id === activeCategory) {
        return category.name
      }
    }
  }

  onClickCategory = (id) => {
    this.props.onClickCategory(id)
  }

  render() {
    let {searchByLabel, sortByLabel, searchKey} = this.state
    let {categories} = this.props
    let categoryLabel = this.getCategoryLabel()
    return (
        <div className="DisplayControl row  align-content-center">
          <div className="row col-12">
            <h2 className="DisplayControl__header col-12">
              Tìm kiếm
            </h2>
            <div className="col-12 d-md-block d-lg-none DisplayControl__category">
              <div className="dropdown ">
              <span className="btn dropdown-toggle dropdown-border"
                    role="button" id="dropdownSearchBy"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
              >
                {categoryLabel}
              </span>
                <ul className="dropdown-menu"
                    aria-labelledby="dropdownSearchBy">
                  {
                    categories.map((category, index) => {
                      return (
                          <li key={index}>
                        <span className="dropdown-item"
                              onClick={() => this.onClickCategory(category.id)}
                        >
                          {category.name}
                        </span>
                          </li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-3  DisplayControl__searchBy"
               align="center">
            <div className="dropdown">
              <span className="btn dropdown-toggle dropdown-border width-full"
                    role="button" id="dropdownSearchBy"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
              >
                {searchByLabel}
              </span>
              <ul className="dropdown-menu" aria-labelledby="dropdownSearchBy">
                <li>
                  <span className="dropdown-item"
                        onClick={() => this.onChangeSearchBy('name', 'Tên')}>
                    Tên
                  </span>
                </li>
                <li>
                  <span className="dropdown-item"
                        onClick={() => this.onChangeSearchBy('author',
                            'Tác giả')}>
                    Tác giả
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-6 col-md-3 DisplayControl__sortBy" align="center">
            <div className="dropdown">
              <span className="btn dropdown-toggle dropdown-border width-full"
                    role="button" id="dropdownSortBy"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
              >
                {sortByLabel}
              </span>
              <ul className="dropdown-menu" aria-labelledby="dropdownSortBy">
                <li>
                  <span className="dropdown-item"
                        onClick={() => this.onChangeSortBy('year-desc',
                            'Mới nhất')}>
                    Mới nhất
                  </span>
                </li>
                <li>
                  <span className="dropdown-item"
                        onClick={() => this.onChangeSortBy('year-asc',
                            'Cũ nhất')}>
                    Cũ nhất
                  </span>
                </li>
                <li>
                  <span className="dropdown-item"
                        onClick={() => this.onChangeSortBy('price-asc',
                            'Giá tăng dần')}>
                    Giá tăng dần
                  </span>
                </li>
                <li>
                  <span className="dropdown-item"
                        onClick={() => this.onChangeSortBy('price-desc',
                            'Giá giảm dần')}>
                    Giá giảm dần
                  </span>
                </li>

              </ul>
            </div>
          </div>

          <div className="col-12 col-md-6 DisplayControl__searchKey">
            <div className="input-group flex-nowrap width-full">
              <span className="input-group-text" id="addon-wrapping">
                <i className="fas fa-search"/>
              </span>
              <input type="text" className="form-control" placeholder="Nhập..."
                     aria-describedby="addon-wrapping" value={searchKey}
                     onChange={event => {
                       this.onChangeSearchKey(event)
                     }}
              />
            </div>
          </div>

        </div>
    )
  }
}

export default DisplayControl;