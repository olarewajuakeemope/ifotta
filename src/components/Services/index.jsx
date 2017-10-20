import React, { Component } from 'react';

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
        <header className="header header-inverse" style={{ backgroundColor: '#c2b2cd' }}>
          <div className="container text-center">

            <div className="row">
              <div className="col-12 col-lg-8 offset-lg-2">

                <h1 style={{ fontSize: '90px' }}>ifotta</h1>
              </div>
            </div>

          </div>
        </header>
        <section className="section" id="services-section">
          <div className="container">
            <header className="section-header">
              <small>Our Services</small>
              <h2>Hire, Train, Or become a Developer</h2>
              <hr />
              <p className="lead">ifotta makes world-class developers faster and easier to reach. Thats not all, We also offer various software development training courses.</p>
            </header>

            <div className="row gap-y">

              <div className="col-12 col-md-6 col-xl-4 feature-1">
                <p className="feature-icon text-success"><i className="icon-genius" /></p>
                <h5>Hire A Developer</h5>
                <p>Looking to design something as simple as a blog and/designing
a corporate website, our team of developers will not only build
your website, but will work with your team on/off site to build
and design your site. With the appropriate programming
language and pay attention to details to deliver the best,
bearing in mind the needs of the company/individual and
customers.</p>
              </div>


              <div className="col-12 col-md-6 col-xl-4 feature-1">
                <p className="feature-icon text-info"><i className="icon-mobile" /></p>
                <h5>Software Development/Projects</h5>
                <p>Looking for a development team to build or update your
software? At Ifotta we provide software development
services for different platforms. From concept of the desired
software through to the final manifestation of the software,
prototyping, modification, re-use, reengineering. We deliver
a complete software solution.</p>
              </div>


              <div className="col-12 col-md-6 col-xl-4 feature-1">
                <p className="feature-icon text-danger"><i className="icon-tools" /></p>
                <h5>Ifotta Academy</h5>
                <p>Reinvent your career! Learn to code and change your life. Join our
driven community of career changers and master the skills you need to
become a software engineer. Whether it’s leveraging your background to
make a bigger impact in your current industry or diving into a brand new
territory, our wide variety of short and intense courses will help you
achieve/bring that dream to reality.</p>
              </div>

            </div>

          </div>
        </section>
      </div>
    );
  }
}

export default Services;
