import React, { Component } from 'react';
import { Link } from 'react-router';
import Hire from '../Hire';
import AcademyModal from '../AcademyModal';
import Footer from '../Footer';
import bgLaptop from '../../resources/img/bg-laptop.jpg';
import whiteLogo from '../../resources/img/ifotta-logo-white.png';
import hireLogo from '../../resources/img/ifottadeveloper.png';
import iALogo from '../../resources/img/ifotta-academy.png';
import softwareLogo from '../../resources/img/ifottasoftware.png';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>

        <header id="home-header" className="header fadeout header-inverse pb-0 h-fullscreen" style={{ backgroundImage: `url(${bgLaptop})` }}>
          <div className="header-overlay opacity-90" style={{ backgroundColor: '#1F88C1' }} />
          <canvas className="constellation" />

          <div className="container ifotta-margin-top-negative-6-25em">
            <div className="row h-full">
              <div className="col-12 text-center align-self-center">
                <img className="ifotta-white-logo-large ifotta-block ifotta-left" src={whiteLogo} alt="logo" />
                <p className="ifotta-homeheader-text ifotta-left">We Develop Software & Train Developers...
                  <span className="ifotta-margin-top-negative--5em ifotta-block ifotta-left" />
                </p>
                <br />
                <br />
                <div className="ifotta-homeheader-button-wrapper ifotta-left">
                  <Hire />
                  <Link className="btn btn-xl btn-round ifotta-btn-yellow w-300 mr-12 hidden-sm-down" to="academy">Ifotta Academy</Link>
                  <Link style={{ marginTop: '2em' }} className="btn btn-lg btn-round ifotta-btn-yellow w-250 mr-12 hidden-md-up" to="academy">Ifotta Academy</Link>
                </div>
                <br />
              </div>
              <div className="col-12 align-self-end text-center pb-70" />
            </div>
          </div>
        </header>

        <main className="main-content">


          <section className="section" id="services-section">
            <div className="container">
              <header className="section-header">
                <small>Our Services</small>
                <h2><Hire><a href="#services-section">Hire</a></Hire>, <Link to="academy">Train</Link> or become a Developer</h2>
                <hr />
                <p className="lead">ifotta makes world-class developers faster and easier to reach. We also offer various software development and Business Application classes.</p>
              </header>

              <div className="row gap-y">

                <div className="col-12 col-md-6 col-xl-4 feature-1">
                  <p className="feature-icon text-success"><img width="30px" height="60px" src={hireLogo} alt="logo" /></p>
                  <h5>Hire A Developer</h5>
                  <p>From web applications to mobile apps, our developers will create excellent software with the bleeding edge features and software development practices that will make your software intuitive and easily adapted into you and your user processes</p>
                  <p>
                    <Hire>
                      <a className="ifotta-no-display-mobile" href="#hire" style={{ color: '#4ED866' }}>Hire A Developer</a>
                      <Link className="ifotta-display-mobile" to="hireForm" style={{ color: '#4ED866' }}>Hire A Developer</Link>
                    </Hire>
                  </p>
                </div>


                <div className="col-12 col-md-6 col-xl-4 feature-1">
                  <p className="feature-icon text-danger"><img width="60px" height="60px" src={iALogo} alt="logo" /></p>
                  <h5>Ifotta Academy</h5>
                  <p>Reinvent your career! Learn to code and change your life. Enroll in our
                  career changing boot camps and master the skills you need to become a
                  software engineer.</p>
                  <p>
                    <Link to="academy" style={{ color: '#FD4C59' }}>Register Now</Link>
                  </p>
                </div>


                <div className="col-12 col-md-6 col-xl-4 feature-1">
                  <p className="feature-icon text-info"><img width="60px" height="50px" src={softwareLogo} alt="logo" /></p>
                  <h5>Software Development/Projects</h5>
                  <p>Whether you need a single developer to work on a project or be part of a project team or you’re looking to outsource your whole software development effort. We are ready to help you build the quality product you desire.</p>
                  <p>
                    <span className="ifotta-no-display-mobile">
                      <Hire title="Software Development/Projects Form">
                        <a href="#hire">Get Started</a>
                      </Hire>
                    </span>
                    <Link className="ifotta-display-mobile" to="hireForm/SOFTWARE+DEVELOPMENT+FORM">Get Started</Link>
                  </p>
                </div>

              </div>

            </div>
          </section>


          <section className="section bg-gray text-center">

            <div className="row">
              <div className="col-12 offset-md-3 col-md-6">
                <br />
                <h3 className="fw-900 mb-20">Become A Developer with Ifotta Academy</h3>
                <p className="lead text-muted">ifotta offers various software technology training courses to prep you for the job market.</p>
                <br />
                <Link className="btn btn-lg btn-round btn-success" to="academy">Get Started</Link>
              </div>
            </div>

          </section>


          <section className="section">
            <div className="container">
              <header className="section-header">
                <small>DEVELOP WITH US</small>
                <h2>What would you like to do</h2>
                <hr />
                <p className="lead">Hire a Developer? Apply as a Developer? Or train to become a Developer?.</p>
              </header>


              <div className="row gap-y">

                <div className="col-12 col-md-4 col-lg-4">
                  <div className="card ifotta-no-display-mobile card-bordered card-hover-shadow text-center">
                    <Hire>
                      <a className="card-block" data-scrollto="home-header" href="#home-header">
                        <p><i className="icon-genius fs-50 text-muted" /></p>
                        <h4 className="card-title">Hire</h4>
                      </a>
                    </Hire>
                  </div>
                  <div className="card ifotta-display-mobile card-bordered card-hover-shadow text-center">
                    <Link className="card-block" data-scrollto="home-header" to="hireForm">
                      <p><i className="icon-genius fs-50 text-muted" /></p>
                      <h4 className="card-title">Hire</h4>
                    </Link>
                  </div>
                </div>


                <div className="col-12 col-md-4 col-lg-4">
                  <div className="card card-bordered card-hover-shadow text-center">
                    <Link className="card-block" to="jobs/DEVELOPER">
                      <p><i className="icon-mobile fs-50 text-muted" /></p>
                      <h4 className="card-title">Apply</h4>
                    </Link>
                  </div>
                </div>


                <div className="col-12 col-md-4 col-lg-4">
                  <div className="card card-bordered card-hover-shadow text-center ifotta-no-display-mobile">
                    <AcademyModal>
                      <a className="card-block" href="#academy">
                        <p><i className="icon-tools fs-50 text-muted" /></p>
                        <h4 className="card-title">Train</h4>
                      </a>
                    </AcademyModal>
                  </div>
                  <div className="card card-bordered card-hover-shadow text-center ifotta-display-mobile">
                    <Link className="card-block ifotta-display-mobile" to="academyForm">
                      <p><i className="icon-tools fs-50 text-muted" /></p>
                      <h4 className="card-title">Train</h4>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>


        </main>
        <Footer />
      </div>
    );
  }
}
export default Home;
