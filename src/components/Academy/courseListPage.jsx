import React, { Component } from 'react';
import whiteLogo from '../../resources/img/ifotta-logo-white.png';
import bgLaptop from '../../resources/img/bg-laptop.jpg';

/**
 * Replace with CourseListPageropriate info on completion
 * @class CourseListPage
 * @extends {Component}
 */
class CourseListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  /**
   * @returns {Object} Jsx
   * @memberOf CourseListPage
   */
  render() {
    const { course } = this.props;
    return (
      <div>
        <header className="header header-inverse" style={{ backgroundImage: `url(${bgLaptop})` }}>
          <div className="header-overlay opacity-90" style={{ backgroundColor: '#1F88C1' }} />
          <div className="container text-center">

            <div className="row">
              <div className="col-12 col-lg-8 offset-lg-2">
                <img width="300px" height="150px" src={whiteLogo} alt="logo" />
                <h2>IFOTTA COURSES</h2>
              </div>
            </div>

          </div>
        </header>
        <main className="main-content">
          <section className="section">
            <div className="container">
              <header className="section-header">
                <h2>{ course.title }</h2>
                <h6>Syllabus for Ifotta {course.title} Courses.</h6>
                <hr />
              </header>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default CourseListPage;
