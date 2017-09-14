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

/**
 * A contrived example using a transition between steps
 */
class FormStepper extends React.Component {
  state = {
    loading: false,
    finished: false,
    stepIndex: 0,
    value: 0,
  };

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <div>
            <p>
            Tell us about your Project
            </p>
            <p>
              <TextField
                hintText="Your name"
                floatingLabelText="Enter your name"
              /><br />
              <TextField
                hintText="Your email"
                floatingLabelText="Enter your email"
              /><br />
              <TextField
                hintText="Project summary"
                floatingLabelText="Enter your project detail here"
                multiLine
                rows={2}
              /><br />
              <Subheader style={{ textAlign: 'left', paddingLeft: 0, marginLeft: 0, marginTop: 10 }}>Project Period</Subheader>
              <DatePicker hintText="Project Start Date" /><br />
              <DatePicker hintText="Project end Date" /><br />
            </p>
          </div>
        );
      case 1:
        return (
          <div>
            <p>What developer skills do you need?</p>
            <TextField style={{ marginTop: 0 }} floatingLabelText="Enter your skill requirements" />

          </div>
        );
      case 2:
        return (
          <div>
            <p>
            How do you want to Collaborate with Us?
            </p>
            <SelectField
              floatingLabelText="Should we manage your project?"
              floatingLabelStyle={{ fontSize: 15 }}
              value={this.state.value}
              onChange={this.handleChange}
              autoWidth
            >
              <MenuItem value={1} primaryText="Yes" />
              <MenuItem value={2} primaryText="No" />
            </SelectField>
            <br />

            <SelectField
              floatingLabelText="Where would our developer work from?"
              floatingLabelStyle={{ fontSize: 15 }}
              value={this.state.value}
              onChange={this.handleChange}
              autoWidth
            >
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


  handleChange = (event, index, value) => this.setState({ value });

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
