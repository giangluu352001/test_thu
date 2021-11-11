import React from 'react';
import CategoryItem from "./CategoryItem";

class CategoryList extends React.Component {

  render() {
    let categories = this.props.categories || []
    let {activeCategory, onClickCategory} = this.props
    return (
        <div className="CategoryList">
          <h3 className="CategoryList__header">
            Danh mục
          </h3>
          <div className="ps-3">
            {
              categories.map(
                  category => {
                    return <CategoryItem
                        key={category.id}
                        category={category}
                        activeCategory={activeCategory}
                        onClickCategory={onClickCategory}
                    />
                  }
              )
            }
          </div>

        </div>
    )
  }

}

export default CategoryList;
