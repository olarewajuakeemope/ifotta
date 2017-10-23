import React, { Component } from 'react';
import CourseListPage from './courseListPage';
import coursesListObject from './coursesListObject';

/**
 * Replace with CourseCategoriesropriate info on completion
 * @class CourseCategories
 * @extends {Component}
 */
class CourseCategories extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  /**
   * @returns {Object} Jsx
   * @memberOf CourseCategories
   */
  render() {
    const { title } = this.props;
    return (
      <div className="tab-pane active" id="tab_default_1">
        <div id="band" className="container text-center">
          <h3>{ title } Courses</h3>
          <p><em>Below is a complete list of all ifotta courses</em></p>
          <br />
          <div className="row">
            <div className="col-sm-4 text-left">
              <p><strong>Course</strong></p><br />
              <div>
                <p>Software Engineering Immersive (Full Stack)</p>
                <p><a href="#" onClick={ () => this.props.renderCoursePage('frontendCourses') }>Front End Developer (HTML/Javascript/CSS)</a></p>

                <div>
                  <a href="#backend-course-id" data-toggle="collapse">
                    <p>Back End Developer/UI & UX</p>
                  </a>
                  <div id="backend-course-id" className="collapse">
                    <p><em>PHP/Java/Javascript/Ruby/.Net/Python</em></p>
                  </div>
                </div>
                <p>Mobile Application iOS</p>
                <p>Mobile Application Android</p>
                <div>
                  <a href="#demo" data-toggle="collapse">
                    <p>Business Application Software</p>
                  </a>
                  <div id="demo" className="collapse">
                    <p><em>PowerPoint for power
users/presenter, Microsoft Excel – Advanced Analysis,
Microsoft Visio, Sage ERP software, Peach Tree, SAP,
Corel Draw, Multimedia e.g. Adobe Premier Pro</em></p>
                  </div>
                </div>
                <div>
                  <a href="#short-course-id" data-toggle="collapse">
                    <p>Short Courses</p>
                  </a>
                  <div id="short-course-id" className="collapse">
                    <p><em>Intro to python, Ruby, Ruby on Rails,
Java, React</em></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <p><strong>Duration</strong></p><br />
              <div>
                <p>12 Weeks</p>
                <p>8 Weeks</p>
                <p>8 Weeks</p>
                <p>6 Weeks</p>
                <p>6 Weeks</p>
                <p>3 Days</p>
                <p>4 Weeks</p>
              </div>
            </div>
            <div className="col-sm-4">
              <p><strong>Price</strong></p><br />
              <div>
                <p>N400,000</p>
                <p>N300,000</p>
                <p>N300,000</p>
                <p>N300,000</p>
                <p>N300,000</p>
                <p>N150,000</p>
                <p>N200,000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CourseCategories;
