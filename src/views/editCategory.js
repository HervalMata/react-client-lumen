import React, { Component } from 'react'
import { apiUrl } from '../AuthService'
const kategoriDuzenle = (postUrl, data) => {
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
class EditCategory extends Component {
    constructor(props) {
        super(props);
       // console.log(this.props);
        this.state = { form: this.props.current };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let formData = this.state.form;
        let target = event.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        target.value = formData[name];
        let name = target.name;
        formData[name] = value;
        this.setState({ form: formData });

    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.denge(this.state.form);
        kategoriDuzenle(apiUrl + '/rest/kategori-duzenle/' + this.state.form.id, this.state.form);


    }
    render() {
        return (
            <div>
                <form onChange={this.handleChange} className="form-horizontal " onSubmit={this.handleSubmit}>
                    <div className="form-group row">
                        <label className="col-sm-3 form-control-label" htmlFor="input-small">Başlık</label>
                        <div className="col-sm-9">
                            <input value={this.state.form.name} type="text" id="name" name="name" className="form-control input-sm" placeholder="Kategori Adı" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-3 form-control-label" htmlFor="input-normal">Açıklama</label>
                        <div className="col-sm-9">
                            <textarea value={this.state.form.about} id="about" name="about" className="form-control" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-3 form-control-label" htmlFor="input-large">Özel Url</label>
                        <div className="col-sm-9">
                            <input value={this.state.form.customUrl} type="text" id="customUrl" name="customUrl" className="form-control input-sm" placeholder="Özel url" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-3 form-control-label" htmlFor="input-large">Icon Name</label>
                        <div className="col-sm-9">
                            <input value={this.state.form.iconName} type="text" id="iconName" name="iconName" className="form-control input-sm" placeholder="Icon Name" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-3 form-control-label" htmlFor="input-large">Meta Title</label>
                        <div className="col-sm-9">
                            <input value={this.state.form.metaTitle} type="text" id="metaTitle" name="metaTitle" className="form-control input-sm" placeholder="Meta Title" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-3 form-control-label" htmlFor="input-large">Meta Keywords</label>
                        <div className="col-sm-9">
                            <input value={this.state.form.metaTags} type="text" id="metaKeywords" name="metaTags" className="form-control input-sm" placeholder="Meta 1, Meta 2, Meta 3" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-3 form-control-label" htmlFor="input-large">Meta Desription</label>
                        <div className="col-sm-9">
                            <input value={this.state.form.metaDesc} type="text" id="metaDesc" name="metaDesc" className="form-control input-sm" placeholder="Meta Açıklama" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-3 form-control-label" htmlFor="input-normal">Custom Data</label>
                        <div className="col-sm-9">
                            <textarea value={this.state.form.customData} id="customData" name="customData" className="form-control" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-3 form-control-label" htmlFor="input-large">orderId</label>
                        <div className="col-sm-9">
                            <input value={this.state.form.orderId} type="text" id="orderId" name="orderId" className="form-control input-sm" placeholder="Order Id Sıralama" />
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

export default EditCategory