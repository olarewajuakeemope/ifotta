import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import Scrollchor from 'react-scrollchor';
import logo from '../../resources/img/logo.png';

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
              <a className="logo-default" href="/" style={{ color: '#1F88C1' }}><img width="100px" height="30px" src={logo} alt="logo" /></a>
              <a className="logo-inverse text-white" href="/"><strong>ifotta</strong></a>
            </span>
          </div>


          <div className="topbar-right">
            <ul className="topbar-nav nav">
              <li className="nav-item"><a className="nav-link" href="/#services-section" data-scrollto="services-section">Our Services</a></li>
              <li className="nav-item"><Link className="nav-link" to="about">About Us</Link></li>
              <li className="nav-item"><Link className="nav-link" to="client">Client</Link></li>
              <li className="nav-item"><Link className="nav-link" to="contact">Contact</Link></li>
            </ul>
          </div>

        </div>
      </nav>
    );
  }
}

export default Header;
