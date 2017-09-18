import React, { Component } from 'react';
import dataValidators from '../../utils/dataValidators';

/**
 * Dialog content can be scrollable.
 */
export default class ContactForm extends Component {
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
    // const { signUpAction } = this.props;
    const { errors, isValid } = this.validateData();
    if (isValid) {
    //   signUpAction(this.state).then(
    //   () => {
    //     this.props.history.push('/documents');
    //   },
    //   ({ response }) => {
    //     this.setState({
    //       errors: response.data,
    //     });
    //   });
    } else {
      this.setState({ errors }, () => {
        // console.log('failing with errors: ', this.state.errors);
      });
    }
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="row">
        <div className="pirate_forms_wrap">
          <form method="post" encType="application/x-www-form-urlencoded" action="/" className="pirate_forms  form_honeypot-on pirate_forms_from_widget-on wordpress-nonce-on pirate-forms-contact-name-on pirate-forms-contact-email-on pirate-forms-contact-subject-on pirate-forms-contact-message-on pirate-forms-contact-submit-on contact-referrer-on">
            <div className="pirate_forms_three_inputs_wrap">
              <div className="col-lg-4 col-sm-4 form_field_wrap">
                <input
                  type="text"
                  id="pirate-forms-contact-name"
                  name="fullname"
                  className="form-control input"
                  placeholder="Your Name"
                  onChange={this.onChange}
                  value={this.state.fullname}
                />
                { errors.fullname && <p className="error text-danger">{errors.fullname}</p> }
              </div>
              <div className="col-lg-4 col-sm-4 form_field_wrap">
                <input
                  type="email"
                  id="pirate-forms-contact-email"
                  name="email"
                  className="form-control input"
                  placeholder="Your Email"
                  onChange={this.onChange}
                  value={this.state.email}
                />
                { errors.email && <p className="error text-danger">{errors.email}</p> }
              </div>
              <div className="col-lg-4 col-sm-4 form_field_wrap">
                <input
                  type="text"
                  id="pirate-forms-contact-subject"
                  name="subject"
                  className="form-control input"
                  placeholder="Subject"
                  onChange={this.onChange}
                  value={this.state.subject}
                />
                { errors.subject && <p className="error text-danger">{errors.subject}</p> }
              </div>
            </div>
            <div className="col-lg-12 col-sm-12 form_field_wrap">
              <textarea
                rows="5"
                cols="30"
                id="pirate-forms-contact-message"
                name="message"
                className="form-control input"
                placeholder="Your message"
                value={this.state.message}
                onChange={this.onChange}
              />
              { errors.message && <p className="error text-danger">{errors.message}</p> }
            </div>
            <div className="col-xs-12 col-sm-6 col-lg-6 form_field_wrap contact_submit_wrap">
              <button
                type="button"
                id="pirate-forms-contact-submit"
                name="pirate-forms-contact-submit"
                className="btn btn-primary custom-button red-btn pirate-forms-submit-button"
                onClick={this.submitForm}
              >
                  Send Message
              </button>
            </div>
          </form>
          <div className="pirate_forms_clearfix" />
        </div>
      </div>
    );
  }
}
