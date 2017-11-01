import React, { Component } from 'react';
import PropTypes from 'prop-types';
import swal from 'sweetalert';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import coursesListObject from '../Academy/coursesListObject';
import { academySignup } from '../../actions/userActions';
import dataValidators from '../../utils/dataValidators';
import bgLaptop from '../../resources/img/bg-laptop.jpg';
import whiteLogo from '../../resources/img/ifotta-logo-white.png';
import Footer from '../Footer';

/**
 * Dialog content can be scrollable.
 */
class AcademyModal extends Component {
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
      select: 0,
      errors: {},
      loadingState: false,
      loadingText: 'Submit',
    };
    this.onChange = this.onChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.validateData = this.validateData.bind(this);
    this.resetState = this.resetState.bind(this);
  }


  /**
   * Bind the value of the inputs to state
   * @method onChange
   * @param {any} e
   * @return {void}
   * @memberOf SignupForm
   */
  onChange(e) {
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
    const { errors, isValid } = dataValidators.validateAcademyInput(this.state);
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
      loadingState: true,
      loadingText: 'Loading',
    });
    this.processForm();
  }

  processForm = async () => {
    const { errors, isValid } = await this.validateData();
    if (isValid) {
      academySignup(this.state)
        .then(() => {
          this.resetState();
          swal({
            title: 'Thank You!',
            text: 'You have successfully signed Up!',
            icon: 'success',
          });
        })
        .catch((error) => {
          const { message } = error;
          swal({
            title: 'Oops Something Went Wrong!',
            text: message,
            icon: 'error',
          });
          this.setState({
            loadingState: false,
            loadingText: 'Submit',
          });
        });
    } else {
      this.setState({
        errors,
        loadingState: false,
        loadingText: 'Submit',
      });
    }
  }

  resetState() {
    this.setState({
      fullname: '',
      email: '',
      select: 0,
      errors: {},
      open: false,
      loadingState: false,
      loadingText: 'Submit',
    });
  }
  /**
   * Funtion to handle change on Select button
   * @param {Object} event - browser keyboard input event
   * @returns {None} none
   * @memberof AcademyModal
   */
  handleSelect = (event, index, value) => {
    this.setState({ select: value });
  };

  renderSelectContent = () => {
    const courseTitle = this.props.params.title;

    let titleCourseKeys = [];
    if (!courseTitle) {
      titleCourseKeys = Object.keys(coursesListObject);
    } else {
      titleCourseKeys = [
        courseTitle,
      ];
    }

    const coursesRowArray = titleCourseKeys.map((course, index) => {
      const { title } = coursesListObject[course];
      const indexKey = index + 9;
      return (
        <MenuItem
          key={`${indexKey}${title}`}
          value={title}
          primaryText={title}
          selected={titleCourseKeys.length === 1}
        />
      );
    });

    return coursesRowArray;
  }

  render() {
    const { errors } = this.state;

    return (
      <div>
        <header className="header header-inverse" style={{ backgroundImage: `url(${bgLaptop})` }}>
          <div className="header-overlay opacity-90" style={{ backgroundColor: '#1F88C1' }} />
          <div className="container text-center">

            <div className="row">
              <div className="col-12 col-lg-8 offset-lg-2">

                <img width="300px" height="150px" src={whiteLogo} alt="logo" />
                <h2>Ifotta Academy Form</h2>
              </div>
            </div>

          </div>
        </header>

        <br />
        <div className="container">
          <div className="row pl-4">
            <div>
              <TextField
                hintText="Your name"
                floatingLabelText="Enter your name"
                name="fullname"
                id="fullname"
                errorText={errors.fullname}
                value={this.state.fullname}
                onChange={this.onChange}
              /><br />
              <TextField
                hintText="Your email"
                floatingLabelText="Enter your email"
                name="email"
                id="email"
                errorText={errors.email}
                value={this.state.email}
                onChange={this.onChange}
              /><br />
              <SelectField
                floatingLabelText="Select a training session"
                floatingLabelStyle={{ fontSize: 15 }}
                id="select"
                errorText={errors.select}
                value={this.state.select}
                onChange={this.handleSelect}
                autoWidth
              >
                <MenuItem value={0} primaryText="Select a training session" disabled />
                {this.renderSelectContent()}
              </SelectField>
              <br />
              <br />
              <br />
            </div>

          </div>
          <div className="row pl-4">
            <FlatButton
              label={this.state.loadingText}
              primary
              disabled={this.state.loadingState}
              keyboardFocused
              onClick={this.submitForm}
            />
          </div>
          <br />
          <br />
          <br />
          <Footer />
        </div>
      </div>
    );
  }
}

AcademyModal.propTypes = {
  params: PropTypes.Object,
};

AcademyModal.defaultProps = {
  params: false,
};

export default AcademyModal;
