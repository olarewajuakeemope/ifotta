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
          <CourseListPage
            renderCoursePage={this.renderCoursePage}
            course={this.state.currentCourse}
          />
        </div>
      );
    }
    return (
      <div>
        {scrollToTop}
        <header className="header header-inverse bg-fixed" style={{ backgroundImage: `url(${bgLaptop})` }}>
          <div className="header-overlay opacity-90" style={{ backgroundColor: '#1F88C1' }} />
          <div className="container text-center">

            <div className="row">
              <div className="col-12 col-lg-8 offset-lg-2">
                <img width="300px" height="150px" src={iAWhiteLogo} alt="logo" />
                <h2>IFOTTA ACADEMY</h2>
              </div>
            </div>

          </div>
        </header>
        <section className="section bg-grey pb-0 bb-1">
        <div className="container">
          <header className="section-header">
            <small>See It In Action</small>
            <h2>Screenshots</h2>
            <hr />
            <p className="lead">We waited until we could do it right. Then we did! Instead of creating a carbon copy.</p>
          </header>

          <div className="text-center">
            <ul className="nav nav-outline nav-round">
              <li className="nav-item w-140">
                <a className="nav-link active" data-toggle="tab" href="#home-basic">Login</a>
              </li>
              <li className="nav-item w-140 hidden-sm-down">
                <a className="nav-link" data-toggle="tab" href="#profile-basic">Dashboard</a>
              </li>
              <li className="nav-item w-140 hidden-sm-down">
                <a className="nav-link" data-toggle="tab" href="#messages-basic">Members</a>
              </li>
              <li className="nav-item w-140">
                <a className="nav-link" data-toggle="tab" href="#settings-basic">Calendar</a>
              </li>
            </ul>
          </div>


          <br /><br />

          <div className="col-xs">
            <div className="tab-content text-center">
              <div className="tab-pane fade show active" id="home-basic">
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
                </tbody>
              </table>
              </div>
              <div className="tab-pane fade" id="profile-basic">
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
                </tbody>
              </table>
              </div>
              <div className="tab-pane fade" id="messages-basic">
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
                </tbody>
              </table>
              </div>
              <div className="tab-pane fade" id="settings-basic">
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
                </tbody>
              </table>
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

export default Academy;
