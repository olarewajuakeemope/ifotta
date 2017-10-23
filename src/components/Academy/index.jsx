import React, { Component } from 'react';
import Scrollchor from 'react-scrollchor';
import AcademyModal from '../AcademyModal';
import CourseCategories from './courseCategories';
import CourseListPage from './courseListPage';
import coursesListObject from './coursesListObject';
import Footer from '../Footer';
import bgLaptop from '../../resources/img/bg-laptop.jpg';
import iAWhiteLogo from '../../resources/img/IA-ifotta-white.png';


/**
 * Replace with Academyropriate info on completion
 * @className Academy
 * @extends {Component}
 */
class Academy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCourse: null,
    };
  }

  componentDidMount() {
    this.pageScroll.simulateClick();
  }

  renderCoursePage = (currentCourse) => {
    this.setState({
      currentCourse: coursesListObject[currentCourse],
    });
  }

  /**
   * @returns {Object} Jsx
   * @memberOf Academy
   */
  render() {
    const scrollToTop = (
      <Scrollchor
        ref={(ref) => {
          this.pageScroll = ref;
          return this.pageScroll;
        }}
        to=""
        id="pageScroll"
      />
    );

    if (this.state.currentCourse) {
      return (
        <div>
          {scrollToTop}
          <CourseListPage course={this.state.currentCourse} />
        </div>
      );
    }
    return (
      <div>
        {scrollToTop}
        <header className="header header-inverse bg-fixed" style={{ backgroundImage: `url(${bgLaptop})` }} data-overlay="8">
          <div className="container text-center">

            <div className="row">
              <div className="col-12 col-lg-8 offset-lg-2">

                <img width="300px" height="150px" src={iAWhiteLogo} alt="logo" />

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
                <CourseCategories renderCoursePage={this.renderCoursePage} title="All" />
              </div>
              <div className="tab-pane fade" id="header-gradient">
                <CourseCategories renderCoursePage={this.renderCoursePage} title="Individual" />
              </div>
              <div className="tab-pane fade" id="header-slider">
                <CourseCategories renderCoursePage={this.renderCoursePage} title="Career" />
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
