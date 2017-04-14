import React, { Component } from 'react';
let formData = {}
import { apiUrl } from '../AuthService'
import { getCategories } from '../generalService'
const kanalEkle = (postUrl, data) => {
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
            // console.log('success', result);
        })
        .catch(function (error) {
            console.log('Request failed', error);
        });
}
class addChanel extends Component {
    constructor(props) {
        super(props);
        this.state = { form: formData, kategoriler: [] };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        getCategories(apiUrl + '/rest/kategoriler').then((response) => {
            this.setState({
                kategoriler: response
            })
        });
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
        kanalEkle(apiUrl + '/rest/kanal-ekle', this.state.form);
    }

    render() {
        this.state.kategoriler.sort(function (a, b) {
            return a.orderId - b.orderId;
        });

        let kategoriler = this.state.kategoriler.map((kategori, index) =>
            <option key={index} value={kategori.id}>{kategori.name}</option>
        );
        return (
            <div>
                <div className="card">
                    <div className="card-header">
                        <strong>Kanal Ekle</strong>
                    </div>
                    <div className="card-block">
                        <form onChange={this.handleChange} className="form-horizontal " onSubmit={this.handleSubmit}>
                            <div className="form-group row">
                                <label className="col-sm-3 form-control-label" htmlFor="input-small">Başlık</label>
                                <div className="col-sm-9">
                                    <input type="text" id="name" name="name" className="form-control input-sm" placeholder="yeni kanal" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 form-control-label" htmlFor="input-normal">Açıklama</label>
                                <div className="col-sm-9">
                                    <textarea id="about" name="about" className="form-control" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 form-control-label" htmlFor="input-large">Kanal Resim</label>
                                <div className="col-sm-9">
                                    <input type="text" id="imageUrl" name="imageUrl" className="form-control input-sm" placeholder="image url" />
                                </div>
                            </div>


                            <div className="form-group row">
                                <label className="col-sm-3 form-control-label" htmlFor="input-large">Özel Url</label>
                                <div className="col-sm-9">
                                    <input type="text" id="customUrl" name="customUrl" className="form-control input-sm" placeholder="Özel url" />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-3 form-control-label" htmlFor="input-large">Embed Url</label>
                                <div className="col-sm-9">
                                    <input type="text" id="embedUrl" name="embedUrl" className="form-control input-sm" placeholder="Embed url" />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-3 form-control-label" htmlFor="input-large">Json Url</label>
                                <div className="col-sm-9">
                                    <input type="text" id="jsonUrl" name="jsonUrl" className="form-control input-sm" placeholder="Json url" />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-3 form-control-label" htmlFor="input-large">Tags</label>
                                <div className="col-sm-9">
                                    <input type="text" id="tags" name="tags" className="form-control input-sm" placeholder="tag 1, tag 2, tag 3" />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-3 form-control-label" htmlFor="input-large">Meta Title</label>
                                <div className="col-sm-9">
                                    <input type="text" id="metaTitle" name="metaName" className="form-control input-sm" placeholder="Meta Title" />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-3 form-control-label" htmlFor="input-large">Meta Keywords</label>
                                <div className="col-sm-9">
                                    <input type="text" id="metaKeywords" name="metaKeywords" className="form-control input-sm" placeholder="Meta 1, Meta 2, Meta 3" />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-3 form-control-label" htmlFor="input-large">Meta Desription</label>
                                <div className="col-sm-9">
                                    <input type="text" id="metaDescription" name="metaDesc" className="form-control input-sm" placeholder="Meta Açıklama" />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-md-3 form-control-label" htmlFor="select">Kategori</label>
                                <div className="col-md-9">
                                    <select id="catId" name="catId" className="form-control">
                                        <option value="0">Kategoriler</option>
                                        {kategoriler}
                                    </select>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-3 form-control-label" htmlFor="input-large">Order</label>
                                <div className="col-sm-9">
                                    <input type="text" id="orderId" name="orderId" className="form-control input-sm" placeholder="Order Id" />
                                </div>
                            </div>

                            <div className="card-footer">
                                <button type="submit" className="btn btn-sm btn-primary"><i className="fa fa-dot-circle-o"></i> Kanal Ekle</button>
                                <button type="reset" className="btn btn-sm btn-danger"><i className="fa fa-ban"></i> Sıfırla</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        );
    }
}

export default addChanel;