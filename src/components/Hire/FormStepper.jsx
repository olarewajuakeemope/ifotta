import React from 'react';
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
import dataValidators from '../../utils/dataValidators';

/**
 * A contrived example using a transition between steps
 */
class FormStepper extends React.Component {
  state = {
    loading: false,
    finished: false,
    stepIndex: 0,
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
              hintText="Full name"
              floatingLabelText="Enter your name"
            /><br />
            <TextField
              name="email"
              value={this.state.project.email}
              onChange={this.handleTextInput}
              hintText="Your email"
              floatingLabelText="Enter your email"
            /><br />
            <TextField
              name="projectSummary"
              value={this.state.project.projectSummary}
              onChange={this.handleTextInput}
              hintText="Project summary"
              floatingLabelText="Enter your project detail here"
              multiLine
              rows={2}
            /><br />
            <Subheader style={{ textAlign: 'left', paddingLeft: 0, marginLeft: 0, marginTop: 10 }}>Project Period</Subheader>
            <DatePicker
              name="startDate"
              value={this.state.project.startDate}
              onChange={this.handleStartDate}
              hintText="Project Start Date"
            /><br />
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

  dummyAsync = (cb) => {
    this.setState({ loading: true }, () => {
      this.asyncTimer = setTimeout(cb, 500);
    });
  };

  handleNext = () => {
    const { stepIndex } = this.state;
    if (!this.state.loading) {
      this.dummyAsync(() => this.setState({
        loading: false,
        stepIndex: stepIndex + 1,
        finished: stepIndex >= 2,
      }));
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
      ifotta: Object.assign(this.state.project, { [name]: value }),
    });
  };

  handleStartDate = (event, date) => this.setState({
    ifotta: Object.assign(this.state.project, { startDate: date }),
  });

  handleEndDate = (event, date) => this.setState({
    ifotta: Object.assign(this.state.project, { endDate: date }),
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
              href="#"
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

export default FormStepper;
