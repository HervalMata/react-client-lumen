import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { apiUrl } from '../AuthService'
import { getDelete } from '../generalService'
import EditForm from './editForm';
const apiToken = localStorage.getItem('api_token');
let testdata = (urlData) => fetch(urlData, {
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

class listChanel extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      kanallar: [],
      next: '',
      prev: '',
      url: apiUrl + '/rest/kanal-listesi',
      modal: false,
      large: false,
      currentChanel: {}
    }
    this.handleChange = this.handleChange.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.toggle = this.toggle.bind(this);
    this.toggleLarge = this.toggleLarge.bind(this);
    this.currentChanel = this.currentChanel.bind(this);

  }

  componentDidMount() {
    this.fetchData(apiUrl + '/rest/kanal-listesi');
  }

  fetchData(urlPage) {
    testdata(urlPage).then((response) =>
      this.setState({
        kanallar: response.data,
        next: response.next_page_url,
        prev: response.prev_page_url,
        url: urlPage
      })

    );

  }
delete(ids){
  this.componentDidMount();
getDelete(apiUrl + '/rest/kanal-delete/' + ids);
}
  handleChange(event) {
    console.log(event.currentTarget.id);

    if (event.currentTarget.id === "next") {
      this.fetchData(this.state.next);
    }

    if (event.currentTarget.id === "prev" && this.state.prev) {
      this.fetchData(this.state.prev);
    }

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

  currentChanel(kanal) {
   // console.log(kanal);
    this.setState({
      currentChanel: kanal
    });
    this.toggleLarge();

  }

  changeDenge(form) {
    //console.log(form);
  }


  render() {
    this.state.kanallar.sort(function (a,b) {
      return a.orderId - b.orderId;
    });
    let listem = this.state.kanallar.map((kanal) =>
      <tr key={kanal.id}>
        <td>{kanal.orderId}</td>
        <td>{kanal.name}</td>
        <td>{kanal.catId}</td>
        <td>{kanal.imageUrl}</td>
        <td>
          <button onClick={this.currentChanel.bind(this, kanal)} type="button" className="btn btn-primary btn-sm">Edit</button>
          <button onClick={this.delete.bind(this, kanal.id)} type="button" className="btn btn-danger btn-sm">delete</button>
        </td>
      </tr>
    );
    return (
      <div className="animated fadeIn">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <i className="fa fa-align-justify"></i> Kanal Listesi
              </div>
              <div className="card-block">
                <table className="table table-bordered table-striped table-condensed">
                  <thead>
                    <tr>
                      <th>Order</th>
                      <th>Kanal Adı</th>
                      <th>Kategori Id</th>
                      <th>Resim</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listem}
                  </tbody>
                </table>
                <ul className="pagination">
                  <li className="page-item"><span id="prev" className="page-link" onClick={this.handleChange}>Prev</span></li>
                  <li className="page-item"><span id="next" className="page-link" onClick={this.handleChange}>Next</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>


        <Modal isOpen={this.state.large} toggle={this.toggleLarge} className={'modal-primary modal-lg ' + this.props.className}>
          <ModalHeader toggle={this.toggleLarge}>{this.state.currentChanel.name}</ModalHeader>
          <ModalBody>
            <EditForm denge={this.toggleLarge} current={this.state.currentChanel} />
          </ModalBody>

        </Modal>
      </div>

    )
  }
}



export default listChanel;