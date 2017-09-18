import React, { Component } from 'react';
import { Link } from 'react-router';
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

              <Link to="/" className="custom-logo-link"><img width="109" height="32" src={logo} className="custom-logo" alt="Ifotta logo" itemProp="logo" /></Link>
              </div>

            </div>

            <nav className="navbar-collapse bs-navbar-collapse collapse" id="site-navigation" itemScope="" itemType="http://schema.org/SiteNavigationElement">
            <Link to="/about" className="screen-reader-text skip-link">Skip to content</Link>
              <div id="mega-menu-wrap-primary" className="mega-menu-wrap"><div className="mega-menu-toggle" tabIndex="0"><div className="mega-toggle-block mega-menu-toggle-block mega-toggle-block-right mega-toggle-block-1" id="mega-toggle-block-1" /></div><ul id="mega-menu-primary" className="mega-menu mega-menu-horizontal" data-event="hover_intent" data-effect="disabled" data-effect-speed="200" data-second-click="close" data-document-click="collapse" data-vertical-behaviour="standard" data-breakpoint="768" data-unbind="true"><li className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-current-menu-item mega-current_page_item mega-menu-item-home mega-menu-item-has-children mega-align-bottom-left mega-menu-megamenu mega-menu-item-18241" id="mega-menu-item-18241"><Link to="/about" className="mega-menu-link">Features</Link>
                <ul className="mega-sub-menu">
                  <li className="mega-menu-item mega-menu-item-type-widget widget_text mega-menu-columns-1-of-2 mega-menu-item-text-2" id="mega-menu-item-text-2">			<div className="textwidget"><em>SETUP</em></div>
                  </li><li className="mega-menu-item mega-menu-item-type-widget widget_text mega-menu-columns-1-of-2 mega-menu-item-text-3" id="mega-menu-item-text-3">			<div className="textwidget"><em>CONTENT</em></div>
                  </li><li className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-has-icon mega-menu-columns-1-of-2 mega-menu-clear mega-menu-item-18251" id="mega-menu-item-18251"><Link to="/about" className="dashicons-backup mega-menu-link">1-Minute Setup &amp; Sample Content</Link></li><li className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-has-icon mega-menu-columns-1-of-2 mega-menu-item-18253" id="mega-menu-item-18253"><Link to="/about" className="dashicons-format-image mega-menu-link">Custom Backgrounds</Link></li><li className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-has-icon mega-menu-columns-1-of-2 mega-menu-clear mega-menu-item-18250" id="mega-menu-item-18250"><Link to="/about" className="dashicons-hammer mega-menu-link">1-Click Updates and Fast Support</Link></li><li className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-has-icon mega-menu-columns-1-of-2 mega-menu-item-18257" id="mega-menu-item-18257"><Link to="/about" className="dashicons-image-rotate-right mega-menu-link">Responsive Design</Link></li><li className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-has-icon mega-menu-columns-1-of-2 mega-menu-clear mega-menu-item-18254" id="mega-menu-item-18254"><Link to="/about" className="dashicons-visibility mega-menu-link">Live Customizer</Link></li><li className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-has-icon mega-menu-columns-1-of-2 mega-menu-item-18256" id="mega-menu-item-18256"><Link to="/about" className="dashicons-dashboard mega-menu-link">Optimized for Speed</Link></li><li className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-has-icon mega-menu-columns-1-of-2 mega-menu-clear mega-menu-item-18260" id="mega-menu-item-18260"><Link to="/about" className="dashicons-video-alt mega-menu-link">Video Tutorials</Link></li><li className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-has-icon mega-menu-columns-1-of-2 mega-menu-item-18255" id="mega-menu-item-18255"><Link to="/about" className="dashicons-editor-justify mega-menu-link">Mega Menus (With Icons)</Link></li><li className="mega-menu-item mega-menu-item-type-widget widget_text mega-menu-columns-2-of-2 mega-menu-clear mega-menu-item-text-4" id="mega-menu-item-text-4">			<div className="textwidget"><em>DESIGN</em></div>
                  </li><li className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-has-icon mega-menu-columns-1-of-2 mega-menu-clear mega-menu-item-18259" id="mega-menu-item-18259"><Link to="/about" className="dashicons-translation mega-menu-link">Translation &amp; RTL Ready</Link></li><li className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-has-icon mega-menu-columns-1-of-2 mega-menu-item-18252" id="mega-menu-item-18252"><Link to="/about" className="dashicons-image-flip-vertical mega-menu-link">Drag-and-Drop Content Builder</Link></li><li className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-has-icon mega-menu-columns-1-of-2 mega-menu-clear mega-menu-item-18258" id="mega-menu-item-18258"><Link to="/about" className="dashicons-admin-settings mega-menu-link">SEO Optimized</Link></li><li className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-has-icon mega-menu-columns-1-of-2 mega-menu-item-18261" id="mega-menu-item-18261"><Link to="/about" className="dashicons-cart mega-menu-link" >WooCommerce Ready</Link></li></ul>
              </li><li className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-current-menu-item mega-current_page_item mega-menu-item-home mega-align-bottom-left mega-menu-flyout mega-menu-item-18243" id="mega-menu-item-18243"><Link to="/about" className="mega-menu-link">About</Link></li><li className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-current-menu-item mega-current_page_item mega-menu-item-home mega-align-bottom-left mega-menu-flyout mega-menu-item-18244" id="mega-menu-item-18244"><Link to="/about" className="mega-menu-link">Team</Link></li><li className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-current-menu-item mega-current_page_item mega-menu-item-home mega-align-bottom-left mega-menu-flyout mega-menu-item-18247" id="mega-menu-item-18247"><Link to="/about" className="mega-menu-link">Testimonials</Link></li><li className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-current-menu-item mega-current_page_item mega-menu-item-home mega-align-bottom-left mega-menu-flyout mega-menu-item-18248" id="mega-menu-item-18248"><Link to="/about" className="mega-menu-link">Contact</Link></li><li className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-has-children mega-align-bottom-left mega-menu-flyout mega-has-icon mega-menu-item-18239" id="mega-menu-item-18239"><Link to="/about" className="dashicons-cart mega-menu-link">Shop</Link>
                <ul className="mega-sub-menu">
                  <li className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-has-icon mega-menu-item-18271" id="mega-menu-item-18271"><Link to="/about" className="dashicons-grid-view mega-menu-link">All Products</Link></li><li className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-product mega-has-icon mega-menu-item-18264" id="mega-menu-item-18264"><Link to="/about" className="dashicons-carrot mega-menu-link">Single Product</Link></li><li className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-has-icon mega-menu-item-18262" id="mega-menu-item-18262"><Link to="/about" className="dashicons-cart mega-menu-link">Cart</Link></li></ul>
              </li><li className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-align-bottom-left mega-menu-flyout mega-menu-item-18232" id="mega-menu-item-18232"><Link to="/about" className="mega-menu-link">Blog</Link></li></ul></div>
              </nav>

          </div>
        </div>
      </header>
    );
  }
}

export default Header;
