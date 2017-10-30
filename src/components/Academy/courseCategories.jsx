import React, { Component } from 'react';
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

  renderTableRows = () => {
    const coursesRowArray = [];
    for (const course in coursesListObject) {
      if ({}.hasOwnProperty.call(coursesListObject, course)) {
        const { title, duration, price } = coursesListObject[course];
        coursesRowArray.push(
          <tr>
            <td>
              <a href="#" onClick={() => this.props.renderCoursePage(course)}><p>{title}</p></a>
            </td>
            <td>
              <p>{duration}</p>
            </td>
            <td>
              <p>{price}</p>
            </td>
          </tr>,
        );
      }
    }
    return coursesRowArray;
  }

  /**
   * @returns {Object} Jsx
   * @memberOf CourseCategories
   */
  render() {
    const { title } = this.props;
    return (
      <div className="tab-pane active" id="tab_default_1">
        <div className="container text-center">
          <h3>{ title } Courses</h3>
          <p><em>Below is a complete list of all ifotta courses</em></p>
          <br />
          <div className="row">
            <div className="col-12 col-lg-12">
              <table className="table">
                <tbody valign="middle">
                  <tr>
                    <td>
                      <h4 className="price">Course</h4>
                    </td>

                    <td>
                      <h4 className="price">Duration</h4>
                    </td>

                    <td>
                      <h4 className="price">Price</h4>
                    </td>
                  </tr>
                  {
                    this.renderTableRows()
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CourseCategories;
