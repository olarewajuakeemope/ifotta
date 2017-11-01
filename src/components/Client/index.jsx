import React, { Component } from 'react';
import { Link } from 'react-router';
import Hire from '../Hire';
import PaymentGateway from './paymentGateway';
import logo from '../../resources/img/logo.png';
import bgLaptop from '../../resources/img/bg-laptop.jpg';

/**
 * Replace with Clientropriate info on completion
 * @class Client
 * @extends {Component}
 */
class Client extends Component {
  constructor(props) {
    super(props);
    this.state = {
      makePayment: false,
    };
  }

  renderPaymentPage = () => {
    this.setState({
      makePayment: true,
    });
  }
  /**
   * @returns {Object} Jsx
   * @memberOf Client
   */
  render() {
    if (this.state.makePayment) {
      return <PaymentGateway />;
    }
    return (

      <div className="mh-fullscreen bg-img center-vh p-20" style={{ backgroundImage: `url(${bgLaptop})` }}>
        <div className="header-overlay opacity-90" style={{ backgroundColor: '#1F88C1' }} />
        <div className="card card-shadowed p-50 w-400 mb-0" style={{ marginTop: '5em', maxWidth: '100%' }}>
          <div className="text-center">
            <Link className="logo-default" to="/">
              <img width="100px" height="30px" src={logo} alt="logo" />
            </Link>
          </div>
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

              <a className="text-muted hover-primary fs-13" href="#password">Forgot password?</a>
            </div>

            <div className="form-group">
              <button className="btn btn-bold btn-block btn-primary" type="submit">Login</button>
            </div>
          </form>
          <hr className="w-30" />
          <p className="text-center text-muted fs-13 mt-20">Don't have an account?
            <Hire>
              <a href="#signup"> Sign up</a>
            </Hire>
          </p>
          <p className="text-center">
            <a onClick={this.renderPaymentPage} href="#payment">Make Payment  <i className="fa fa-credit-card" /></a>
          </p>
        </div>
      </div>
    );
  }
}

export default Client;
