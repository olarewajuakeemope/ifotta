import React, { Component } from 'react';
import bgLaptop from '../../resources/img/bg-laptop.jpg';
import Footer from '../Footer';

/**
 * Replace with Contactropriate info on completion
 * @class Contact
 * @extends {Component}
 */
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  /**
   * @returns {Object} Jsx
   * @memberOf Contact
   */
  render() {
    return (
      <div>
        <header className="header header-inverse bg-fixed" style={{ backgroundImage: `url(${bgLaptop})` }} data-overlay="8">
          <div className="container text-center">

            <div className="row">
              <div className="col-12 col-lg-8 offset-lg-2">

                <h1 style={{ fonstSize: '90px' }}>ifotta</h1>

              </div>
            </div>

          </div>
        </header>
        <main className="main-content">


          <section className="section">
            <div className="container">

              <h2 className="text-center">Contact Us</h2>
              <p className="text-center">Let's Get In Touch</p>

              <br /><br />

              <div className="row">
                <div className="col-12 col-lg-6 offset-lg-3">

                  <form className="p-30 bg-gray rounded" action="assets/php/sendmail.php" method="POST" data-form="mailer">
                    <div className="alert alert-success">We received your message and will contact you back soon.</div>

                    <div className="row">
                      <div className="form-group col-12 col-md-6">
                        <input className="form-control form-control-lg" type="text" name="name" placeholder="Your Name" />
                      </div>

                      <div className="form-group col-12 col-md-6">
                        <input className="form-control form-control-lg" type="email" name="email" placeholder="Your Email Address" />
                      </div>
                    </div>


                    <div className="form-group">
                      <textarea className="form-control form-control-lg" rows="4" placeholder="Your Message" name="message" />
                    </div>

                    <div className="text-center">
                      <button className="btn btn-lg btn-primary" type="submit">Submit Enquiry</button>
                    </div>
                  </form>

                </div>
              </div>

            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Contact;
