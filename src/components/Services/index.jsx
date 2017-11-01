import React, { Component } from 'react';
import { Link } from 'react-router';
import bgLaptop from '../../resources/img/bg-laptop.jpg';
import whiteLogo from '../../resources/img/ifotta-logo-white.png';
import Footer from '../Footer';
import Hire from '../Hire';
/**
 * Replace with Servicesropriate info on completion
 * @class Services
 * @extends {Component}
 */
class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  /**
   * @returns {Object} Jsx
   * @memberOf Services
   */
  render() {
    return (
      <div>
        <header className="header header-inverse" style={{ backgroundImage: `url(${bgLaptop})` }}>
          <div className="header-overlay opacity-90" style={{ backgroundColor: '#1F88C1' }} />
          <div className="container text-center">

            <div className="row">
              <div className="col-12 col-lg-8 offset-lg-2">

                <img width="300px" height="150px" src={whiteLogo} alt="logo" />
                <h2>OUR SERVICES</h2>
              </div>
            </div>

          </div>
        </header>
        <section className="section bg-gray" id="section-features">
          <div className="container">
            <header className="section-header">
              <hr />
            </header>


            <div className="row gap-5">


              <div className="col-12 col-md-4">
                <ul className="nav nav-vertical">
                  <li className="nav-item">
                    <a className="nav-link active" data-toggle="tab" href="#tab-1">
                      <h6>Hire Developers</h6>
                      <p>Work with world-class developers remotely from anywhere in the world.</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#tab-2">
                      <h6>Software Development/Projects</h6>
                      <p>At Ifotta we provide software development
services for different platforms.</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#tab-3">
                      <h6>Ifotta Academy</h6>
                      <p>Learn to code and change your life. Join our
driven community of career changers and master the skills you need to
become a software engineer.</p>
                    </a>
                  </li>
                </ul>
              </div>


              <div className="col-12 col-md-8 align-self-center">
                <div className="tab-content">
                  <div className="tab-pane fade show active" id="tab-1">
                    <div>
                      <h1>Hire A Developer</h1>
                      <p>
                      Looking to design something as simple as a corporate website?
                      Our team of developers will not only build your website, but
                      will work with your team on/off site to build and design your
                      site.
                      </p>
                      <div className="text-left mt-50 ifotta-no-display-mobile">
                        <Hire>
                          <a className="btn btn-lg btn-primary" href="#hire">Hire A Developer</a>
                        </Hire>
                      </div>
                      <div className="text-left mt-50 ifotta-display-mobile">
                        <Link className="btn btn-lg btn-primary" to="hireForm">Hire A Developer</Link>
                      </div>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="tab-2">
                    <div>
                      <h1>Software Development/Projects</h1>
                      <p>
                      Looking for a development team to build or update your
                      software? At Ifotta we provide software development
                      services for different platforms, either as outsource services
                      or by providing developers.
                      </p>
                      <div className="text-left mt-50">
                        <Link className="btn btn-lg btn-primary" to="hireForm/SOFTWARE+DEVELOPMENT+FORM">Software Development Form</Link>
                      </div>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="tab-3">
                    <div>
                      <h1>Ifotta Academy</h1>
                      <p>
                      Reinvent your career! Learn to code and change your life. Enroll in our
                      career changing boot camps and master the skills you need to become a
                      software engineer.
                      </p>
                      <div className="text-left mt-50">
                        <Link className="btn btn-lg btn-primary" to="academy">Ifotta Academy</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Services;
