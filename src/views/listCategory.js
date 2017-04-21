import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { apiUrl } from '../AuthService'
import EditCategory from './editCategory';
import { getDelete } from '../generalService';
const apiToken = localStorage.getItem('api_token');
let getData = (urlData) => fetch(urlData, {
  method: 'get',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': apiToken
  }

}).then(function (response) {
  return response.json();
}).then(function (result) {
  return result;
  // console.log('success', result);
})
  .catch(function (error) {
    console.log('Request failed', error);
  });

class listCategory extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      kategoriler: [],
      url: apiUrl + '/rest/kategoriler',
      modal: false,
      large: false,
      currentCategory: {}
    }
    this.handleChange = this.handleChange.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.toggle = this.toggle.bind(this);
    this.toggleLarge = this.toggleLarge.bind(this);
    this.currentCategory = this.currentCategory.bind(this);

  }

  componentDidMount() {
    this.fetchData(apiUrl + '/rest/kategoriler');
  }

  fetchData(urlPage) {
    getData(urlPage).then((response) =>
      this.setState({
        kategoriler: response
      })

    );
  }

  handleChange(event) {
    //console.log(event.currentTarget.id);
  }

delete(ids){
this.componentDidMount();
getDelete(apiUrl + '/rest/kategori-delete/' + ids);
}


  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  toggleLarge() {
    this.setState({
      large: !this.state.large
    });
  }

  currentCategory(kategori) {
   // console.log(kategori);
    this.setState({
      currentCategory: kategori
    });
    this.toggleLarge();

  }

  changeDenge(form) {
    // console.log(form);
  }


  render() {
    this.state.kategoriler.sort(function (a, b) {
      return a.orderId - b.orderId;
    });
    let listem = this.state.kategoriler.map((kategori) =>
      <tr key={kategori.id}>
        <td>{kategori.orderId}</td>
        <td>{kategori.name}</td>
        <td>{kategori.customUrl}</td>
        <td>{kategori.iconName}</td>
        <td>
          <button onClick={this.currentCategory.bind(this, kategori)} type="button" className="btn btn-primary btn-sm">Edit</button>
          <button onClick={this.delete.bind(this, kategori.id)} type="button" className="btn btn-danger btn-sm">delete</button>
        </td>
      </tr>
    );
    return (
      <div className="animated fadeIn">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <i className="fa fa-align-justify"></i> Kategori Listesi
              </div>
              <div className="card-block">
                <table className="table table-bordered table-striped table-condensed">
                  <thead>
                    <tr>
                      <th>Order</th>
                      <th>Kategori Adı</th>
                      <th>Custom Url</th>
                      <th>Icon Name</th>
                      <th>Settings</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listem}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>


        <Modal isOpen={this.state.large} toggle={this.toggleLarge} className={'modal-primary modal-lg ' + this.props.className}>
          <ModalHeader toggle={this.toggleLarge}>{this.state.currentCategory.name}</ModalHeader>
          <ModalBody>
            <EditCategory denge={this.toggleLarge} current={this.state.currentCategory} />
          </ModalBody>

        </Modal>
      </div>

    )
  }
}

export default listCategory;