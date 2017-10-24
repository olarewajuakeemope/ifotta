import React, { Component } from 'react';
import Footer from './Footer';
import whiteLogo from '../resources/img/ifotta-logo-white.png';
import bgLaptop from '../resources/img/bg-laptop.jpg';

/**
 * Replace with Aboutropriate info on completion
 * @class About
 * @extends {Component}
 */
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  /**
   * @returns {Object} Jsx
   * @memberOf About
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
                <h2>ABOUT US</h2>
              </div>
            </div>

          </div>
        </header>
        <main className="main-content">
          <section className="section">
            <div className="container">
              <header className="section-header">
                <h6>OUR VISION</h6>
                <p className="lead">To increase employment and achieve a higher standard of living
for the Nigerian Youth.</p>
                <hr />
                <h6>OUR MISSION</h6>
                <p className="lead">
                To find, train, mentor, employ highly intelligent Nigerians and
                place them in the global software development market working
                remotely from our offices in Nigeria.
                </p>
                <br />
                <br />
                <h6>WHAT WE DO</h6>
                <p className="lead">
                Ifotta is an independent IT company that offers a wide variety of software
                solutions. From hiring a developer, to working on your numerous software
                projects to our rich curriculum of boot camp and intense courses. from
                businesses to individuals be it Small, medium or large companies our
                software developers will create and build lasting solutions for your
                organization.</p>
              </header>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}

export default About;
