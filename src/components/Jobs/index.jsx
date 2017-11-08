import React, { Component } from 'react';
import { Link } from 'react-router';
import JobsForm from './jobsForm';
import JobsObject from './jobsObject';
import bgLaptop from '../../resources/img/bg-laptop.jpg';
import Footer from '../Footer';

/**
 * Replace with Jobsropriate info on completion
 * @class Jobs
 * @extends {Component}
 */
class Jobs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderJobs = () => {
    return JobsObject.map((job, index) => {
      const indexKey = index + 9;
      const { title, description, requirements } = job;
      return (
        <div className="card" key={`${indexKey}${title}`}>
          <h5 className="card-title">
            <a data-toggle="collapse" data-parent="#accordion-1" href={`#collapse-1-${indexKey}`}>{title}</a>
          </h5>
          <div id={`collapse-1-${indexKey}`} className="collapse in">
            <div className="card-block">
              <h3>Description</h3>
              {
                description.map((detail, i) => {
                  const iKey = i + 19;
                  return (
                    <p key={`${iKey}${detail}`}>{detail}</p>
                  );
                })
              }
              <h3>Requirements</h3>
              {
                requirements.map((requirement, idx) => {
                  const idxKey = idx + 29;
                  return (
                    <p key={`${idxKey}${requirement}`}>{requirement}</p>
                  );
                })
              }
              <Link className="btn btn-primary custom-button" to={`jobs/${title}`}>
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      );
    });
  }
  /**
   * @returns {Object} Jsx
   * @memberOf Jobs
   */
  render() {
    if (this.props.params.formTitle) {
      const { formTitle } = this.props.params;
      return (
        <JobsForm title={formTitle} />
      );
    }
    return (
      <div>
        <header className="header header-inverse bg-fixed" style={{ backgroundImage: `url(${bgLaptop})` }}>
          <div className="header-overlay opacity-90" style={{ backgroundColor: '#1F88C1' }} />
          <div className="container text-center">

            <div className="row">
              <div className="col-12 col-lg-8 offset-lg-2">
                <h2>AVAILABLE JOBS</h2>
              </div>
            </div>

          </div>
        </header>
        <section className="section bg-grey pb-0 bb-1">
          <div className="container">
            <div className="col-xs">
              <div className="text-left">
                <div className="accordion" id="accordion-1">
                  {this.renderJobs()}
                </div>
                <br />
                <br />
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Jobs;
