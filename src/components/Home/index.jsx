import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import Paper from 'material-ui/Paper';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import RaisedButton from 'material-ui/RaisedButton';
import { white, lightBlue800 } from 'material-ui/styles/colors';
import Hire from '../Hire';
import AcademyModal from '../AcademyModal';
import logo from '../../resources/images/logo.png';

const styles = {
  firstPapers: {
    height: 300,
    width: 300,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 70,
    marginRight: 70,
    padding: 20,
    color: '#999999',
    textAlign: 'center',
    display: 'inline-block',
  },
  iconStyles: {
    width: 40,
    height: 40,
  },
};
const tilesData = [
  {
    img: 'images/grid-list/honey-823614_640.jpg',
    title: 'Created forth two. Behold appear first, kind all i saying fowl man itself moved which every open shall moved subdue appear. Saying life wherein stars. Give dry, own, male had that us third lesser over deep. May every bring in it Whose. Female earth heaven won\'t behold female.',
    author: 'Our Developers',
  },
  {
    img: 'images/grid-list/vegetables-790022_640.jpg',
    title: 'Created forth two. Behold appear first, kind all i saying fowl man itself moved which every open shall moved subdue appear. Saying life wherein stars. Give dry, own, male had that us third lesser over deep. May every bring in it Whose. Female earth heaven won\'t behold female.',
    author: 'Code With Us',
  },
  {
    img: 'images/grid-list/water-plant-821293_640.jpg',
    title: 'Created forth two. Behold appear first, kind all i saying fowl man itself moved which every open shall moved subdue appear. Saying life wherein stars. Give dry, own, male had that us third lesser over deep. May every bring in it Whose. Female earth heaven won\'t behold female.',
    author: 'ifotta Academy',
  },
];

const Home = () => (
  <div id="mobilebgfix">
    <div className="mobile-bg-fix-img-wrap">
      <div className="mobile-bg-fix-img" />
    </div>
    <div className="mobile-bg-fix-whole-site">


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

                <a href="https://demo.themeisle.com/zerif-lite/" className="custom-logo-link" rel="home" itemProp="url"><img width="109" height="32" src="./Zerif Lite - Just another Demos Sites site_files/logo.png" className="custom-logo" alt="Zerif Lite" itemProp="logo" /></a>
              </div>

            </div>

            <nav className="navbar-collapse bs-navbar-collapse collapse" id="site-navigation" itemScope="" itemType="http://schema.org/SiteNavigationElement">
              <a className="screen-reader-text skip-link" href="https://demo.themeisle.com/zerif-lite/#content">Skip to content</a>
              <div id="mega-menu-wrap-primary" className="mega-menu-wrap"><div className="mega-menu-toggle" tabIndex="0"><div className="mega-toggle-block mega-menu-toggle-block mega-toggle-block-right mega-toggle-block-1" id="mega-toggle-block-1" /></div><ul id="mega-menu-primary" className="mega-menu mega-menu-horizontal" data-event="hover_intent" data-effect="disabled" data-effect-speed="200" data-second-click="close" data-document-click="collapse" data-vertical-behaviour="standard" data-breakpoint="768" data-unbind="true"><li className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-current-menu-item mega-current_page_item mega-menu-item-home mega-menu-item-has-children mega-align-bottom-left mega-menu-megamenu mega-menu-item-18241" id="mega-menu-item-18241"><a className="mega-menu-link" href="https://demo.themeisle.com/zerif-lite/#focus" aria-haspopup="true" tabIndex="0">Features</a>
                <ul className="mega-sub-menu">
                  <li className="mega-menu-item mega-menu-item-type-widget widget_text mega-menu-columns-1-of-2 mega-menu-item-text-2" id="mega-menu-item-text-2">			<div className="textwidget"><em>SETUP</em></div>
                  </li><li className="mega-menu-item mega-menu-item-type-widget widget_text mega-menu-columns-1-of-2 mega-menu-item-text-3" id="mega-menu-item-text-3">			<div className="textwidget"><em>CONTENT</em></div>
                  </li><li className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-has-icon mega-menu-columns-1-of-2 mega-menu-clear mega-menu-item-18251" id="mega-menu-item-18251"><a className="dashicons-backup mega-menu-link" href="https://demo.themeisle.com/zerif-lite/1-minute-setup-sample-content-available/">1-Minute Setup &amp; Sample Content</a></li><li className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-has-icon mega-menu-columns-1-of-2 mega-menu-item-18253" id="mega-menu-item-18253"><a className="dashicons-format-image mega-menu-link" href="https://demo.themeisle.com/zerif-lite/custom-backgrounds/">Custom Backgrounds</a></li><li className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-has-icon mega-menu-columns-1-of-2 mega-menu-clear mega-menu-item-18250" id="mega-menu-item-18250"><a className="dashicons-hammer mega-menu-link" href="https://demo.themeisle.com/zerif-lite/1-click-updates-and-fast-support/">1-Click Updates and Fast Support</a></li><li className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-has-icon mega-menu-columns-1-of-2 mega-menu-item-18257" id="mega-menu-item-18257"><a className="dashicons-image-rotate-right mega-menu-link" href="https://demo.themeisle.com/zerif-lite/responsive-design/">Responsive Design</a></li><li className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-has-icon mega-menu-columns-1-of-2 mega-menu-clear mega-menu-item-18254" id="mega-menu-item-18254"><a className="dashicons-visibility mega-menu-link" href="https://demo.themeisle.com/zerif-lite/live-customizer/">Live Customizer</a></li><li className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-has-icon mega-menu-columns-1-of-2 mega-menu-item-18256" id="mega-menu-item-18256"><a className="dashicons-dashboard mega-menu-link" href="https://demo.themeisle.com/zerif-lite/optimized-for-speed/">Optimized for Speed</a></li><li className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-has-icon mega-menu-columns-1-of-2 mega-menu-clear mega-menu-item-18260" id="mega-menu-item-18260"><a className="dashicons-video-alt mega-menu-link" href="https://demo.themeisle.com/zerif-lite/video-tutorials/">Video Tutorials</a></li><li className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-has-icon mega-menu-columns-1-of-2 mega-menu-item-18255" id="mega-menu-item-18255"><a className="dashicons-editor-justify mega-menu-link" href="https://demo.themeisle.com/zerif-lite/mega-menus/">Mega Menus (With Icons)</a></li><li className="mega-menu-item mega-menu-item-type-widget widget_text mega-menu-columns-2-of-2 mega-menu-clear mega-menu-item-text-4" id="mega-menu-item-text-4">			<div className="textwidget"><em>DESIGN</em></div>
                  </li><li className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-has-icon mega-menu-columns-1-of-2 mega-menu-clear mega-menu-item-18259" id="mega-menu-item-18259"><a className="dashicons-translation mega-menu-link" href="https://demo.themeisle.com/zerif-lite/translation-rtl-ready/">Translation &amp; RTL Ready</a></li><li className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-has-icon mega-menu-columns-1-of-2 mega-menu-item-18252" id="mega-menu-item-18252"><a className="dashicons-image-flip-vertical mega-menu-link" href="https://demo.themeisle.com/zerif-lite/drag-and-drop-builder-compatible/">Drag-and-Drop Content Builder</a></li><li className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-has-icon mega-menu-columns-1-of-2 mega-menu-clear mega-menu-item-18258" id="mega-menu-item-18258"><a className="dashicons-admin-settings mega-menu-link" href="https://demo.themeisle.com/zerif-lite/seo-optimized/">SEO Optimized</a></li><li className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-has-icon mega-menu-columns-1-of-2 mega-menu-item-18261" id="mega-menu-item-18261"><a className="dashicons-cart mega-menu-link" href="https://demo.themeisle.com/zerif-lite/woocommerce-ready/">WooCommerce Ready</a></li></ul>
              </li><li className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-current-menu-item mega-current_page_item mega-menu-item-home mega-align-bottom-left mega-menu-flyout mega-menu-item-18243" id="mega-menu-item-18243"><a className="mega-menu-link" href="https://demo.themeisle.com/zerif-lite/#aboutus" tabIndex="0">About</a></li><li className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-current-menu-item mega-current_page_item mega-menu-item-home mega-align-bottom-left mega-menu-flyout mega-menu-item-18244" id="mega-menu-item-18244"><a className="mega-menu-link" href="https://demo.themeisle.com/zerif-lite/#team" tabIndex="0">Team</a></li><li className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-current-menu-item mega-current_page_item mega-menu-item-home mega-align-bottom-left mega-menu-flyout mega-menu-item-18247" id="mega-menu-item-18247"><a className="mega-menu-link" href="https://demo.themeisle.com/zerif-lite/#testimonials" tabIndex="0">Testimonials</a></li><li className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-current-menu-item mega-current_page_item mega-menu-item-home mega-align-bottom-left mega-menu-flyout mega-menu-item-18248" id="mega-menu-item-18248"><a className="mega-menu-link" href="https://demo.themeisle.com/zerif-lite/#contact" tabIndex="0">Contact</a></li><li className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-has-children mega-align-bottom-left mega-menu-flyout mega-has-icon mega-menu-item-18239" id="mega-menu-item-18239"><a className="dashicons-cart mega-menu-link" href="https://demo.themeisle.com/zerif-lite/shop/" aria-haspopup="true" tabIndex="0">Shop</a>
                <ul className="mega-sub-menu">
                  <li className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-has-icon mega-menu-item-18271" id="mega-menu-item-18271"><a className="dashicons-grid-view mega-menu-link" href="https://demo.themeisle.com/zerif-lite/shop/">All Products</a></li><li className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-product mega-has-icon mega-menu-item-18264" id="mega-menu-item-18264"><a className="dashicons-carrot mega-menu-link" href="https://demo.themeisle.com/zerif-lite/product/cafeteria-cake/">Single Product</a></li><li className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-has-icon mega-menu-item-18262" id="mega-menu-item-18262"><a className="dashicons-cart mega-menu-link" href="https://demo.themeisle.com/zerif-lite/cart/">Cart</a></li></ul>
              </li><li className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-align-bottom-left mega-menu-flyout mega-menu-item-18232" id="mega-menu-item-18232"><a className="mega-menu-link" href="https://demo.themeisle.com/zerif-lite/blog/" tabIndex="0">Blog</a></li><li className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-align-bottom-left mega-menu-flyout mega-menu-item-18339" id="mega-menu-item-18339"><a className="mega-menu-link" href="https://themeisle.com/wordpress-themes/" tabIndex="0">More WordPress Themes</a></li></ul></div>	</nav>

          </div>
        </div>
        <div className=" home-header-wrap"><div className="header-content-wrap"><div className="container"><h1 className="intro-text">Make the best of your WordPress experience with Zerif Lite</h1><div className="buttons"><a href="https://demo.themeisle.com/zerif-lite/#focus" className="btn btn-primary custom-button red-btn">Features</a><a href="https://themeisle.com/themes/zerif-lite/#pricing-single" className="btn btn-primary custom-button green-btn">Download Zerif Lite</a></div></div></div><div className="clear" />
        </div>

      </header>
      <div id="content" className="site-content">


        <section className="focus" id="focus">


          <div className="container">
            <div className="section-header">
              <h2 className="dark-text">FEATURES</h2><div className="section-legend">What makes this single-page WordPress theme unique.</div>
            </div>

            <div className="row">

              <span id="ctup-ads-widget-6" className=""><div className="col-lg-3 col-sm-3 focus-box" data-scrollreveal="enter left after 0.15s over 1s" data-sr-init="true" data-sr-complete="true"><a href="https://demo.themeisle.com/zerif-lite/#" className="service-icon"><span className="sr-only">Go toPARALLAX EFFECT</span><i className="pixeden" style={{ background: 'url(https://res.cloudinary.com/vertigo-studio-srl/image/upload/v1451480997/parallax_lj3vbj.png) no-repeat center;width:100%; height:100%' }} /></a><h3 className="red-border-bottom">PARALLAX EFFECT</h3><p>Create memorable pages with smooth parallax effects that everyone loves. Also, use our lightweight content slider offering you smooth and great-looking animations.</p></div></span><span id="ctup-ads-widget-3" className=""><div className="col-lg-3 col-sm-3 focus-box" data-scrollreveal="enter left after 0.15s over 1s" data-sr-init="true" data-sr-complete="true"><a href="https://demo.themeisle.com/zerif-lite/#" className="service-icon"><span className="sr-only">Go toWOOCOMMERCE</span><i className="pixeden" style={{ background: 'url(https://demot-vertigostudio.netdna-ssl.com/zerif-lite/wp-content/uploads/sites/51/2015/05/woo.png) no-repeat center;width:100%; height:100%' }} /></a><h3 className="red-border-bottom">WOOCOMMERCE</h3><p>Build a front page for your WooCommerce store in a matter of minutes. The neat and clean presentation will help your sales and make your store accessible to everyone.
              </p></div></span><span id="ctup-ads-widget-4" className=""><div className="col-lg-3 col-sm-3 focus-box" data-scrollreveal="enter left after 0.15s over 1s" data-sr-init="true" data-sr-complete="true"><a href="https://demo.themeisle.com/zerif-lite/#" className="service-icon"><span className="sr-only">Go toCUSTOM CONTENT BLOCKS</span><i className="pixeden" style={{ background: 'url(https://demot-vertigostudio.netdna-ssl.com/zerif-lite/wp-content/uploads/sites/51/2015/05/ccc.png) no-repeat center;width:100%; height:100%' }} /></a><h3 className="red-border-bottom">CUSTOM CONTENT BLOCKS</h3><p>Showcase your team, products, clients, about info, testimonials, latest posts from the blog, contact form, additional calls to action. Everything translation ready.
              </p></div></span><span id="ctup-ads-widget-5" className=""><div className="col-lg-3 col-sm-3 focus-box" data-scrollreveal="enter left after 0.15s over 1s" data-sr-init="true" data-sr-complete="true"><a href="https://demo.themeisle.com/zerif-lite/#" className="service-icon"><span className="sr-only">Go toGO PRO FOR MORE FEATURES</span><i className="pixeden" style={{ background: 'url(https://demot-vertigostudio.netdna-ssl.com/zerif-lite/wp-content/uploads/sites/51/2015/05/ti-logo.png) no-repeat center;width:100%; height:100%' }} /></a><h3 className="red-border-bottom">GO PRO FOR MORE FEATURES</h3><p>Get new content blocks: pricing table, Google Maps, and more. Change the sections order, display each block exactly where you need it, customize the blocks with whatever colors you wish.</p></div></span>
            </div>

          </div>


        </section>

        <section className="separator-one" id="ribbon_bottom"><div className="color-overlay"><h3 className="container text" data-scrollreveal="enter left after 0s over 1s" data-sr-init="true" data-sr-complete="true">Check out this cool parallax scrolling effect. Plus, you can change the background image.</h3><div data-scrollreveal="enter right after 0s over 1s" data-sr-init="true" data-sr-complete="true"><a href="https://demo.themeisle.com/zerif-lite/#" className="btn btn-primary custom-button green-btn">button</a></div></div></section>
        <section className="about-us" id="aboutus">


          <div className="container">
            <div className="section-header">

              <h2 className="white-text">About</h2><div className="white-text section-legend">Use this section to showcase important details about your business.</div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-4 column zerif-rtl-big-title"><div className="big-intro" data-scrollreveal="enter left after 0s over 1s" data-sr-init="true" data-sr-complete="true">Everything you see here is responsive and mobile-friendly.</div></div><div className="col-lg-4 col-md-4 column zerif_about_us_center text_and_skills" data-scrollreveal="enter bottom after 0s over 1s" data-sr-init="true" data-sr-complete="true"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec massa enim. Aliquam viverra at est ullamcorper sollicitudin. Proin a leo sit amet nunc malesuada imperdiet pharetra ut eros.<br /><br />

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec massa enim. Aliquam viverra at est ullamcorper sollicitudin. Proin a leo sit amet nunc malesuada imperdiet pharetra ut eros. <br /><br />

Mauris vel nunc at ipsum fermentum pellentesque quis ut massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas non adipiscing massa. Sed ut fringilla sapien. Cras sollicitudin, lectus sed tincidunt cursus, magna lectus vehicula augue, a lobortis dui orci et est.</p></div><div className="col-lg-4 col-md-4 column zerif-rtl-skills ">

                <ul className="skills" data-scrollreveal="enter right after 0s over 1s" data-sr-init="true" data-sr-complete="true">
    <li className="skill skill_1"><div className="skill-count"><div style={{ display: 'inline', width: '64px', height: '200px' }}><canvas width="128" height="400" style={{ width: '64px', height: '200px' }} /><input role="presentation" type="text" id="your-skill-1" value="80" data-thickness=".2" className="skill1" tabIndex="-1" readOnly="readonly" style={{ width: '36px', height: '21px', position: 'absolute', verticalAlign: 'middle', marginTop: '21px', marginLeft: '-50px', border: '0px', background: 'none', fontStyle: 'normal', fontVariant: 'normal', fontWeight: 'bold', fontStretch: 'normal', fontSize: '12px', lineHeight: 'normal', fontFamily: 'Arial', textAlign: 'center', color: 'rgb(255, 255, 255)', padding: '0px', WebkitAppearance: 'none' }} /></div></div><div className="section-legend"><label htmlFor="your-skill-1">YOUR SKILL #1</label></div></li>
    <li className="skill skill_2"><div className="skill-count"><div style={{ display: 'inline', width: '64px', height: '200px' }}><canvas width="128" height="400" style={{ width: '64px', height: '200px' }} /><input role="presentation" type="text" id="your-skill-2" value="91" data-thickness=".2" className="skill2" tabIndex="-1" readOnly="readonly" style={{ width: '36px', height: '21px', position: 'absolute', verticalAlign: 'middle', marginTop: '21px', marginLeft: '-50px', border: '0px', background: 'none', fontStyle: 'normal', fontVariant: 'normal', fontWeight: 'bold', fontStretch: 'normal', fontSize: '12px', lineHeight: 'normal', fontFamily: 'Arial', textAlign: 'center', color: 'rgb(255, 255, 255)', padding: '0px', WebkitAppearance: 'none' }} /></div></div><div className="section-legend"><label htmlFor="your-skill-2">YOUR SKILL #2</label></div></li>

    <li className="skill skill_3"><div className="skill-count"><div style={{ display: 'inline', width: '64px', height: '200px' }}><canvas width="128" height="400" style={{ width: '64px', height: '200px' }} /><input role="presentation" type="text" id="your-skill-3" value="88" data-thickness=".2" className="skill3" tabIndex="-1" readOnly="readonly" style={{ width: '36px', height: '21px', position: 'absolute', verticalAlign: 'middle', marginTop: '21px', marginLeft: '-50px', border: '0px', background: 'none', fontStyle: 'normal', fontVariant: 'normal', fontWeight: 'bold', fontStretch: 'normal', fontSize: '12px', lineHeight: 'normal', fontFamily: 'Arial', textAlign: 'center', color: 'rgb(255, 255, 255)', padding: '0px', WebkitAppearance: 'none' }} /></div></div><div className="section-legend"><label htmlFor="your-skill-3">YOUR SKILL #3</label></div></li>

    <li className="skill skill_4"><div className="skill-count"><div style={{ display: 'inline', width: '64px', height: '200px' }}><canvas width="128" height="400" style={{ width: '64px', height: '200px' }} /><input role="presentation" type="text" id="your-skill-4" value="95" data-thickness=".2" className="skill4" tabIndex="-1" readOnly="readonly" style={{ width: '36px', height: '21px', position: 'absolute', verticalAlign: 'middle', marginTop: '21px', marginLeft: '-50px', border: '0px', background: 'none', fontStyle: 'normal', fontVariant: 'normal', fontWeight: 'bold', fontStretch: 'normal', fontSize: '12px', lineHeight: 'normal', fontFamily: 'Arial', textAlign: 'center', color: 'rgb(255, 255, 255)', padding: '0px', WebkitAppearance: 'none' }} /></div></div><div className="section-legend"><label htmlFor="your-skill-4">YOUR SKILL #4</label></div></li>
  </ul>
</div>
            </div>
            <div className="our-clients"><h5><span className="section-footer-title">OUR HAPPY CLIENTS</span></h5></div><div className="client-list"><div data-scrollreveal="enter right move 60px after 0.00s over 2.5s" data-sr-init="true" data-sr-complete="true"><span id="zerif_clients-widget-3"><a href="https://demo.themeisle.com/zerif-lite/#"><img src="./Zerif Lite - Just another Demos Sites site_files/Unknown.png" alt="Client" /></a></span><span id="zerif_clients-widget-4"><a href="https://demo.themeisle.com/zerif-lite/#"><img src="./Zerif Lite - Just another Demos Sites site_files/Unknown-7.png" alt="Client" /></a></span><span id="zerif_clients-widget-5"><a href="https://demo.themeisle.com/zerif-lite/#"><img src="./Zerif Lite - Just another Demos Sites site_files/Unknown-3.png" alt="Client" /></a></span><span id="zerif_clients-widget-6"><a href="https://demo.themeisle.com/zerif-lite/#"><img src="./Zerif Lite - Just another Demos Sites site_files/Unknown-4.png" alt="Client" /></a></span><span id="zerif_clients-widget-7"><a href="https://demo.themeisle.com/zerif-lite/#"><img src="./Zerif Lite - Just another Demos Sites site_files/Unknown-5.png" alt="Client" /></a></span><span id="zerif_clients-widget-8"><a href="https://demo.themeisle.com/zerif-lite/#"><img src="./Zerif Lite - Just another Demos Sites site_files/Unknown-6.png" alt="Client" /></a></span>
            </div>
            </div>
          </div>
        </section>
        <section className="our-team" id="team"><div className="container"><div className="section-header"><h2 className="dark-text">YOUR TEAM</h2><div className="section-legend">Prove that you have real people working for you, with some nice looking profile pictures and links to social media.</div></div><div className="row" data-scrollreveal="enter left after 0s over 0.1s" data-sr-init="true" data-sr-complete="true"><span id="zerif_team-widget-1" className=""><div className="col-lg-3 col-sm-3 team-box"><div className="team-member" tabIndex="0"><figure className="profile-pic"><img src="./Zerif Lite - Just another Demos Sites site_files/team1.png" alt="" /></figure><div className="member-details"><h3 className="dark-text red-border-bottom">ASHLEY SIMMONS</h3><div className="position">Project Manager</div></div><div className="social-icons"><ul><li><a href="https://demo.themeisle.com/zerif-lite/#" target="_self"><span className="sr-only">Facebook link</span><i className="fa fa-facebook" /></a></li><li><a href="https://demo.themeisle.com/zerif-lite/#" target="_self"><span className="sr-only">Twitter link</span><i className="fa fa-twitter" /></a></li><li><a href="https://demo.themeisle.com/zerif-lite/#" target="_self"><span className="sr-only">Behance link</span><i className="fa fa-behance" /></a></li><li><a href="https://demo.themeisle.com/zerif-lite/#" target="_self"><span className="sr-only">Dribble link</span><i className="fa fa-dribbble" /></a></li></ul></div><div className="details">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dapibus, eros at accumsan auctor, felis eros condimentum quam, non porttitor est urna vel neque</div></div></div></span><span id="zerif_team-widget-3" className=""><div className="col-lg-3 col-sm-3 team-box"><div className="team-member" tabIndex="0"><figure className="profile-pic"><img src="./Zerif Lite - Just another Demos Sites site_files/team2.png" alt="" /></figure><div className="member-details"><h3 className="dark-text red-border-bottom">TIMOTHY SPRAY</h3><div className="position">Art Director</div></div><div className="social-icons"><ul><li><a href="https://demo.themeisle.com/zerif-lite/#" target="_self"><span className="sr-only">Facebook link</span><i className="fa fa-facebook" /></a></li><li><a href="https://demo.themeisle.com/zerif-lite/#" target="_self"><span className="sr-only">Twitter link</span><i className="fa fa-twitter" /></a></li><li><a href="https://demo.themeisle.com/zerif-lite/#" target="_self"><span className="sr-only">Dribble link</span><i className="fa fa-dribbble" /></a></li><li><a href="https://demo.themeisle.com/zerif-lite/#" target="_self"><span className="sr-only">Linkedin link</span><i className="fa fa-linkedin" /></a></li></ul></div><div className="details">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dapibus, eros at accumsan auctor, felis eros condimentum quam, non porttitor est urna vel neque</div></div></div></span><span id="zerif_team-widget-4" className=""><div className="col-lg-3 col-sm-3 team-box"><div className="team-member" tabIndex="0"><figure className="profile-pic"><img src="./Zerif Lite - Just another Demos Sites site_files/team3.png" alt="" /></figure><div className="member-details"><h3 className="dark-text red-border-bottom">TONYA GARCIA</h3><div className="position">Account Manager</div></div><div className="social-icons"><ul><li><a href="https://demo.themeisle.com/zerif-lite/#" target="_self"><span className="sr-only">Facebook link</span><i className="fa fa-facebook" /></a></li><li><a href="https://demo.themeisle.com/zerif-lite/#" target="_self"><span className="sr-only">Behance link</span><i className="fa fa-behance" /></a></li><li><a href="https://demo.themeisle.com/zerif-lite/#" target="_self"><span className="sr-only">Dribble link</span><i className="fa fa-dribbble" /></a></li><li><a href="https://demo.themeisle.com/zerif-lite/#" target="_self"><span className="sr-only">Linkedin link</span><i className="fa fa-linkedin" /></a></li></ul></div><div className="details">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dapibus, eros at accumsan auctor, felis eros condimentum quam, non porttitor est urna vel neque</div></div></div></span><span id="zerif_team-widget-5" className=""><div className="col-lg-3 col-sm-3 team-box"><div className="team-member" tabIndex="0"><figure className="profile-pic"><img src="./Zerif Lite - Just another Demos Sites site_files/team4.png" alt="" /></figure><div className="member-details"><h3 className="dark-text red-border-bottom">JASON LANE</h3><div className="position">Business Development</div></div><div className="social-icons"><ul><li><a href="https://demo.themeisle.com/zerif-lite/#" target="_self"><span className="sr-only">Twitter link</span><i className="fa fa-twitter" /></a></li><li><a href="https://demo.themeisle.com/zerif-lite/#" target="_self"><span className="sr-only">Behance link</span><i className="fa fa-behance" /></a></li><li><a href="https://demo.themeisle.com/zerif-lite/#" target="_self"><span className="sr-only">Dribble link</span><i className="fa fa-dribbble" /></a></li><li><a href="https://demo.themeisle.com/zerif-lite/#" target="_self"><span className="sr-only">Linkedin link</span><i className="fa fa-linkedin" /></a></li></ul></div><div className="details">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dapibus, eros at accumsan auctor, felis eros condimentum quam, non porttitor est urna vel neque</div></div></div></span></div> </div></section>
        <section className="testimonial" id="testimonials">
          <div className="container"><div className="section-header">
            <h2 className="white-text">Testimonials</h2>
            <h6 className="white-text section-legend">Get testimonials from your clients and then display them here.</h6>
          </div>
            <div className="row" data-scrollreveal="enter right after 0s over 1s" data-sr-init="true" data-sr-complete="true">
            <div className="col-md-12"><div id="client-feedbacks" className="owl-carousel owl-theme  ">
                <span id="zerif_testim-widget-1" className="feedback-box">
                <div className="message">Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur nec sem vel sapien venenatis mattis non vitae augue. Nullam congue commodo lorem vitae facilisis. Suspendisse malesuada id turpis interdum dictum.</div>
                <div className="client"><div className="quote red-text">
                    <i className="fa fa-quote-left" />
                  </div>
                    <div className="client-info">
                  <a target="_blank" className="client-name" href="https://demo.themeisle.com/zerif-lite/#">Dana Lorem</a>
                </div>
                <div className="client-image hidden-xs">
                    <img src="./Zerif Lite - Just another Demos Sites site_files/testimonial1.jpg" alt="" />
                  </div>
                  </div>
              </span>
                <span id="zerif_testim-widget-3" className="feedback-box">
                <div className="message">Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur nec sem vel sapien venenatis mattis non vitae augue. Nullam congue commodo lorem vitae facilisis. Suspendisse malesuada id turpis interdum dictum.
                </div>
                <div className="client">
                    <div className="quote red-text">
                    <i className="fa fa-quote-left" />
                  </div>
                    <div className="client-info">
                    <a target="_blank" className="client-name" href="https://demo.themeisle.com/zerif-lite/#">Linda Guthrie</a>
                  </div>
                    <div className="client-image hidden-xs">
                    <img src="./Zerif Lite - Just another Demos Sites site_files/testimonial2.jpg" alt="" />
                  </div>
                  </div>
              </span>
                <span id="zerif_testim-widget-4" className="feedback-box">
                <div className="message">Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur nec sem vel sapien venenatis mattis non vitae augue. Nullam congue commodo lorem vitae facilisis. Suspendisse malesuada id turpis interdum dictum.</div>
                <div className="client">
                    <div className="quote red-text">
                    <i className="fa fa-quote-left" />
                  </div>
                    <div className="client-info">
                    <a target="_blank" className="client-name" href="https://demo.themeisle.com/zerif-lite/#">Cynthia Henry</a>
                  </div>
                    <div className="client-image hidden-xs">
                    <img src="./Zerif Lite - Just another Demos Sites site_files/testimonial3.jpg" alt="" />
                  </div>
                  </div>
              </span>
              </div>
              </div>
          </div>
          </div>
        </section>
        <section className="purchase-now" id="ribbon_right">
          <div className="container">
            <div className="row">
              <div className="col-md-9" data-scrollreveal="enter left after 0s over 1s" data-sr-init="true" data-sr-complete="true">
                <h3 className="white-text">Use these ribbons to display calls to action mid-page.</h3>
              </div>
              <div className="col-md-3" data-scrollreveal="enter right after 0s over 1s" data-sr-init="true" data-sr-complete="true">
                <a href="https://www.codeinwp.com/blog/top-custom-post-types-plugins-for-wordpress/" className="btn btn-primary custom-button red-btn">View article</a>
              </div>
            </div>
          </div>
        </section>
        <section className="latest-news" id="latestnews">
          <div className="container"><div className="section-header">
            <h2 className="dark-text">Blog / Latest News</h2>
            <div className="dark-text section-legend">Your latest posts displayed inside a nice slider. You can customize what the slider looks like.</div>
          </div>
          <div className="clear" />
            <div id="carousel-homepage-latestnews" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner" role="listbox">
                <div className="item active" role="option" style={{ height: '396px' }}>
                <div className="col-sm-3 latestnews-box">
                    <div className="latestnews-img">
                    <a className="latestnews-img-a" href="https://demo.themeisle.com/zerif-lite/2017/01/30/wordpress-org-vs-wordpress-com/" title="WordPress.org vs. WordPress.com">
                        <img width="250" height="250" src="./Zerif Lite - Just another Demos Sites site_files/1j5JfNg-250x250.jpg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="" srcSet="https://demot-vertigostudio.netdna-ssl.com/zerif-lite/wp-content/uploads/sites/51/2016/01/1j5JfNg-250x250.jpg 250w, https://demot-vertigostudio.netdna-ssl.com/zerif-lite/wp-content/uploads/sites/51/2016/01/1j5JfNg-150x150.jpg 150w, https://demot-vertigostudio.netdna-ssl.com/zerif-lite/wp-content/uploads/sites/51/2016/01/1j5JfNg-180x180.jpg 180w, https://demot-vertigostudio.netdna-ssl.com/zerif-lite/wp-content/uploads/sites/51/2016/01/1j5JfNg-300x300.jpg 300w, https://demot-vertigostudio.netdna-ssl.com/zerif-lite/wp-content/uploads/sites/51/2016/01/1j5JfNg-600x600.jpg 600w, https://demot-vertigostudio.netdna-ssl.com/zerif-lite/wp-content/uploads/sites/51/2016/01/1j5JfNg-174x174.jpg 174w" sizes="(max-width: 250px) 100vw, 250px" />
                      </a>
                  </div>
                    <div className="latesnews-content">
                    <h3 className="latestnews-title">
                        <a href="https://demo.themeisle.com/zerif-lite/2017/01/30/wordpress-org-vs-wordpress-com/" title="WordPress.org vs. WordPress.com">WordPress.org vs. WordPress.com</a>
                      </h3>
                    <p>WordPress is known as being the most popular blogging platform in the world. But, apart from blogs, it can create </p>
                  </div>
                  </div>
                <div className="col-sm-3 latestnews-box">
                    <div className="latestnews-img">
                    <a className="latestnews-img-a" href="https://demo.themeisle.com/zerif-lite/2015/05/06/built-in-contact-form/" title="Built-in Contact Form">
                        <img width="1165" height="583" src="./Zerif Lite - Just another Demos Sites site_files/contact_xmtyd2.jpg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="" />
                      </a>
                  </div>
                    <div className="latesnews-content">
                    <h3 className="latestnews-title">
                        <a href="https://demo.themeisle.com/zerif-lite/2015/05/06/built-in-contact-form/" title="Built-in Contact Form">Built-in Contact Form</a>
                      </h3>
                    <p>It’s responsive, easy to use, and will encourage your visitors to reach out to you directly.</p>
                  </div></div><div className="col-sm-3 latestnews-box"><div className="latestnews-img"><a className="latestnews-img-a" href="https://demo.themeisle.com/zerif-lite/2015/05/05/zerif-lite-is-a-responsive-theme/" title="Zerif Lite Is Mobile-Friendly and Responsive"><img width="600" height="360" src="./Zerif Lite - Just another Demos Sites site_files/ToolShed_drib_big-e1406196790312_skjsre.jpg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="" /></a></div><div className="latesnews-content"><h3 className="latestnews-title"><a href="https://demo.themeisle.com/zerif-lite/2015/05/05/zerif-lite-is-a-responsive-theme/" title="Zerif Lite Is Mobile-Friendly and Responsive">Zerif Lite Is Mobile-Friendly and Responsive</a></h3><p>Go ahead and try resizing the browser window. Things are going to continue looking great!</p>
                </div></div><div className="col-sm-3 latestnews-box"><div className="latestnews-img"><a className="latestnews-img-a" href="https://demo.themeisle.com/zerif-lite/2015/05/04/regular-updates/" title="Regular Updates"><img width="800" height="600" src="./Zerif Lite - Just another Demos Sites site_files/chapter4-800_einxp5.png" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="" /></a></div><div className="latesnews-content"><h3 className="latestnews-title"><a href="https://demo.themeisle.com/zerif-lite/2015/05/04/regular-updates/" title="Regular Updates">Regular Updates</a></h3><p>Nullam posuere, tellus sed eleifend ultricies, magna ligula dictum felis, id pellentesque lectus libero tempus lectus.</p>
                  </div></div><div className="clear" /></div><div className="item" style={{ height: '396px' }}><div className="col-sm-3 latestnews-box"><div className="latestnews-img"><a className="latestnews-img-a" href="https://demo.themeisle.com/zerif-lite/2014/08/25/hello-world-2/" title="Fast &amp; Simple Installation"><img width="800" height="600" src="./Zerif Lite - Just another Demos Sites site_files/dribble_app_icon_uvla2m.png" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="" /></a></div><div className="latesnews-content"><h3 className="latestnews-title"><a href="https://demo.themeisle.com/zerif-lite/2014/08/25/hello-world-2/" title="Fast &amp; Simple Installation">Fast &amp; Simple Installation</a></h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at placerat lacus, vitae feugiat erat.</p>
              </div></div><div className="clear" /></div></div><a className="left carousel-control" href="https://demo.themeisle.com/zerif-lite/#carousel-homepage-latestnews" role="button" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
            </a><a className="right carousel-control" href="https://demo.themeisle.com/zerif-lite/#carousel-homepage-latestnews" role="button" data-slide="next">
              <span className="glyphicon glyphicon-chevron-right" aria-hidden="true" />
                  <span className="sr-only">Next</span>
                </a></div></div></section>	<section className="contact-us" id="contact">
          <div className="container">
                <div className="section-header">

              <h2 className="white-text">Get in touch </h2><div className="white-text section-legend">Big and mobile-optimized contact form integrated. All fields are customizablee. </div>	</div>
                <div className="row">
              <div className="pirate_forms_wrap">
                    <form method="post" encType="application/x-www-form-urlencoded" action="https://demo.themeisle.com/zerif-lite/" className="pirate_forms  form_honeypot-on pirate_forms_from_widget-on wordpress-nonce-on pirate-forms-contact-name-on pirate-forms-contact-email-on pirate-forms-contact-subject-on pirate-forms-contact-message-on pirate-forms-contact-submit-on contact-referrer-on">
                  <div className="pirate_forms_three_inputs_wrap"><div className="col-lg-4 col-sm-4 form_field_wrap"><input type="text" id="pirate-forms-contact-name" name="pirate-forms-contact-name" className="form-control input" placeholder="Your Name" required="" oninvalid="this.setCustomValidity(&#39;Enter your name&#39;)" onChange="this.setCustomValidity(&#39;&#39;)" value="" /></div><div className="col-lg-4 col-sm-4 form_field_wrap"><input type="email" id="pirate-forms-contact-email" name="pirate-forms-contact-email" className="form-control input" placeholder="Your Email" required="" oninvalid="this.setCustomValidity(&#39;Enter a valid email&#39;)" onChange="this.setCustomValidity(&#39;&#39;)" value="" /></div><div className="col-lg-4 col-sm-4 form_field_wrap"><input type="text" id="pirate-forms-contact-subject" name="pirate-forms-contact-subject" className="form-control input" placeholder="Subject" required="" oninvalid="this.setCustomValidity(&#39;Please enter a subject&#39;)" onChange="this.setCustomValidity(&#39;&#39;)" value="" /></div></div><div className="col-lg-12 col-sm-12 form_field_wrap"><textarea rows="5" cols="30" id="pirate-forms-contact-message" name="pirate-forms-contact-message" className="form-control input" placeholder="Your message" required="" oninvalid="this.setCustomValidity(&#39;Enter your question or comment&#39;)" onChange="this.setCustomValidity(&#39;&#39;)" /></div><div className="col-xs-12 col-sm-6 col-lg-6 form_field_wrap contact_submit_wrap"><button type="submit" id="pirate-forms-contact-submit" name="pirate-forms-contact-submit" className="btn btn-primary custom-button red-btn pirate-forms-submit-button" placeholder="">Send Message</button></div>
                  <div className="form_field_wrap hidden" style={{ display: 'none' }}>
                        <input type="text" id="form_honeypot" name="honeypot" className="" placeholder="" value="" />
                      </div>
                  <input type="hidden" id="pirate_forms_from_widget" name="pirate_forms_from_widget" className="" placeholder="" value="0" />
                  <input type="hidden" id="wordpress-nonce" name="wordpress-nonce" className="" placeholder="" value="c87681a1a3" />
                  <input type="hidden" id="contact-referrer" name="contact-referrer" className="" placeholder="" value="https://demo.themeisle.com/zerif-lite/wp-admin/index.php?page=custom-dashboard" />
                </form>	<div className="pirate_forms_clearfix" />
                  </div>
            </div>
              </div></section>

      </div>
      <footer id="footer" itemScope="itemscope" itemType="http://schema.org/WPFooter">
        <div className="container">
          <div className="col-md-3 company-details"><div className="icon-top red-text"><img src="./Zerif Lite - Just another Demos Sites site_files/map25-redish.png" alt="" /></div><div className="zerif-footer-address">San Francisco - Adress - 18 California Street 1100.</div></div><div className="col-md-3 company-details"><div className="icon-top green-text"><img src="./Zerif Lite - Just another Demos Sites site_files/envelope4-green.png" alt="" /></div><div className="zerif-footer-email">friends@themeisle.com</div></div><div className="col-md-3 company-details"><div className="icon-top blue-text"><img src="./Zerif Lite - Just another Demos Sites site_files/telephone65-blue.png" alt="" /></div><div className="zerif-footer-phone">0 332 548 987</div></div><div className="col-md-3 copyright"><ul className="social"><li id="facebook"><a target="_blank" href="https://demo.themeisle.com/zerif-lite/#"><span className="sr-only">Facebook link</span> <i className="fa fa-facebook" /></a></li><li id="twitter"><a target="_blank" href="https://demo.themeisle.com/zerif-lite/#"><span className="sr-only">Twitter link</span> <i className="fa fa-twitter" /></a></li><li id="linkedin"><a target="_blank" href="https://demo.themeisle.com/zerif-lite/#"><span className="sr-only">Linkedin link</span> <i className="fa fa-linkedin" /></a></li><li id="behance"><a target="_blank" href="https://demo.themeisle.com/zerif-lite/#"><span className="sr-only">Behance link</span> <i className="fa fa-behance" /></a></li><li id="dribbble"><a target="_blank" href="https://demo.themeisle.com/zerif-lite/#"><span className="sr-only">Dribble link</span> <i className="fa fa-dribbble" /></a></li><li id="instagram"><a target="_blank" href="https://demo.themeisle.com/zerif-lite/#"><span className="sr-only">Instagram link</span> <i className="fa fa-instagram" /></a></li></ul><p id="zerif-copyright">©Themeisle</p><div className="zerif-copyright-box"><a className="zerif-copyright" rel="nofollow">Zerif Lite </a>developed by <a className="zerif-copyright" href="https://themeisle.com/" target="_blank" rel="nofollow"> ThemeIsle</a></div></div>	</div>
      </footer>
    </div>
  </div>
);

export default Home;
