import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import dataValidators from '../../utils/dataValidators';

/**
 * Dialog content can be scrollable.
 */
export default class AcademyModal extends Component {
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
    };
    this.onChange = this.onChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
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
  /**
   * Funtion to handle change on Select button
   * @param {Object} event - browser keyboard input event
   * @returns {None} none
   * @memberof AcademyModal
   */
  handleSelect = (event, index, value) => {
    this.setState({ select: value });
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary
        keyboardFocused
        onClick={this.submitForm}
      />,
    ];

    return (
      <span>
        <RaisedButton className="buttons" onClick={this.handleOpen} label="Ifotta Academy" primary />
        <Dialog
          title="AcademyModal Developer Form"
          titleClassName="hire-dialog-title"
          titleStyle={{ color: 'white' }}
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent
        >
          Tell us about your Project
          <br />
          <TextField
            hintText="Your name"
            floatingLabelText="Enter your name"
            name="fullname"
            id="fullname"
            value={this.state.fullname}
            onChange={this.onChange}
          /><br />
          <TextField
            hintText="Your email"
            floatingLabelText="Enter your email"
            name="email"
            id="email"
            value={this.state.email}
            onChange={this.onChange}
          /><br />
          <SelectField
            floatingLabelText="Select a training session"
            floatingLabelStyle={{ fontSize: 15 }}
            id="select"
            value={this.state.select}
            onChange={this.handleSelect}
            autoWidth
          >
            <MenuItem value={0} primaryText="Select a training session" disabled />
            <MenuItem value={1} primaryText="Front-End Development training" />
            <MenuItem value={2} primaryText="Back-End Development training" />
            <MenuItem value={3} primaryText="Full Stack" />
            <MenuItem value={3} primaryText="Individual Courses" />
          </SelectField>
          <br />
        </Dialog>
      </span>
    );
  }
}
