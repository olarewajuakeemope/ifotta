import React from 'react';
import swal from 'sweetalert';
import PropTypes from 'prop-types';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import ExpandTransition from 'material-ui/internal/ExpandTransition';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import Subheader from 'material-ui/Subheader';
import MenuItem from 'material-ui/MenuItem';
import { hireSignup } from '../../actions/userActions';
import dataValidators from '../../utils/dataValidators';

/**
 * A contrived example using a transition between steps
 */
class FormStepper extends React.Component {
  state = {
    loading: false,
    finished: false,
    stepIndex: 0,
    errors: {},
    project: {
      developerSkills: '',
      fullname: '',
      email: '',
      projectSummary: '',
      startDate: null,
      endDate: null,
    },
    ifotta: {
      manager: 0,
      location: 0,
    },
  };

  getStepContent(stepIndex) {
    const { errors } = this.state;
    const startDateError = errors.startDate ? <p className="error text-danger">{errors.startDate}</p> : '';
    const endDateError = errors.endDate ? <p className="error text-danger">{errors.endDate}</p> : '';
    switch (stepIndex) {
      case 0:
        return (
          <div>
            Tell us about your Project
            <br />
            <TextField
              name="fullname"
              value={this.state.project.fullname}
              onChange={this.handleTextInput}
              errorText={errors.fullname}
              hintText="Full name"
              floatingLabelText="Enter your name"
            /><br />
            <TextField
              name="email"
              value={this.state.project.email}
              onChange={this.handleTextInput}
              errorText={errors.email}
              hintText="Your email"
              floatingLabelText="Enter your email"
            /><br />
            <TextField
              name="projectSummary"
              value={this.state.project.projectSummary}
              onChange={this.handleTextInput}
              errorText={errors.projectSummary}
              hintText="Project summary"
              floatingLabelText="Enter your project detail here"
              multiLine
              rows={2}
            /><br />
            <Subheader style={{ textAlign: 'left', paddingLeft: 0, marginLeft: 0, marginTop: 10 }}>Project Period</Subheader>
            {startDateError}
            <DatePicker
              name="startDate"
              value={this.state.project.startDate}
              onChange={this.handleStartDate}
              hintText="Project Start Date"
            /><br />
            {endDateError}
            <DatePicker
              name="endDate"
              value={this.state.project.endDate}
              onChange={this.handleEndDate}
              hintText="Project end Date"
            /><br />
          </div>
        );
      case 1:
        return (
          <div>
            <p>What developer skills do you need?</p>
            <TextField
              name="developerSkills"
              value={this.state.project.developerSkills}
              onChange={this.handleTextInput}
              errorText={errors.developerSkills}
              style={{ marginTop: 0 }}
              floatingLabelText="Enter your skill requirements"
            />

          </div>
        );
      case 2:
        return (
          <div>
            How do you want to Collaborate with Us?
            <br />
            <SelectField
              floatingLabelText="Should we manage your project?"
              value={this.state.ifotta.manager}
              onChange={this.handleSelectManager}
              errorText={errors.manager}
              autoWidth
            >
              <MenuItem value={0} primaryText="Should we manage your project?" disabled />
              <MenuItem value={1} primaryText="Yes" />
              <MenuItem value={2} primaryText="No" />
            </SelectField>
            <br />

            <SelectField
              floatingLabelText="Where would our developer work from?"
              value={this.state.ifotta.location}
              onChange={this.handleSelectLocation}
              errorText={errors.location}
              autoWidth
            >
              <MenuItem value={0} primaryText="Where would our developer work from?" disabled />
              <MenuItem value={1} primaryText="Remotely from Ifotta" />
              <MenuItem value={2} primaryText="Locally with you" />
              <MenuItem value={3} primaryText="Both" />
            </SelectField>
            <br />
          </div>
        );
      default:
        return 'Please fill the hire developer form';
    }
  }
  /**
   * Validates useer's data before making
   * post request
   * @method validateData
   * @returns {boolean} -
   * @memberOf SignupForm
   */
  validateData() {
    const { stepIndex } = this.state;
    let validateResult = {
      errors: null,
      isValid: true,
    };
    if (stepIndex === 0) {
      const { errors, isValid } = dataValidators.hireFormInput1(this.state.project);
      validateResult = { errors, isValid };
    } else if (stepIndex === 1) {
      const { errors, isValid } = dataValidators.hireFormInput2(this.state.project);
      validateResult = { errors, isValid };
    } else {
      const { errors, isValid } = dataValidators.hireFormInput3(this.state.ifotta);
      validateResult = { errors, isValid };
    }
    const { errors, isValid } = validateResult;
    if (!isValid) {
      this.setState({ errors });
    }
    return { errors, isValid };
  }

  dummyAsync = (cb) => {
    this.setState({ loading: true }, () => {
      this.asyncTimer = setTimeout(cb, 500);
    });
  };

  handleNext = () => {
    this.setState({
      errors: {},
    });
    const { errors, isValid } = this.validateData();
    if (isValid) {
      const { stepIndex } = this.state;
      if (!this.state.loading) {
        this.dummyAsync(() => this.setState({
          loading: false,
          stepIndex: stepIndex + 1,
          finished: stepIndex >= 2,
        }));
      }
      if (stepIndex >= 2) {
        hireSignup(this.state)
          .then(() => {
            swal({
              title: 'Thank You!',
              text: 'Your developer request will be reviewed!',
              icon: 'success',
            });
            this.props.handleClose();
          });
      }
    } else {
      this.setState({ errors });
    }
  };

  handlePrev = () => {
    const { stepIndex } = this.state;
    if (!this.state.loading) {
      this.dummyAsync(() => this.setState({
        loading: false,
        stepIndex: stepIndex - 1,
      }));
    }
  };

  handleTextInput = (event) => {
    const { name, value } = event.target;
    this.setState({
      project: Object.assign(this.state.project, { [name]: value }),
    });
  };

  handleStartDate = (event, date) => this.setState({
    project: Object.assign(this.state.project, { startDate: date }),
  });

  handleEndDate = (event, date) => this.setState({
    project: Object.assign(this.state.project, { endDate: date }),
  });

  handleSelectLocation = (event, index, value) => this.setState({
    ifotta: Object.assign(this.state.ifotta, { location: value }),
  });

  handleSelectManager = (event, index, value) => this.setState({
    ifotta: Object.assign(this.state.ifotta, { manager: value }),
  });

  renderContent() {
    const { finished, stepIndex } = this.state;
    const contentStyle = { margin: '0 16px', overflow: 'hidden' };

    if (finished) {
      return (
        <div style={contentStyle}>
          <p>
            <a
              href="/"
              onClick={(event) => {
                event.preventDefault();
                this.setState({ stepIndex: 0, finished: false });
              }}
            >
              Click here
            </a> to reset the example.
          </p>
        </div>
      );
    }

    return (
      <div style={contentStyle}>
        <div>{this.getStepContent(stepIndex)}</div>
        <div style={{ marginTop: 24, marginBottom: 12 }}>
          <FlatButton
            label="Back"
            disabled={stepIndex === 0}
            onClick={this.handlePrev}
            style={{ marginRight: 12 }}
          />
          <RaisedButton
            label={stepIndex === 2 ? 'Finish' : 'Next'}
            primary
            onClick={this.handleNext}
          />
        </div>
      </div>
    );
  }

  render() {
    const { loading, stepIndex } = this.state;

    return (
      <div style={{ width: '100%', maxWidth: 700, margin: 'auto' }}>
        <Stepper activeStep={stepIndex}>
          <Step>
            <StepLabel>Your Project Details</StepLabel>
          </Step>
          <Step>
            <StepLabel>Developer Details</StepLabel>
          </Step>
          <Step>
            <StepLabel>Collaboration Details</StepLabel>
          </Step>
        </Stepper>
        <ExpandTransition loading={loading} open>
          {this.renderContent()}
        </ExpandTransition>
      </div>
    );
  }
}

FormStepper.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

export default FormStepper;
