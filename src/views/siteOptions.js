import React, { Component } from 'react';
const apiToken = localStorage.getItem('api_token');
import { apiUrl } from '../AuthService'
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
}).catch(function (error) {
        console.log('Request failed', error);
    });

class siteOptions extends Component {

    constructor(props) {
        super(props);
        this.state = {
            settings: [],
            siteInfo: apiUrl + '/rest/site-info',
            siteUpdateUrl: apiUrl + '/rest/site-update'
        }
        this.fetchData = this.fetchData.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.fetchData(this.state.siteInfo);
    }


    fetchData = (urlPage) => {
        getData(urlPage).then((response) => {
           // console.log(response);
            this.setState({
                settings: response
            })
        })
    }

    handleChange(event) {
        event.preventDefault();
        let formData = this.state.settings;
        let target = event.target;
        let demoData = formData[target.id]['value'];
        formData[target.id]['value'] = target.value;
        target.value = formData[target.id]['value'];
        this.setState({ settings: formData });

       // console.log(demoData);
    }

    handleSubmit(event) {
        event.preventDefault();
        settingUpdate(this.state.siteUpdateUrl, { settingsForm: this.state.settings });
    }

    render() {
        const settingsInput = this.state.settings.map((item, key) =>
            <div key={key} className="form-group row">
                <label className="col-sm-3 form-control-label" htmlFor="input-small">{item.option}</label>
                <div className="col-sm-9">
                    <input value={item.value || ''} onChange={this.handleChange} type="text" id={key} name={item.option} className="form-control input-sm" placeholder="option değeri" />
                </div>
            </div>
        );
        return (
            <div>
                <form  className="form-horizontal" onChange={this.handleChange} onSubmit={this.handleSubmit}>
                    {settingsInput || 'yukleniyor'}
<button type="submit" className="btn btn-primary btn-lg btn-block"><i className="fa fa-dot-circle-o"></i> Duzenle</button>
                </form>
            </div>
        );
    }
}

export default siteOptions;

const settingUpdate = (postUrl, data) => {
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