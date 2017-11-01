import React, { Component } from 'react';
import swal from 'sweetalert';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { academySignup } from '../../actions/userActions';
import dataValidators from '../../utils/dataValidators';

/**
 * Dialog content can be scrollable.
 */
export default class AdModal extends Component {
  state = {
    fullname: '',
    email: '',
    select: 0,
    errors: {},
    open: false,
    loadingState: false,
    loadingText: 'Submit',
  };

  componentWillMount() {
    this.handleOpen();
  }

  /**
   * Bind the value of the inputs to state
   * @method onChange
   * @param {any} e
   * @return {void}
   * @memberOf SignupForm
   */
  onChange = (e) => {
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
  validateData = () => {
    const { errors, isValid } = dataValidators.validateAcademyInput(this.state);
    if (!isValid) {
      this.setState({ errors });
    }

    return { errors, isValid };
  }
  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  /**
   * Submit the form
   * @method submitForm
   * @param {object} e
   * @return {void}
   * @memberOf SignupForm
   */
  submitForm = (e) => {
    e.preventDefault();
    this.setState({
      errors: {},
      loadingState: true,
      loadingText: 'Loading',
    });
    this.callProcessForm();
  }

  callProcessForm = () => {
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
            text: 'Your Interest Is Noted!',
            icon: 'success',
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

  resetState = () => {
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
        <Dialog
          title="Get your Ifotta shirt"
          titleStyle={{ color: 'white' }}
          titleClassName="hire-dialog-title"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent
        >
          <div style={{ textAlign: 'center' }}>
            <p>
              <img className="logo" width="350px" height="350px" src="https://arcservices.org/content/uploads/sites/23/2017/02/blue_logo_t-shirt_front.png" alt="get free ifotta shirt" />
            </p>
            <h5>Win A Cap or T-Shirt</h5>
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
              id="select"
              errorText={errors.select}
              value={this.state.select}
              onChange={this.handleSelect}
              autoWidth
            >
              <MenuItem value={0} primaryText="What are you interested in?" disabled />
              <MenuItem value="Hire A Developer" primaryText="Hire A Developer" />
              <MenuItem value="Apply to become a developer" primaryText="Apply to become a developer" />
            </SelectField>
            <br />
          </div>
        </Dialog>
      </span>
    );
  }
}
