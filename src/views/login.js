import React, { Component } from 'react';
import { login, logout } from '../AuthService';
const loginForm = { 'email': '', 'password': '' }

class loginComponent extends Component  {

    constructor(props) {
        super(props);
        this.state = { form: loginForm };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        loginForm[name] = value;
        this.setState({ form: loginForm });
    }

    handleSubmit(event) {
     // console.log(this.state.form);
        event.preventDefault();
        login(this.state.form);
    }


  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            
            <div className="card-group mb-0">
                <form onChange={this.handleChange} className="form-horizontal " onSubmit={this.handleSubmit}>
              
              <div className="card p-2">
                <div className="card-block">
                  
                  <h1>Login</h1>
                  <p className="text-muted">Sign In to your account</p>
                  <div className="input-group mb-1">
                    <span className="input-group-addon"><i className="icon-user"></i></span>
                    <input type="text" name="email" className="form-control" placeholder="Email"/>
                  </div>
                  <div className="input-group mb-2">
                    <span className="input-group-addon"><i className="icon-lock"></i></span>
                    <input type="password" name="password" className="form-control" placeholder="Password"/>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <button type="button" type="submit" className="btn btn-primary px-2">Login</button>
                    </div>
                    <div className="col-6 text-right">
<<<<<<< HEAD
                      <button type="button" className="btn btn-link px-0" hidden>Forgot password?</button>
=======
                      <button type="button" className="btn btn-link px-0">Forgot password?</button>
>>>>>>> origin/master
                    </div>
                  </div>
                </div>
              </div>
            </form>
              <div className="card card-inverse card-primary py-3 hidden-md-down" style={{ width: 44 + '%' }}>
                <div className="card-block text-center">
                  <div>
<<<<<<< HEAD
                    <h2>BasicMedia Panel</h2>
                    <p>Basic panel for media managment systems.</p>
                    <button type="button" className="btn btn-primary active mt-1" hidden>Register Now!</button>
=======
                    <h2>Sign up</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button type="button" className="btn btn-primary active mt-1">Register Now!</button>
>>>>>>> origin/master
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default loginComponent;