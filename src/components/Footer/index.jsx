import React, { Component } from 'react';
import { Link } from 'react-router';
import logo from '../../resources/img/logo.png';

/**
 * Replace with Footerropriate info on completion
 * @className Footer
 * @extends {Component}
 */
class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  /**
   * @returns {Object} Jsx
   * @memberOf Footer
   */
  render() {
    return (

      <footer className="site-footer">
        <div className="container">
          <div className="row gap-y align-items-center">
            <div className="col-12 col-lg-3">
              <p className="text-center text-lg-left">
                <a href="index.html"><img width="67px" height="20px" src={logo} alt="logo" /></a>
              </p>
            </div>

            <div className="col-12 col-lg-6" style={{ visibility: 'hidden' }}>
              <ul className="nav nav-primary nav-hero">
                <li className="nav-item">
                  <a className="nav-link" href="index.html">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="blog.html">Blog</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="block-feature.html">Features</a>
                </li>
                <li className="nav-item hidden-sm-down">
                  <a className="nav-link" href="page-pricing.html">Pricing</a>
                </li>
                <li className="nav-item hidden-sm-down">
                  <a className="nav-link" href="page-contact.html">Contact</a>
                </li>
              </ul>
            </div>

            <div className="col-12 col-lg-3">
              <div className="social text-center text-lg-right">
                <a className="social-facebook" href="https://www.facebook.com/ifotta/"><i className="fa fa-facebook" /></a>
                <a className="social-twitter" href="https://twitter.com/ifotta"><i className="fa fa-twitter" /></a>
                <a className="social-instagram" href="https://www.instagram.com/ifotta_dev/"><i className="fa fa-instagram" /></a>
                <a className="social-dribbble" href="https://www.linkedin.com/company/17990346/"><i className="fa fa-linkedin" /></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
