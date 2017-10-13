import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import Scrollchor from 'react-scrollchor';
import logo from '../../resources/images/logo.png';

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
      <header id="home" className="header" itemScope="itemscope" itemType="http://schema.org/WPHeader" style={{ minHeight: '76px' }}>
        <div id="main-nav" className="navbar navbar-inverse bs-docs-nav" role="banner" style={{ minHeight: '76px' }}>
          <div className="container">
            <div className="navbar-header responsive-logo">
              <button className="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target=".bs-navbar-collapse">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <div className="navbar-brand" itemScope="" itemType="http://schema.org/Organization">
                <Link to="/" className="custom-logo-link">
                  <img width="109" height="32" src={logo} className="custom-logo" alt="Ifotta logo" itemProp="logo" />
                </Link>
              </div>
            </div>
            <nav className="navbar-collapse bs-navbar-collapse collapse" id="site-navigation" itemScope="" itemType="http://schema.org/SiteNavigationElement">
              <Link to="/about" className="screen-reader-text skip-link">Skip to content</Link>
              <div id="mega-menu-wrap-primary" className="mega-menu-wrap">
                <div className="mega-menu-toggle">
                  <div className="mega-toggle-block mega-menu-toggle-block mega-toggle-block-right mega-toggle-block-1" id="mega-toggle-block-1" />
                </div>
                <ul id="mega-menu-primary" className="mega-menu mega-menu-horizontal" data-event="hover_intent" data-effect="disabled" data-effect-speed="200" data-second-click="close" data-document-click="collapse" data-vertical-behaviour="standard" data-breakpoint="768" data-unbind="true">
                  <li className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-current-menu-item mega-current_page_item mega-menu-item-home mega-align-bottom-left mega-menu-flyout mega-menu-item-18243" id="mega-menu-item-18243">
                    <Link onClick={() => this._beforeAnimate('serviceLink')} role="link" tabIndex={0} className="mega-menu-link">Services</Link>
                    <Scrollchor
                      ref={(ref) => {
                        this.serviceLinkScroll = ref;
                        return this.serviceLinkScroll;
                      }}
                      to="#focus"
                      id="serviceLinkScroll"
                      className="mega-menu-link"
                    />
                  </li>
                  <li className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-current-menu-item mega-current_page_item mega-menu-item-home mega-align-bottom-left mega-menu-flyout mega-menu-item-18243" id="mega-menu-item-18243">
                    <Link onClick={() => this._beforeAnimate('aboutLink')} role="link" tabIndex={0} className="mega-menu-link">About</Link>
                    <Scrollchor
                      ref={(ref) => {
                        this.aboutLinkScroll = ref;
                        return this.aboutLinkScroll;
                      }}
                      to="#aboutus"
                      id="aboutLinkScroll"
                      className="mega-menu-link"
                    />
                  </li>
                  <li className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-align-bottom-left mega-menu-flyout mega-menu-item-18232" id="mega-menu-item-18232">
                    <Link to="/client" className="mega-menu-link">Clients</Link>
                  </li>
                  <li className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-current-menu-item mega-current_page_item mega-menu-item-home mega-align-bottom-left mega-menu-flyout mega-menu-item-18247" id="mega-menu-item-18247">
                    <Link onClick={() => this._beforeAnimate('contactLink')} role="link" tabIndex={0} className="mega-menu-link">Contact</Link>
                    <Scrollchor
                      ref={(ref) => {
                        this.contactLinkScroll = ref;
                        return this.contactLinkScroll;
                      }}
                      to="#contact"
                      id="contactLinkScroll"
                      className="mega-menu-link"
                    />
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
