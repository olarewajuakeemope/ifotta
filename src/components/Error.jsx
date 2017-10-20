import React, { Component } from 'react';
import { Link } from 'react-router';
import Footer from './Footer';

/**
 * Replace with ErrorPageropriate info on completion
 * @class ErrorPage
 * @extends {Component}
 */
class ErrorPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  /**
   * @returns {Object} Jsx
   * @memberOf ErrorPage
   */
  render() {
    return (
      <div>
        <main className="main-content">
          <section className="section py-100">
            <div className="container">
              <header className="section-header">
                <small>Oops</small>
                <h2>Page Not Found!</h2>
                <hr />
                <p className="lead">Seems you're looking for something that doesn't exist.</p>
              </header>

              <br />
              <p className="text-center"><Link className="btn btn-primary" to="/">Retrun home</Link></p>

            </div>
          </section>


        </main>
        <Footer />
      </div>
    );
  }
}

export default ErrorPage;
