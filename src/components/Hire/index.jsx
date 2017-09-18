import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
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
        <span><button className={`btn btn-primary custom-button ${this.props.color}`} onClick={this.handleOpen}>Hire A Developer</button></span>
        <Dialog
          title="Hire Developer Form"
          titleClassName="hire-dialog-title"
          titleStyle={{ color: 'white' }}
          className="dialog-form-body"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent
        >
          <FormStepper handleClose={this.handleClose} />
        </Dialog>
      </span>
    );
  }
}

Hire.propTypes = {
  color: PropTypes.string.isRequired,
};
