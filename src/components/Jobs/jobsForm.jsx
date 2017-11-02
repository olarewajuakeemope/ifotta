import React, { Component } from 'react';
import swal from 'sweetalert';
import bgLaptop from '../../resources/img/bg-laptop.jpg';
import Footer from '../Footer';
import { contact } from '../../actions/userActions';
import dataValidators from '../../utils/dataValidators';
import whiteLogo from '../../resources/img/ifotta-logo-white.png';

/**
 * Dialog content can be scrollable.
 */
class JobsForm extends Component {
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
    const { errors, isValid } = dataValidators.jobApplicationInput(this.state);
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
      this.resetState();
    } else {
      this.setState({ errors });
    }
  }

  resetState = () => {
    this.setState({
      fullname: '',
      email: '',
      subject: '',
      message: '',
      errors: {},
    });
  }

  render() {
    const { title } = this.props;
    const { errors } = this.state;
    return (
      <div>
        <header className="header header-inverse bg-fixed" style={{ backgroundImage: `url(${bgLaptop})` }}>
          <div className="header-overlay opacity-90" style={{ backgroundColor: '#1F88C1' }} />
          <div className="container text-center">

            <div className="row">
              <div className="col-12 col-lg-8 offset-lg-2">

                <img width="300px" height="150px" src={whiteLogo} alt="logo" />
                <h1>{title} APPLICATION FORM</h1>

              </div>
            </div>

          </div>
        </header>
        <main className="main-content">


          <div className="section">
            <div className="container">

              <div className="row gap-y">
                <div className="col-12 col-md-6">

                  <form action="/" method="POST" data-form="mailer">

                    <div className="form-group">
                      <input
                        className="form-control form-control-lg"
                        type="text"
                        name="fullname"
                        placeholder="Full Name"
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


                    <button className="btn btn-lg btn-primary btn-block" onClick={this.submitForm} type="button">Submit</button>
                  </form>

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

export default JobsForm;
