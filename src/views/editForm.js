import React, { Component } from 'react'
import { getCategories } from '../generalService'
import { apiUrl } from '../AuthService'
<<<<<<< HEAD

class EditForm extends Component {
    constructor(props) {
        super(props);
        // console.log(this.props);
        this.state = { form: this.props.current, kategoriler: [] };
=======
const kanalDuzenle = (postUrl, data) => {
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
            console.log('success', result);
        })
        .catch(function (error) {
            console.log('Request failed', error);
        });
}
class EditForm extends Component {
    constructor(props) {
        super(props);
       // console.log(this.props);
        this.state = { form: this.props.current, kategoriler : [] };
>>>>>>> origin/master
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
<<<<<<< HEAD
        event.preventDefault();
        let formData = this.state.form;
        let target = event.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;
        //target.value = formData[name];
=======
        let formData = this.state.form;
        let target = event.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        target.value = formData[name];
        let name = target.name;
>>>>>>> origin/master
        formData[name] = value;
        this.setState({ form: formData });

    }

    handleSubmit(event) {
        event.preventDefault();
<<<<<<< HEAD
        this.props.denge();
        kanalDuzenle(apiUrl + '/rest/kanal-update/' + this.state.form.id, this.state.form);
    }

    beniTestEt = () => {
        console.log("okey");
    }
    render() {
        this.state.kategoriler.sort(function (a, b) {
            return a.orderId - b.orderId;
        });

        let kategoriler = this.state.kategoriler.map((kategori, index) =>
            <option key={index} value={kategori.id}>{kategori.name}</option>
        );
=======
        this.props.denge(this.state.form);
        kanalDuzenle(apiUrl + '/rest/kanal-update/' + this.state.form.id, this.state.form);
    }
    render() {
this.state.kategoriler.sort(function(a, b) {
  return a.orderId - b.orderId;
});

    let kategoriler = this.state.kategoriler.map((kategori, index) =>
     <option key={index} value={kategori.id}>{kategori.name}</option>
    );
>>>>>>> origin/master
        return (
            <div>
                <form onChange={this.handleChange} className="form-horizontal " onSubmit={this.handleSubmit}>
                    <div className="form-group row">
                        <label className="col-sm-3 form-control-label" htmlFor="input-small">Başlık</label>
                        <div className="col-sm-9">
                            <input value={this.state.form.name} type="text" id="name" name="name" className="form-control input-sm" placeholder="yeni kanal" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-3 form-control-label" htmlFor="input-normal">Açıklama</label>
                        <div className="col-sm-9">
                            <textarea value={this.state.form.about} id="about" name="about" className="form-control" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-3 form-control-label" htmlFor="input-large">Kanal Resim</label>
                        <div className="col-sm-9">
                            <input value={this.state.form.imageUrl} type="text" id="imageUrl" name="imageUrl" className="form-control input-sm" placeholder="image url" />
                        </div>
                    </div>


                    <div className="form-group row">
                        <label className="col-sm-3 form-control-label" htmlFor="input-large">Özel Url</label>
                        <div className="col-sm-9">
                            <input value={this.state.form.customUrl} type="text" id="customUrl" name="customUrl" className="form-control input-sm" placeholder="Özel url" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-3 form-control-label" htmlFor="input-large">Embed Url</label>
                        <div className="col-sm-9">
                            <input value={this.state.form.embedUrl} type="text" id="embedUrl" name="embedUrl" className="form-control input-sm" placeholder="Embed url" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-3 form-control-label" htmlFor="input-large">Json Url</label>
                        <div className="col-sm-9">
                            <input value={this.state.form.jsonUrl} type="text" id="jsonUrl" name="jsonUrl" className="form-control input-sm" placeholder="Json url" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-3 form-control-label" htmlFor="input-large">Tags</label>
                        <div className="col-sm-9">
                            <input value={this.state.form.tags} type="text" id="tags" name="tags" className="form-control input-sm" placeholder="tag 1, tag 2, tag 3" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-3 form-control-label" htmlFor="input-large">Meta Title</label>
                        <div className="col-sm-9">
                            <input value={this.state.form.metaName} type="text" id="metaName" name="metaName" className="form-control input-sm" placeholder="Meta Title" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-3 form-control-label" htmlFor="input-large">Meta Keywords</label>
                        <div className="col-sm-9">
                            <input value={this.state.form.metaKeywords} type="text" id="metaKeywords" name="metaKeywords" className="form-control input-sm" placeholder="Meta 1, Meta 2, Meta 3" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-3 form-control-label" htmlFor="input-large">Meta Desription</label>
                        <div className="col-sm-9">
                            <input value={this.state.form.metaDesc} type="text" id="metaDesc" name="metaDesc" className="form-control input-sm" placeholder="Meta Açıklama" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-md-3 form-control-label" htmlFor="select">Kategori</label>
                        <div className="col-md-9">
                            <select value={this.state.form.catId} id="catId" name="catId" className="form-control">
                                <option value="0">Kategoriler</option>
<<<<<<< HEAD
                                {kategoriler}
=======
                                 {kategoriler}                   
>>>>>>> origin/master
                            </select>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-3 form-control-label" htmlFor="input-large">Order</label>
                        <div className="col-sm-9">
                            <input value={this.state.form.orderId} type="text" id="orderId" name="orderId" className="form-control input-sm" placeholder="Order Id" />
                        </div>
                    </div>


                </form>
                <div className="" hidden><pre>{this.props.current ? JSON.stringify(this.props.current, null, 2) : "yok"}</pre></div>
                <div className="modal-footer">
                    <button onClick={this.handleSubmit} type="submit" className="btn btn-primary"><i className="fa fa-dot-circle-o"></i> Duzenle</button>
                </div>
            </div>
        )
    }
}

<<<<<<< HEAD
const kanalDuzenle = (postUrl, data) => {
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
            console.log('success');
        })
        .catch(function (error) {
            console.log('Request failed', error);
        });
}
=======
>>>>>>> origin/master
export default EditForm