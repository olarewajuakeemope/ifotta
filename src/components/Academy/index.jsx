import React, { Component } from 'react';
import Scrollchor from 'react-scrollchor';
import AcademyModal from '../AcademyModal';
import CourseCategories from './courseCategories';
import Footer from '../Footer';
import bgLaptop from '../../resources/img/bg-laptop.jpg';


/**
 * Replace with Academyropriate info on completion
 * @className Academy
 * @extends {Component}
 */
class Academy extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.pageScroll.simulateClick();
  }
  /**
   * @returns {Object} Jsx
   * @memberOf Academy
   */
  render() {
    return (
      <div>
        <Scrollchor
          ref={(ref) => {
            this.pageScroll = ref;
            return this.pageScroll;
          }}
          to=""
          id="pageScroll"
        />
        <header className="header header-inverse bg-fixed" style={{ backgroundImage: `url(${bgLaptop})` }} data-overlay="8">
          <div className="container text-center">

            <div className="row">
              <div className="col-12 col-lg-8 offset-lg-2">

                <h1 style={{ fonstSize: '90px' }}>ifotta</h1>

              </div>
            </div>

          </div>
        </header>
        <section className="section bg-gray bb-11 pb-0">
          <div className="container">
            <header className="section-header">
              <small>OUR COURSES</small>
              <h2>Ifotta Academy</h2>
              <hr />
              <p className="lead">Learn Every Essential Coding Skills You Need For The Job Market</p>
            </header>

            <div className="text-center">
              <ul className="nav nav-outline nav-round">
                <li className="nav-item w-140">
                  <a className="nav-link active" data-toggle="tab" href="#header-color">All</a>
                </li>
                <li className="nav-item w-140 hidden-sm-down">
                  <a className="nav-link" data-toggle="tab" href="#header-gradient">Individual</a>
                </li>
                <li className="nav-item w-140">
                  <a className="nav-link" data-toggle="tab" href="#header-slider">Career</a>
                </li>
              </ul>
            </div>


            <br /><br />


            <div className="tab-content text-center" data-aos="fade-in">
              <div className="tab-pane fade show active" id="header-color">
                <CourseCategories title="All" />
              </div>
              <div className="tab-pane fade" id="header-gradient">
                <CourseCategories title="Individual" />
              </div>
              <div className="tab-pane fade" id="header-slider">
                <CourseCategories title="Career" />
              </div>
            </div>


          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Academy;
