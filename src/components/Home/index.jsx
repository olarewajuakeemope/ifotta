import React, { Component } from 'react';
import { Link } from 'react-router';
import $ from 'jquery';
import ContactForm from './ContactForm';
import Hire from '../Hire';
import Footer from '../Footer';
import bgLaptop from '../../resources/img/bg-laptop.jpg';

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

          <div className="container">
            <div className="row h-full">
              <div className="col-12 text-center align-self-center">
                <h1 className="fs-50 fw-600 lh-15 hidden-sm-down">We provide Software <span className="text-primary" data-type="Development, Training, Job Opportunities" /></h1>
                <h1 className="fs-35 fw-600 lh-15 hidden-md-up">We provide Software <br /><span className="text-primary" data-type="Development, Training, Job Opportunities" /></h1>
                <br />
                <p className="fs-20 hidden-sm-down"><strong>Affiliation </strong> – American Career Institute</p>
                <p className="fs-16 hidden-md-up"><strong>Affiliation </strong> – American Career Institute</p>
                <br />
                <hr className="w-60 hidden-sm-down" />
                <br />
                <Hire />
                <br />
                <p className="mt-2 mt-md-4"><a href="/academy.html"><small>or become a developer with Ifotta</small></a></p>
              </div>

              <div className="col-12 align-self-end text-center pb-70">
                <a className="scroll-down-2 scroll-down-inverse" href="#" data-scrollto="services-section"><span /></a>
              </div>
            </div>
          </div>
        </header>

        <main className="main-content">


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


          <section className="section bg-gray text-center">

            <div className="row">
              <div className="col-12 offset-md-3 col-md-6">
                <br />
                <h3 className="fw-900 mb-20">Become A Developer with Ifatta Academy</h3>
                <p className="lead text-muted">ifotta offers various software technology training courses to prep you for the job market.</p>
                <br />
                <Link className="btn btn-lg btn-round btn-success" to="academy">Apply Now</Link>
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
                  <div className="card card-bordered card-hover-shadow text-center">
                    <a className="card-block" data-scrollto="home-header" href="#home-header">
                      <p><i className="icon-genius fs-50 text-muted" /></p>
                      <h4 className="card-title">Hire</h4>
                    </a>
                  </div>
                </div>


                <div className="col-12 col-md-4 col-lg-4">
                  <div className="card card-bordered card-hover-shadow text-center">
                    <a className="card-block" href="https://ifotta.workable.com">
                      <p><i className="icon-mobile fs-50 text-muted" /></p>
                      <h4 className="card-title">Apply</h4>
                    </a>
                  </div>
                </div>


                <div className="col-12 col-md-4 col-lg-4">
                  <div className="card card-bordered card-hover-shadow text-center">
                    <Link className="card-block" to="academy">
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
