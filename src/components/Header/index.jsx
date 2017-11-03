import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import Hire from '../Hire';
import logo from '../../resources/img/logo.png';
import whiteLogo from '../../resources/img/ifotta-logo-white.png';

/**
 * Replace with Headerropriate info on completion
 * @class Header
 * @extends {Component}
 */
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this._beforeAnimate = this._beforeAnimate.bind(this);
  }

  _beforeAnimate(id) {
    const scrollId = `${id}Scroll`;
    browserHistory.push('/');
    setTimeout(() => this[scrollId].simulateClick(), 500);
  }
  /**
   * @returns {Object} Jsx
   * @memberOf Header
   */
  render() {
    return (
      <nav className="topbar topbar-inverse topbar-expand-sm topbar-sticky">
        <div className="container">

          <div className="topbar-left">
            <button className="topbar-toggler">&#9776;</button>
            <span className="topbar-brand fs-18 fw-400">
              <Link className="logo-default" to="/"><img width="100px" height="30px" src={logo} alt="logo" /></Link>
              <Link className="logo-inverse text-white" to="/"><img width="100px" height="50px" src={whiteLogo} alt="logo" /></Link>
            </span>
          </div>


          <div className="topbar-right">
            <ul className="topbar-nav nav">
              <li className="nav-item">
                <Link className="nav-link ifotta-no-display-mobile" to="/">Home</Link>
                <a className="nav-link ifotta-display-mobile" href="/">Home</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="services">Our Services</Link>
                <div className="nav-submenu">
                  <Hire>
                    <a className="nav-link ifotta-no-display-mobile" href="#hire">Hire A Developer</a>
                    <a className="nav-link ifotta-display-mobile" href="/hireForm">Hire A Developer</a>
                  </Hire>
                  <span>
                    <Link className="nav-link ifotta-no-display-mobile" to="services">Software Development</Link>
                    <a className="nav-link ifotta-display-mobile" href="/services">Software Development</a>
                  </span>
                  <span>
                    <Link className="nav-link ifotta-no-display-mobile" to="academy">Ifotta Academy</Link>
                    <a className="nav-link ifotta-display-mobile" href="/academy">Ifotta Academy</a>
                  </span>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link ifotta-no-display-mobile" to="about">About Us</Link>
                <a className="nav-link ifotta-display-mobile" href="/about">About Us</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link ifotta-no-display-mobile" to="jobs">Career</Link>
                <a className="nav-link ifotta-display-mobile" href="/jobs">Career</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#client">Clients</a>
                <div className="nav-submenu">
                  <a className="nav-link" target="_blank" rel="noopener noreferrer" href="https://bitrix24.com">Login</a>
                  {/* <span>
                    <Link className="nav-link ifotta-no-display-mobile" to="client">Make Payment</Link>
                    <a className="nav-link ifotta-display-mobile" href="/client">Make Payment</a>
                  </span> */}
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link ifotta-no-display-mobile" to="contact">Contact</Link>
                <a className="nav-link ifotta-display-mobile" href="/contact">Contact</a>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    );
  }
}

export default Header;
