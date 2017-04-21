import React, { Component } from 'react'
import { apiUrl } from '../AuthService'
let formData = {}
class addCategory extends Component {
    constructor(props) {
        super(props);
        this.state = { form: formData };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

      handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        formData[name] = value;
        this.setState({ form: formData });
    }


    handleSubmit(event) {
        event.preventDefault();
        kategoriEkle(apiUrl + '/rest/kategori-ekle', this.state.form);
    }


  render() {
    return (
      <div>
        <div className="card">
          <div className="card-header">
            <strong>Kategori Ekle</strong>
          </div>
          <div className="card-block">
                      <form onChange={this.handleChange} className="form-horizontal " onSubmit={this.handleSubmit}>
                            <div className="form-group row">
                                <label className="col-sm-3 form-control-label" htmlFor="input-small">Başlık</label>
                                <div className="col-sm-9">
                                    <input  type="text" id="name" name="name" className="form-control input-sm" placeholder="Kategori Adı" />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-3 form-control-label" htmlFor="input-normal">Açıklama</label>
                                <div className="col-sm-9">
                                    <textarea id="about" name="about" className="form-control" />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-3 form-control-label" htmlFor="input-large">Özel Url</label>
                                <div className="col-sm-9">
                                    <input type="text" id="customUrl" name="customUrl" className="form-control input-sm" placeholder="Özel url" />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-3 form-control-label" htmlFor="input-large">Icon Name</label>
                                <div className="col-sm-9">
                                    <input type="text" id="iconName" name="iconName" className="form-control input-sm" placeholder="Icon Name" />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-3 form-control-label" htmlFor="input-large">Meta Title</label>
                                <div className="col-sm-9">
                                    <input type="text" id="metaTitle" name="metaTitle" className="form-control input-sm" placeholder="Meta Title" />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-3 form-control-label" htmlFor="input-large">Meta Keywords</label>
                                <div className="col-sm-9">
                                    <input type="text" id="metaKeywords" name="metaTags" className="form-control input-sm" placeholder="Meta 1, Meta 2, Meta 3" />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-3 form-control-label" htmlFor="input-large">Meta Desription</label>
                                <div className="col-sm-9">
                                    <input type="text" id="metaDescription" name="metaDesc" className="form-control input-sm" placeholder="Meta Açıklama" />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-3 form-control-label" htmlFor="input-normal">Custom Data</label>
                                <div className="col-sm-9">
                                    <textarea id="customData" name="customData" className="form-control" />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-3 form-control-label" htmlFor="input-large">orderId</label>
                                <div className="col-sm-9">
                                    <input type="text" id="orderId" name="orderId" className="form-control input-sm" placeholder="Order Id Sıralama" />
                                </div>
                            </div>


                            <div className="card-footer">
                                <button type="submit" className="btn btn-sm btn-primary"><i className="fa fa-dot-circle-o"></i> Kategori Ekle</button>
                                <button type="reset" className="btn btn-sm btn-danger"><i className="fa fa-ban"></i> Sıfırla</button>
                            </div>
                        </form>
          </div>

        </div>
      </div>
    )
  }
}

export default addCategory

const kategoriEkle = (postUrl, data) => {
      let apiToken = localStorage.getItem('api_token');
    fetch(postUrl, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': apiToken
        },
        body: JSON.stringify(data)

    })
        .then(function (response) {
            return response.json();
        })
        .then(function (result) {
<<<<<<< HEAD
             window.location = window.location.pathname + '#/dashboard/cats/list';
            //console.log('success', result);
=======
            console.log('success', result);
>>>>>>> origin/master
        })
        .catch(function (error) {
            console.log('Request failed', error);
        });
}