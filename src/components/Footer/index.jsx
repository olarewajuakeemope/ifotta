import React, { Component } from 'react';
import { Link } from 'react-router';
import footer1 from '../../resources/css/map25-redish.png';
import footer2 from '../../resources/css/envelope4-green.png';
import footer3 from '../../resources/css/telephone65-blue.png';

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

      <footer id="footer" itemScope="itemscope" itemType="http://schema.org/WPFooter">
        <div className="container">
          <div className="col-md-3 company-details">
            <div className="icon-top red-text">
              <img src={footer1} alt="" />
            </div>
            <div className="zerif-footer-address">270 Ozumba Mbadiwe Street Victoria Island Lagos Nigeria.</div>
          </div>
          <div className="col-md-3 company-details">
            <div className="icon-top green-text">
              <img src={footer2} alt="" />
            </div>
            <div className="zerif-footer-email">support@ifotta.com</div>
          </div>
          <div className="col-md-3 company-details">
            <div className="icon-top blue-text">
              <img src={footer3} alt="" />
            </div>
            <div className="zerif-footer-phone">08064227106</div>
          </div>
          <div className="col-md-3 copyright">
            <ul className="social">
              <li id="facebook">
                <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/ifotta/">
                  <span className="sr-only">Facebook link</span>
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li id="twitter">
                <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/ifotta">
                  <span className="sr-only">Twitter link</span>
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li id="linkedin">
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/17990346/">
                  <span className="sr-only">Linkedin link</span>
                  <i className="fa fa-linkedin" />
                </a>
              </li>
              <li id="instagram">
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/ifotta_dev/">
                  <span className="sr-only">Instagram link</span>
                  <i className="fa fa-instagram" />
                </a>
              </li>
            </ul>
            <p id="zerif-copyright">©Ifotta</p>
            <div className="zerif-copyright-box">
              developed by <Link className="zerif-copyright" to="/"> Ifotta</Link>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
