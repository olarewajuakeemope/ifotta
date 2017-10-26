import React, { Component } from 'react';

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
                <p><a href="#" onClick={ () => this.props.renderCoursePage('sei') }>Software Engineering Immersive (Full Stack)</a></p>
                <p><a href="#" onClick={ () => this.props.renderCoursePage('frontendCourses') }>Front End Developer</a></p>
                <p><a href="#" onClick={ () => this.props.renderCoursePage('backendCourses') }>Back End Developer</a></p>
                <p><a href="#" onClick={ () => this.props.renderCoursePage('mobileAppsIos') }>Mobile Application iOS</a></p>
                <p><a href="#" onClick={ () => this.props.renderCoursePage('mobileAppsAndroid') }>Mobile Application Android</a></p>
                <p><a href="#" onClick={ () => this.props.renderCoursePage('bas') }>Business Application Software</a></p>
                <p><a href="#" onClick={ () => this.props.renderCoursePage('shortCourses') }>Short Courses</a></p>
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
