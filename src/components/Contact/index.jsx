import React, { Component } from 'react';
import swal from 'sweetalert';
import bgLaptop from '../../resources/img/bg-laptop.jpg';
import Footer from '../Footer';
import { contact } from '../../actions/userActions';
import dataValidators from '../../utils/dataValidators';

/**
 * Dialog content can be scrollable.
 */
class Contact extends Component {
  /**
   * Creates an instance of SignupForm.
   * @param {any} props
   * @memberOf SignupForm
   */
  constructor(props) {
    super(props);
    this.state = {
      fullname: '',
      email: '',
      subject: '',
      message: '',
      errors: {},
    };
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.validateData = this.validateData.bind(this);
  }


  /**
   * Bind the value of the inputs to state
   * @method onChange
   * @param {any} e
   * @return {void}
   * @memberOf SignupForm
   */
  onChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  /**
   * Validates useer's data before making
   * post request
   * @method validateData
   * @returns {boolean} -
   * @memberOf SignupForm
   */
  validateData() {
    const { errors, isValid } = dataValidators.contactInput(this.state);
    if (!isValid) {
      this.setState({ errors });
    }

    return { errors, isValid };
  }

  /**
   * Submit the form
   * @method submitForm
   * @param {object} e
   * @return {void}
   * @memberOf SignupForm
   */
  submitForm(e) {
    e.preventDefault();
    this.setState({
      errors: {},
    });
    const { errors, isValid } = this.validateData();
    if (isValid) {
      contact(this.state)
        .then(() => {
          swal({
            title: 'Thank You!',
            text: 'Your message has been delivered!',
            icon: 'success',
          });
        });
    } else {
      this.setState({ errors });
    }
  }

  render() {
    const { errors } = this.state;
    return (
      <div>
        <header className="header header-inverse bg-fixed" style={{ backgroundImage: `url(${bgLaptop})` }} data-overlay="8">
          <div className="container text-center">

            <div className="row">
              <div className="col-12 col-lg-8 offset-lg-2">

                <h1 style={{ fontSize: '90px' }}>ifotta</h1>

              </div>
            </div>

          </div>
        </header>
        <main className="main-content">


          <div className="section">
            <div className="container">

              <div className="row gap-y">
                <div className="col-12 col-md-6">
                  <h1>Contact Us</h1>

                  <form action="/" method="POST" data-form="mailer">
                    <div className="alert alert-success">We received your message and will contact you back soon.</div>

                    <div className="form-group">
                      <input
                        className="form-control form-control-lg"
                        type="text"
                        name="fullname"
                        placeholder="Your Name"
                        onChange={this.onChange}
                        value={this.state.fullname}
                      />
                      { errors.fullname && <p className="error text-danger">{errors.fullname}</p> }
                    </div>

                    <div className="form-group">
                      <input
                        className="form-control form-control-lg"
                        type="email"
                        name="email"
                        placeholder="Your Email Address"
                        onChange={this.onChange}
                        value={this.state.email}
                      />
                      { errors.email && <p className="error text-danger">{errors.email}</p> }
                    </div>

                    <div className="form-group">
                      <input
                        className="form-control form-control-lg"
                        type="subject"
                        name="subject"
                        placeholder="Subject"
                        onChange={this.onChange}
                        value={this.state.subject}
                      />
                      { errors.subject && <p className="error text-danger">{errors.subject}</p> }
                    </div>

                    <div className="form-group">
                      <textarea
                        className="form-control form-control-lg"
                        name="message"
                        rows="4"
                        placeholder="Your Message"
                        value={this.state.message}
                        onChange={this.onChange}
                      />
                      { errors.message && <p className="error text-danger">{errors.message}</p> }
                    </div>


                    <button className="btn btn-lg btn-primary btn-block" onClick={this.submitForm} type="button">Send Enquiry</button>
                  </form>

                </div>


                <div className="col-12 col-md-5 offset-md-1">
                  <div className="bg-grey h-full p-20">
                    <p><strong>Give us a call or stop by our door anytime, we try to answer all enquiries within 24 hours on business days.</strong></p>
                    <p><em>We are open from 9am — 5pm week days.</em></p>

                    <hr className="w-80" />
                    <p className="lead">Water Front Plaza. 270, Ozumba Mbadiwe Street,<br />Victoria Island,
Lagos.</p>

                    <div>
                      <span className="d-inline-block w-20 text-lighter" title="Email">
                        <p className="social-linkedin" href="#"><i className="fa fa-envelope-o" /></p>
                      </span>
                      <span className="fs-14">info@ifotta.com</span>
                    </div>

                    <div>
                      <span className="d-inline-block w-20 text-lighter" title="Phone">
                        <p className="social-linkedin" href="#"><i className="fa fa-phone" /></p>
                      </span>
                      <span className="fs-14">0806 422 7106</span>
                    </div>

                  </div>
                </div>
              </div>


            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Contact;
