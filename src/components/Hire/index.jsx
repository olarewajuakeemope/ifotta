import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import FormStepper from './FormStepper';

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
        <RaisedButton className="buttons" onClick={this.handleOpen} label="Hire A Developer" primary />
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
          <FormStepper />
        </Dialog>
      </span>
    );
  }
}
