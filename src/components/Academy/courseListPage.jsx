import React, { Component } from 'react';
import whiteLogo from '../../resources/img/ifotta-logo-white.png';

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
        <header className="header header-inverse" style={{ backgroundColor: '#c2b2cd' }}>
          <div className="container text-center">

            <div className="row">
              <div className="col-12 col-lg-8 offset-lg-2">

                <img width="300px" height="150px" src={whiteLogo} alt="logo" />
              </div>
            </div>

          </div>
        </header>
        <main className="main-content">
          <section className="section">
            <div className="container">
              <header className="section-header">
                <small>IFOTTA COURSES</small>
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
