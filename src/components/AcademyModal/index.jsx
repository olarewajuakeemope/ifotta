import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

/**
 * Dialog content can be scrollable.
 */
export default class Hire extends Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
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
        onClick={this.handleClose}
      />,
    ];

    return (
      <span>
        <RaisedButton className="buttons" onClick={this.handleOpen} label="Ifotta Academy" primary />
        <Dialog
          title="Hire Developer Form"
          titleClassName="hire-dialog-title"
          titleStyle={{ color: 'white' }}
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent
        >
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
              <SelectField
                floatingLabelText="Select a training session"
                floatingLabelStyle={{ fontSize: 10 }}
                value={this.state.value}
                onChange={this.handleChange}
                autoWidth
              >
                <MenuItem value={1} primaryText="Front-End Development training" />
                <MenuItem value={2} primaryText="Back-End Development training" />
                <MenuItem value={3} primaryText="Full Stack" />
                <MenuItem value={3} primaryText="Individual Courses" />
              </SelectField>
              <br />
            </p>
          </div>
        </Dialog>
      </span>
    );
  }
}
