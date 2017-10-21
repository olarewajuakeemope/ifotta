import React, { Component } from 'react';
import { Link } from 'react-router';
import bgLaptop from '../../resources/img/bg-laptop.jpg';
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
        <header className="header header-inverse" style={{ backgroundImage: `url(${bgLaptop})`, backgroundColor: '#c2b2cd' }} data-overlay="8">
          <div className="container text-center">

            <div className="row">
              <div className="col-12 col-lg-8 offset-lg-2">

                <h1 style={{ fontSize: '90px' }}>ifotta</h1>
              </div>
            </div>

          </div>
        </header>
        <section className="section bg-gray" id="section-features">
          <div className="container">
            <header className="section-header">
              <small>WHAT WE DO</small>
              <h2>Our Services</h2>
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
                    Looking to design something as simple as a blog and/designing
a corporate website, our team of developers will not only build
your website, but will work with your team on/off site to build
and design your site. With the appropriate programming
language and pay attention to details to deliver the best,
bearing in mind the needs of the company/individual and
customers
                      </p>
                      <div className="text-left mt-50">
                        <Hire>
                          <a className="btn btn-lg btn-primary" href="#">Hire A Developer</a>
                        </Hire>
                      </div>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="tab-2">
                    <div>
                      <h1>Software Development/Projects</h1>
                      <p>
                    Looking for a development team to build or update your
software? At Ifotta we provide software development
services for different platforms. From concept of the desired
software through to the final manifestation of the software,
prototyping, modification, re-use, reengineering. We deliver
a complete software solution.
                      </p>
                      <div className="text-left mt-50">
                        <Link className="btn btn-lg btn-primary" to="jobs">Available Jobs</Link>
                      </div>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="tab-3">
                    <div>
                      <h1>Ifotta Academy</h1>
                      <p>
                    Reinvent your career! Learn to code and change your life. Join our
driven community of career changers and master the skills you need to
become a software engineer. Whether it’s leveraging your background to
make a bigger impact in your current industry or diving into a brand new
territory, our wide variety of short and intense courses will help you
achieve/bring that dream to reality. Add the right technical skills to your
resume so you can pursue a more fulfilling career. GO PRO!!!!
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
