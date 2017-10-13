import React, { Component } from 'react';
import Scrollchor from 'react-scrollchor';
import AcademyModal from '../AcademyModal';
import Footer from '../Footer';


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
        <div id="content" className="site-content">
          <Scrollchor
            ref={(ref) => {
              this.pageScroll = ref;
              return this.pageScroll;
            }}
            to=""
            id="pageScroll"
          />
          <section className="masthead" style={{ position: 'relative', height: '30em', backgroundImage: "url('http://human-partners.org/sites/default/files/stock-photo-it-consultant-presenting-tag-cloud-about-information-technology-318368642.jpg')" }}>
            <div className="container" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
              <div className="row">
                <div className="col-lg-8 col-md-10 mx-auto">
                  <div className="site-heading">
                    <h1 style={{ marginBottom: '.5em' }}>Ifotta Academy</h1>
                    <span className="subheading">Learn Every Essential Coding Skills You Need For The Job Market</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="ifotta-academy-tab-container">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12 mx-auto">
                  <div className="site-heading">
                    <h1 className="ifotta-text" style={{ paddingTop: '50px', paddingBottom: '30px' }}>Our Courses</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="tabbable-panel">
                    <div className="tabbable-line">
                      <ul className="nav nav-tabs ifotta-text">
                        <li className="active">
                          <a href="#tab_default_1" data-toggle="tab">
All Courses </a>
                        </li>
                        <li>
                          <a href="#tab_default_2" data-toggle="tab">
Career Courses </a>
                        </li>
                        <li>
                          <a href="#tab_default_3" data-toggle="tab">
Individual Courses </a>
                        </li>
                      </ul>
                      <div className="tab-content">
                        <div className="tab-pane active" id="tab_default_1">
                          <div id="band" className="container text-left">
                            <h3>All Courses</h3>
                            <p><em>Below is a complete list of all ifotta courses</em></p>
                            <br />
                            <div className="row">
                              <div className="col-sm-4">
                                <p className="text-left"><strong>Course</strong></p><br />
                                <div>
                                  <p>Software Engineering Immersive (Full Stack)</p>
                                  <p>Front End Developer (HTML/Javascript/CSS)</p>

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
                                <p className="text-left"><strong>Duration</strong></p><br />
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
                                <p className="text-left"><strong>Price</strong></p><br />
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
                        <div className="tab-pane" id="tab_default_2">
                          <div id="band" className="container text-left">
                            <h3>Career Courses</h3>
                            <p><em>Below is a complete list of all ifotta Career courses</em></p>
                            <br />
                            <div className="row">
                              <div className="col-sm-4">
                                <p className="text-left"><strong>Course</strong></p><br />
                                <div>
                                  <p>Software Engineering Immersive (Full Stack)</p>
                                  <p>Front End Developer (HTML/Javascript/CSS)</p>

                                  <div>
                                    <a href="#backend-course-id" data-toggle="collapse">
                                      <p>Back End Developer/UI & UX</p>
                                    </a>
                                    <div id="backend-course-id" className="collapse">
                                      <p><em>PHP/Java/Javascript/Ruby/.Net/Python</em></p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-4">
                                <p className="text-left"><strong>Duration</strong></p><br />
                                <div>
                                  <p>12 Weeks</p>
                                  <p>8 Weeks</p>
                                  <p>8 Weeks</p>
                                </div>
                              </div>
                              <div className="col-sm-4">
                                <p className="text-left"><strong>Price</strong></p><br />
                                <div>
                                  <p>N400,000</p>
                                  <p>N300,000</p>
                                  <p>N300,000</p>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>
                        <div className="tab-pane" id="tab_default_3">
                          <div id="band" className="container text-left">
                            <h3>Individual Courses</h3>
                            <p><em>Below is a complete list of all ifotta Individual courses</em></p>
                            <br />
                            <div className="row">
                              <div className="col-sm-4">
                                <p className="text-left"><strong>Course</strong></p><br />
                                <div>
                                  <p>Software Engineering Immersive (Full Stack)</p>
                                  <p>Front End Developer (HTML/Javascript/CSS)</p>

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
                                <p className="text-left"><strong>Duration</strong></p><br />
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
                                <p className="text-left"><strong>Price</strong></p><br />
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Academy;
