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
              <a className="logo-default" href="/"><img width="100px" height="30px" src={logo} alt="logo" /></a>
              <a className="logo-inverse text-white" href="/"><img width="100px" height="50px" src={whiteLogo} alt="logo" /></a>
            </span>
          </div>


          <div className="topbar-right">
            <ul className="topbar-nav nav">
              <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
              <li className="nav-item">
                <Link className="nav-link" to="services">Our Services</Link>
                <div className="nav-submenu">
                  <Hire><a className="nav-link" href="#">Hire A Developer</a></Hire>
                  <Link className="nav-link" to="services">Software Development</Link>
                  <Link className="nav-link" to="academy">Ifotta Academy</Link>
                </div>
              </li>
              <li className="nav-item"><Link className="nav-link" to="about">About Us</Link></li>
              <li className="nav-item"><Link className="nav-link" to="jobs">Career</Link></li>
              <li className="nav-item"><Link className="nav-link" to="client">Clients</Link></li>
              <li className="nav-item"><Link className="nav-link" to="contact">Contact</Link></li>
            </ul>
          </div>

        </div>
      </nav>
    );
  }
}

export default Header;
