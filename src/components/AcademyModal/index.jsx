import React, { Component } from 'react';
import PropTypes from 'prop-types';
import swal from 'sweetalert';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import coursesListObject from '../Academy/coursesListObject';
import { academySignup } from '../../actions/userActions';
import dataValidators from '../../utils/dataValidators';

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
      open: false,
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

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
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
    const courseTitle = this.props.title;

    let titleCourseKeys = [];
    if (courseTitle === 'All') {
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

  renderModalButton = () => {
    const { children } = this.props;
    if (children) {
      return children;
    }
    return (
      <span>
        <button className={`btn btn-primary custom-button ${this.props.color}`}>Register</button>
      </span>

    );
  }

  render() {
    const { errors } = this.state;
    const actions = [
      <FlatButton
        label="Cancel"
        primary
        onClick={this.handleClose}
      />,
      <FlatButton
        label={this.state.loadingText}
        primary
        disabled={this.state.loadingState}
        keyboardFocused
        onClick={this.submitForm}
      />,
    ];

    return (
      <span>
        <span onClick={this.handleOpen}>
          {this.renderModalButton()}
        </span>
        <Dialog
          title="Ifotta Academy Form"
          titleClassName="hire-dialog-title"
          titleStyle={{ color: 'white' }}
          className="dialog-form-body"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent
        >
          Registration Form
          <br />
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
        </Dialog>
      </span>
    );
  }
}

AcademyModal.propTypes = {
  color: PropTypes.string,
  children: PropTypes.node,
  title: PropTypes.string,
};

AcademyModal.defaultProps = {
  title: 'All',
  color: '',
  children: false,
};

export default AcademyModal;
