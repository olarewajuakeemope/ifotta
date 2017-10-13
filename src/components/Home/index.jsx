import React, { Component } from 'react';
import { Link } from 'react-router';
import $ from 'jquery';
import ContactForm from './ContactForm';
import Hire from '../Hire';
import Footer from '../Footer';
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

// import testimonial1 from '../../resources/css/images/testimonial1.jpg';
// import testimonial2 from '../../resources/css/images/testimonial2.jpg';
// import testimonial3 from '../../resources/css/images/testimonial3.jpg';

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
            <section className="focus">
              <div className="container" style={{ minHeight: '76px' }}>
                <div className="section-header">
                  <div className="container">
                    <div>
                      <img width="500" height="32" src={logo} className="custom-logo" alt="Ifotta logo" itemProp="logo" />
                    </div>
                    <div className="buttons">
                      <Hire color="ifotta-blue-btn" />
                      <a href="https://ifotta.workable.com" target="_blank" rel="noopener noreferrer" className="btn custom-button ifotta-yellow-btn white-link">Apply as a Developer</a>
                      <Link to="academy" className="btn custom-button ifotta-blue-btn white-link">Ifotta Academy</Link>
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
                      <Link to="/" className="service-icon">
                        <span className="sr-only">
                      Hire A Developer
                        </span>
                        <i className="pixeden" style={{ background: `url(${hireLogo}) no-repeat center`, width: '100%', height: '100%' }} />
                      </Link>
                      <h3 className="blue-border-bottom ifotta-white-text">
                    HIRE A DEVELOPER
                      </h3>
                      <p className="text-left service-content-text text-justify">At Ifotta we have experienced genius level software developer that you can hire as part of your team. The developer will work with your team to fulfill your requirement from our offices or if you choose to hire them full time as a permanent staff.</p>
                    </div>
                  </span>
                  <span id="ctup-ads-widget-4" className="">
                    <div className="col-lg-4 col-md-6 col-sm-12 focus-box service-container">
                      <Link to="/" className="service-icon">
                        <span className="sr-only">
                      Software Development/Projects
                        </span>
                        <i className="pixeden" style={{ background: `url(${applyLogo}) no-repeat center`, width: '100%', height: '100%' }} />
                      </Link>
                      <h3 className="ifotta-white-text">
                    SOFTWARE DEVELOPMENT / PROJECTS
                      </h3>
                      <p className="text-left services-margin-1 service-content-text text-justify">Looking for a development team to build or update your software? At Ifotta we can provide software development services on various platforms and deliver a complete software/solution while you do what you do best which is running your business.</p>
                    </div>
                  </span>
                  <span id="ctup-ads-widget-5" className="">
                    <div className="col-lg-4 col-md-3 col-sm-12 focus-box service-container">
                      <Link to="/academy" className="service-icon">
                        <span className="sr-only">Ifotta Academy</span>
                        <i className="pixeden" style={{ background: `url(${academyLogo}) no-repeat center`, width: '100%', height: '100%' }} />
                      </Link>
                      <h3 className="blue-border-bottom ifotta-white-text">
                    IFOTTA ACADEMY
                      </h3>
                      <p className="text-left service-content-text text-justify">We have a training academy that provide training in various ares of software development and coding. We have training programs that make you a professional from scratch or short classes that will allow you update your skills if you are a It professional.</p>
                    </div>
                  </span>
                </div>
              </div>
            </section>

            <section className="separator-one bg-white" id="ribbon_bottom">
              <div className="color-overlay">
                <h3 className="container text hire-call-to-action-text ifotta-blue-text">Build your coding skills and get yourself ready for the labour in a matter of weeks.</h3>
                <div className="hire-call-to-action-button-container">
                  <Link to="academy" className="btn custom-button ifotta-blue-btn white-link">Ifotta Academy</Link>
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
            <section className="contact-us" id="contact" style={{ backgroundColor: 'rgba(31, 136, 193, 0.8)' }}>
              <div className="container">
                <div className="section-header">
                  <h2 className="white-text">Get in touch </h2>
                  <div className="white-text section-legend">Big and mobile-optimized contact form integrated. All fields are customizablee. </div>
                </div>
                <ContactForm />
              </div>
            </section>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}
export default Home;
