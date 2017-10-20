import React, { Component } from 'react';

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
        <header className="header header-inverse" style={{ backgroundColor: '#c2b2cd' }}>
          <div className="container text-center">

            <div className="row">
              <div className="col-12 col-lg-8 offset-lg-2">

                <h1 style={{ fontSize: '90px' }}>ifotta</h1>
              </div>
            </div>

          </div>
        </header>
        <main className="main-content">
          <section className="section">
            <div className="container">
              <header className="section-header">
                <small>WHO WE ARE</small>
                <h2>About Us</h2>
                <h6>To increase employment and achieve a higher standard of living
for the Nigerian Youth.</h6>
                <hr />
                <p className="lead">To find, train, mentor, employ highly intelligent Nigerians and
place them in the global software development market working
remotely from our offices in Nigeria.
Ifotta is an independent IT company that offers a wide variety of software
solutions. From hiring a developer, to working on your numerous software
projects to our rich curriculum of short and intense courses; from
businesses to individuals be it Small, medium or large companies our
software developers will create and build lasting solutions for your
organization. We’re a from a variety of technical and creative backgrounds
in the IT industry. Our collective decades of experience and wide variety
of skills means your earning process/experience will truly be memorable.
In order to achieve its vision, Ifotta opened its doors to the community in
2017 and has since been enjoying great testimonials from its alumni.</p>
              </header>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default About;
