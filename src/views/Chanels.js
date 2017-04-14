import React, { Component } from 'react';

class Chanels extends Component {

  render() {
    return (
      <div className="animated fadeIn">
       {this.props.children}
      </div>
    )
  }
}

export default Chanels;