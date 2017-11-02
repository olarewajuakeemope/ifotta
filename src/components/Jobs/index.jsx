import React, { Component } from 'react';
import { Link } from 'react-router';
import JobsForm from './jobsForm';
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
        <main className="main-content">
          <section className="section py-100">
            <div className="container">
              <header className="section-header">
                <small>Oops</small>
                <h2>No Content Found!</h2>
                <hr />
                <p className="lead">Seems you're yet to provide content for this page.</p>
              </header>

              <br />
              <p className="text-center"><Link className="btn btn-primary" to="/">Return home</Link></p>

            </div>
          </section>


        </main>
        <Footer />
      </div>
    );
  }
}

export default Jobs;
