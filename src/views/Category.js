import React, { Component } from 'react';

class Category extends Component {

  render() {
    return (
      <div className="animated fadeIn">
       {this.props.children}
      </div>
    )
  }
}

export default Category;