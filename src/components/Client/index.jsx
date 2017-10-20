import React, { Component } from 'react';
import Hire from '../Hire';
import bgGirl from '../../resources/img/bg-girl.jpg';

/**
 * Replace with Clientropriate info on completion
 * @class Client
 * @extends {Component}
 */
class Client extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  /**
   * @returns {Object} Jsx
   * @memberOf Client
   */
  render() {
    return (

      <div className="mh-fullscreen bg-img center-vh p-20" style={{ backgroundImage: `url(${bgGirl})` }}>
        <div className="card card-shadowed p-50 w-400 mb-0" style={{ maxWidth: '100%' }}>
          <h5 className="text-uppercase text-center">Login</h5>
          <br /><br />

          <form>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Username" />
            </div>

            <div className="form-group">
              <input type="password" className="form-control" placeholder="Password" />
            </div>

            <div className="form-group flexbox py-10">
              <label className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" checked />
                <span className="custom-control-indicator" />
                <span className="custom-control-description">Remember me</span>
              </label>

              <a className="text-muted hover-primary fs-13" href="#">Forgot password?</a>
            </div>

            <div className="form-group">
              <button className="btn btn-bold btn-block btn-primary" type="submit">Login</button>
            </div>
          </form>

          <div className="divider">Or Sign In With</div>
          <div className="text-center">
            <a className="btn btn-circular btn-sm btn-facebook mr-4" href="#"><i className="fa fa-facebook" /></a>
            <a className="btn btn-circular btn-sm btn-google mr-4" href="#"><i className="fa fa-google" /></a>
            <a className="btn btn-circular btn-sm btn-twitter" href="#"><i className="fa fa-twitter" /></a>
          </div>

          <hr className="w-30" />

          <p className="text-center text-muted fs-13 mt-20">Don't have an account? <a href="page-register.html">Sign up</a></p>
        </div>
      </div>
    );
  }
}

export default Client;
