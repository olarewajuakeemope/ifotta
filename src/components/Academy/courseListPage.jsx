import React, { Component } from 'react';
import { Link } from 'react-router';
import AcademyModal from '../AcademyModal';
import Footer from '../Footer';
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

  renderSyllabusTopics = (topicsArray) => {
    return topicsArray.map((topic, topicIndex) => {
      const topicIndexKey = topicIndex + 9.9;
      return (
        <p key={`${topicIndexKey}${topic}`}>{topic}</p>
      );
    });
  }

  renderSyllabus = () => {
    const { courses } = this.props.course;
    return courses.map((item, index) => {
      const indexKey = index + 9;
      return (
        <div className="card" key={`${indexKey}${item.title}`}>
          <h5 className="card-title">
            <a data-toggle="collapse" data-parent="#accordion-1" href={`#collapse-1-${indexKey}`}>{item.title}</a>
          </h5>
          <div id={`collapse-1-${indexKey}`} className="collapse in">
            <div className="card-block">
              {this.renderSyllabusTopics(item.topics)}
            </div>
          </div>
        </div>
      );
    });
  }
  /**
   * @returns {Object} Jsx
   * @memberOf CourseListPage
   */
  render() {
    const { course, currentCourseKey } = this.props;
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
          <header className="section-header">
            <br />
            <h2>{ course.title }</h2>
            <h6>Syllabus for Ifotta {course.title} Courses.</h6>
            <hr />
          </header>
          <section className="section bg-gray">
            <div className="container">
              <div className="container">
                <nav className="flexbox mt-30">
                  <p>
                    <a
                      href="#backbutton"
                      onClick={() => this.props.renderCoursePage('', false)}
                      className="btn btn-white"
                    >
                      <i className="ti-arrow-left fs-9 mr-4" />
                      Back to Course List
                    </a>
                  </p>
                </nav>
                <div className="accordion" id="accordion-1">

                  {this.renderSyllabus()}
                </div>
                <br />
                <br />
                <div className="text-left ifotta-no-display-mobile">
                  <AcademyModal title={currentCourseKey} />
                </div>
                <div className="text-left ifotta-display-mobile">
                  <Link className="btn btn-primary custom-button" to={`academyForm/${currentCourseKey}`}>Register</Link>
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </main>
      </div>
    );
  }
}

export default CourseListPage;
