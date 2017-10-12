import React, { Component } from 'react';
import { Link } from 'react-router';
import $ from 'jquery';
import ContactForm from './ContactForm';
import Hire from '../Hire';
import AcademyModal from '../AcademyModal';
import logo from '../../resources/images/logo.png';
import hireLogo from '../../resources/images/developer-hire.png';
import applyLogo from '../../resources/images/developer-apply.png';
import academyLogo from '../../resources/images/developer-academy.png';
import unknown from '../../resources/css/Unknown.png';
import unknown3 from '../../resources/css/Unknown-3.png';
import unknown4 from '../../resources/css/Unknown-4.png';
import unknown5 from '../../resources/css/Unknown-5.png';
import unknown6 from '../../resources/css/Unknown-6.png';
import unknown7 from '../../resources/css/Unknown-7.png';

// import waterfrontImage from '../../resources/images/ifotta-waterfront.jpg';

import testimonial1 from '../../resources/css/images/testimonial1.jpg';
import testimonial2 from '../../resources/css/images/testimonial2.jpg';
import testimonial3 from '../../resources/css/images/testimonial3.jpg';

import footer1 from '../../resources/css/map25-redish.png';
import footer2 from '../../resources/css/envelope4-green.png';
import footer3 from '../../resources/css/telephone65-blue.png';

require('jquery-knob');

class Home extends Component {
  componentDidMount() {
    $(() => {
      $('.skill1').knob({

        max: 100,

        width: 64,

        readOnly: true,

        inputColor: ' #FFFFFF ',

        bgColor: ' #222222 ',

        fgColor: ' #e96656 ',

      });

      $('.skill2').knob({

        max: 100,

        width: 64,

        readOnly: true,

        inputColor: ' #FFFFFF ',

        bgColor: ' #222222 ',

        fgColor: ' #34d293 ',

      });

      $('.skill3').knob({

        max: 100,

        width: 64,

        readOnly: true,

        inputColor: ' #FFFFFF ',

        bgColor: ' #222222 ',

        fgColor: ' #3ab0e2 ',

      });

      $('.skill4').knob({

        max: 100,

        width: 64,

        readOnly: true,

        inputColor: ' #FFFFFF ',

        bgColor: ' #222222 ',

        fgColor: ' #E7AC44 ',

      });
    });
  }
  render() {
    return (
      <div id="mobilebgfix">
        <div className="mobile-bg-fix-img-wrap">
          <div className="mobile-bg-fix-img" />
        </div>
        <div className="mobile-bg-fix-whole-site">
          <div id="content" className="site-content">
            <section className="focus" id="focus">
              <div className="container" style={{ minHeight: '76px' }}>
                <div className="section-header">
                  <div className="container">
                    <div>
                      <img width="500" height="32" src={logo} className="custom-logo" alt="Ifotta logo" itemProp="logo" />
                    </div>
                    <div className="buttons">
                      <Hire color="ifotta-blue-btn" />
                      <a href="https://ifotta.workable.com" target="_blank" rel="noopener noreferrer" className="btn custom-button ifotta-yellow-btn white-link">Apply as a Developer</a>
                      <AcademyModal color="ifotta-blue-btn" />
                    </div>
                    <div className="clear" />
                  </div>
                </div>
              </div>
            </section>
            <section style={{ backgroundColor: '#1F88C1' }} className="focus" id="focus">
              <div className="container">
                <div className="section-header">
                  <h2 className="ifotta-white-text">OUR SERVICES</h2>
                </div>
                <div className="row">
                  <span id="ctup-ads-widget-3" className="">
                    <div className="col-lg-4 col-md-3 col-sm-12 focus-box service-container">
                      <Link to="/about" className="service-icon">
                        <span className="sr-only">
                      Hire A Developer
                        </span>
                        <i className="pixeden" style={{ background: `url(${hireLogo}) no-repeat center`, width: '100%', height: '100%' }} />
                      </Link>
                      <h3 className="blue-border-bottom ifotta-white-text">
                    HIRE A DEVELOPER
                      </h3>
                      <p className="text-justify text-left service-content-text">At Ifotta we have experienced genius level software developer that you can hire as part of your team. The developer will work with your team to fulfill your requirement from our offices or if you choose to hire them full time as a permanent staff.</p>
                    </div>
                  </span>
                  <span id="ctup-ads-widget-4" className="">
                    <div className="col-lg-4 col-md-6 col-sm-12 focus-box service-container">
                      <Link to="/about" className="service-icon">
                        <span className="sr-only">
                      Software Development/Projects
                        </span>
                        <i className="pixeden" style={{ background: `url(${applyLogo}) no-repeat center`, width: '100%', height: '100%' }} />
                      </Link>
                      <h3 className="ifotta-white-text">
                    SOFTWARE DEVELOPMENT/PROJECTS
                      </h3>
                      <p className="text-justify text-left services-margin-1 service-content-text">Looking for a development team to build or update your software? At Ifotta we can provide software development services on various platforms and deliver a complete software/solution while you do what you do best which is running your business.</p>
                    </div>
                  </span>
                  <span id="ctup-ads-widget-5" className="">
                    <div className="col-lg-4 col-md-3 col-sm-12 focus-box service-container">
                      <Link to="/about" className="service-icon">
                        <span className="sr-only">Ifotta Academy</span>
                        <i className="pixeden" style={{ background: `url(${academyLogo}) no-repeat center`, width: '100%', height: '100%' }} />
                      </Link>
                      <h3 className="blue-border-bottom ifotta-white-text">
                    IFOTTA ACADEMY
                      </h3>
                      <p className="text-justify text-left service-content-text">We have a training academy that provide training in various ares of software development and coding. We have training programs that make you a professional from scratch or short classes that will allow you update your skills if you are a It professional.</p>
                    </div>
                  </span>
                </div>
              </div>
            </section>

            <section className="separator-one" id="ribbon_bottom" style={{ background: 'linear-gradient( rgba(50, 150, 255, 0.45),rgba(50, 150, 255, 0.45) )' }}>
              <div className="color-overlay">
                <h3 className="container text hire-call-to-action-text">Build your coding skills and get yourself ready for the labour in a matter of weeks.</h3>
                <div className="hire-call-to-action-button-container">
                  <AcademyModal color="ifotta-blue-btn" />
                </div>
              </div>
            </section>

            <section className="about-us" id="aboutus">
              <div className="container">
                <div className="section-header">
                  <h2 className="white-text">About</h2><div className="white-text section-legend">Ifotta is an outsourcing developer company for Nigerian companies.</div>
                </div>
                <div className="row">
                  <div className="col-lg-4 col-md-4 column zerif-rtl-big-title">
                    <div className="big-intro about-big-intro">Everything ifotta app is responsive and mobile-friendly.</div>
                  </div>
                  <div className="col-lg-4 col-md-4 column zerif_about_us_center text_and_skills">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec massa enim. Aliquam viverra at est ullamcorper sollicitudin. Proin a leo sit amet nunc malesuada imperdiet pharetra ut eros.<br />
                      <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec massa enim. Aliquam viverra at est ullamcorper sollicitudin. Proin a leo sit amet nunc malesuada imperdiet pharetra ut eros. <br />
                      <br />Mauris vel nunc at ipsum fermentum pellentesque quis ut massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas non adipiscing massa. Sed ut fringilla sapien. Cras sollicitudin, lectus sed tincidunt cursus, magna lectus vehicula augue, a lobortis dui orci et est.
                    </p>
                  </div>
                  <div className="col-lg-4 col-md-4 column zerif-rtl-skills ">
                    <ul className="skills">
                      <li className="skill skill_1">
                        <div className="skill-count">
                          <div style={{ display: 'inline', width: '64px', height: '200px' }}>
                            <canvas width="128" height="400" style={{ width: '64px', height: '200px' }} />
                            <input type="text" id="your-skill-1" value="80" data-thickness=".2" className="skill1" tabIndex="-1" readOnly="readonly" style={{ width: '36px', height: '21px', position: 'absolute', verticalAlign: 'middle', marginTop: '21px', marginLeft: '-50px', border: '0px', background: 'none', fontStyle: 'normal', fontVariant: 'normal', fontWeight: 'bold', fontStretch: 'normal', fontSize: '12px', lineHeight: 'normal', fontFamily: 'Arial', textAlign: 'center', color: 'rgb(255, 255, 255)', padding: '0px', WebkitAppearance: 'none' }} />
                          </div>
                        </div>
                        <div className="section-legend">
                          <label htmlFor="your-skill-1">YOUR SKILL #1</label>
                        </div>
                      </li>
                      <li className="skill skill_2">
                        <div className="skill-count">
                          <div style={{ display: 'inline', width: '64px', height: '200px' }}>
                            <canvas width="128" height="400" style={{ width: '64px', height: '200px' }} />
                            <input type="text" id="your-skill-2" value="91" data-thickness=".2" className="skill2" tabIndex="-1" readOnly="readonly" style={{ width: '36px', height: '21px', position: 'absolute', verticalAlign: 'middle', marginTop: '21px', marginLeft: '-50px', border: '0px', background: 'none', fontStyle: 'normal', fontVariant: 'normal', fontWeight: 'bold', fontStretch: 'normal', fontSize: '12px', lineHeight: 'normal', fontFamily: 'Arial', textAlign: 'center', color: 'rgb(255, 255, 255)', padding: '0px', WebkitAppearance: 'none' }} />
                          </div>
                        </div>
                        <div className="section-legend">
                          <label htmlFor="your-skill-2">YOUR SKILL #2</label>
                        </div>
                      </li>
                      <li className="skill skill_3">
                        <div className="skill-count">
                          <div style={{ display: 'inline', width: '64px', height: '200px' }}>
                            <canvas width="128" height="400" style={{ width: '64px', height: '200px' }} />
                            <input type="text" id="your-skill-3" value="88" data-thickness=".2" className="skill3" tabIndex="-1" readOnly="readonly" style={{ width: '36px', height: '21px', position: 'absolute', verticalAlign: 'middle', marginTop: '21px', marginLeft: '-50px', border: '0px', background: 'none', fontStyle: 'normal', fontVariant: 'normal', fontWeight: 'bold', fontStretch: 'normal', fontSize: '12px', lineHeight: 'normal', fontFamily: 'Arial', textAlign: 'center', color: 'rgb(255, 255, 255)', padding: '0px', WebkitAppearance: 'none' }} />
                          </div>
                        </div>
                        <div className="section-legend">
                          <label htmlFor="your-skill-3">YOUR SKILL #3</label>
                        </div>
                      </li>
                      <li className="skill skill_4">
                        <div className="skill-count">
                          <div style={{ display: 'inline', width: '64px', height: '200px' }}>
                            <canvas width="128" height="400" style={{ width: '64px', height: '200px' }} />
                            <input type="text" id="your-skill-4" value="95" data-thickness=".2" className="skill4" tabIndex="-1" readOnly="readonly" style={{ width: '36px', height: '21px', position: 'absolute', verticalAlign: 'middle', marginTop: '21px', marginLeft: '-50px', border: '0px', background: 'none', fontStyle: 'normal', fontVariant: 'normal', fontWeight: 'bold', fontStretch: 'normal', fontSize: '12px', lineHeight: 'normal', fontFamily: 'Arial', textAlign: 'center', color: 'rgb(255, 255, 255)', padding: '0px', WebkitAppearance: 'none' }} />
                          </div>
                        </div>
                        <div className="section-legend">
                          <label htmlFor="your-skill-4">YOUR SKILL #4</label>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="our-clients">
                  <h5><span className="section-footer-title">OUR HAPPY CLIENTS</span></h5>
                </div>
                <div className="client-list">
                  <div className="client-list-item">
                    <span id="zerif_clients-widget-3">
                      <a target="_blank" rel="noopener noreferrer" href="https://google.com#">
                        <img src={unknown} alt="Client" />
                      </a>
                    </span>
                    <span id="zerif_clients-widget-4">
                      <a target="_blank" rel="noopener noreferrer" href="https://google.com#">
                        <img src={unknown7} alt="Client" />
                      </a>
                    </span>
                    <span id="zerif_clients-widget-5">
                      <a target="_blank" rel="noopener noreferrer" href="https://google.com#">
                        <img src={unknown3} alt="Client" />
                      </a>
                    </span>
                    <span id="zerif_clients-widget-6">
                      <a target="_blank" rel="noopener noreferrer" href="https://google.com#">
                        <img src={unknown4} alt="Client" />
                      </a>
                    </span>
                    <span id="zerif_clients-widget-7">
                      <a target="_blank" rel="noopener noreferrer" href="https://google.com#">
                        <img src={unknown5} alt="Client" />
                      </a>
                    </span>
                    <span id="zerif_clients-widget-8">
                      <a target="_blank" rel="noopener noreferrer" href="https://google.com#">
                        <img src={unknown6} alt="Client" />
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </section>
            <section className="testimonial" id="testimonials">
              <div className="container">
                <div className="section-header">
                  <h2 className="white-text">Testimonials</h2>
                  <h6 className="white-text section-legend">See what our happy clients are saying about our solutions.</h6>
                </div>
                <div className="row testimonial-items">
                  <div className="col-md-12"><div id="client-feedbacks" className="owl-carousel owl-theme  ">
                    <span id="zerif_testim-widget-1" className="feedback-box">
                      <div className="message">Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur nec sem vel sapien venenatis mattis non vitae augue. Nullam congue commodo lorem vitae facilisis. Suspendisse malesuada id turpis interdum dictum.</div>
                      <div className="client">
                        <div className="quote red-text">
                          <i className="fa fa-quote-left" />
                        </div>
                        <div className="client-info">
                          <a target="_blank" rel="noopener noreferrer" className="client-name" href="https://google.com">Dana Lorem</a>
                        </div>
                        <div className="client-image hidden-xs">
                          <img src={testimonial1} alt="" />
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
                          <a target="_blank" rel="noopener noreferrer" className="client-name" href="https://google.com">Linda Guthrie</a>
                        </div>
                        <div className="client-image hidden-xs">
                          <img src={testimonial2} alt="" />
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
                          <a target="_blank" rel="noopener noreferrer" className="client-name" href="https://google.com">Cynthia Henry</a>
                        </div>
                        <div className="client-image hidden-xs">
                          <img src={testimonial3} alt="" />
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
                  <div className="col-md-9 hire-call-to-action-text">
                    <h3 className="white-text">What are you waiting for? Get in touch Now</h3>
                  </div>
                  <div className="col-md-3 hire-call-to-action-button-container">
                    <Hire color="red-btn" />
                  </div>
                </div>
              </div>
            </section>
            <section className="contact-us" id="contact">
              <div className="container">
                <div className="section-header">
                  <h2 className="white-text">Get in touch </h2>
                  <div className="white-text section-legend">Big and mobile-optimized contact form integrated. All fields are customizablee. </div>
                </div>
                <ContactForm />
              </div>
            </section>
          </div>
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
                <div className="zerif-footer-phone">0 332 548 987</div>
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
        </div>
      </div>
    );
  }
}
export default Home;
