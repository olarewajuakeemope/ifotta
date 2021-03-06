import React, { Component } from 'react';
import { Link } from 'react-router';
import Footer from '../Footer';

/**
 * Replace with PaymentGatewayropriate info on completion
 * @class PaymentGateway
 * @extends {Component}
 */
class PaymentGateway extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  /**
   * @returns {Object} Jsx
   * @memberOf PaymentGateway
   */
  render() {
    return (
      <div>
        <main className="main-content">
          <section className="section py-100">
            <div className="container">
              <header className="section-header">
                <small>Oops</small>
                <h2>No Content Found For Payment Page!</h2>
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

export default PaymentGateway;
