import React from "react";

class CategoryItem extends React.Component {
  onClickCategory =()=> {
    this.props.onClickCategory(this.props.category.id)
  }
  render() {
    let {category, activeCategory} = this.props
    return (
        <div className={
          "CategoryItem " + (activeCategory === category.id
              ? "CategoryItem--active" : "")
        }
             onClick={this.onClickCategory}
        >
          {category.name}
          <div className="horizontal-line"/>
        </div>
    )
  }
}

export default CategoryItem;