import React, { Component } from 'react';
import { Link } from 'react-router';
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

  renderModalButton = () => {
    const { children } = this.props;
    if (children) {
      return children;
    }
    return (
      <span>
        <span className="ifotta-no-display-mobile">
          <a className={`btn ${this.props.color} btn-xl btn-round btn-white w-300 mr-12 hidden-sm-down`} href="#">Hire A Developer</a>
          <a className={`btn ${this.props.color} btn-lg btn-round btn-white w-250 hidden-md-up`} href="#">Hire A Developer</a>
        </span>
        <span className="ifotta-display-mobile">
          <Link className={`btn ${this.props.color} btn-xl btn-round btn-white w-300 mr-12 hidden-sm-down`} to="hireForm">Hire A Developer</Link>
          <Link className={`btn ${this.props.color} btn-lg btn-round btn-white w-250 hidden-md-up`} to="hireForm">Hire A Developer</Link>
        </span>
      </span>

    );
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary
        onClick={this.handleClose}
      />,
    ];

    return (
      <span>
        <span onClick={this.handleOpen}>
          {this.renderModalButton()}
        </span>
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
  children: PropTypes.node.isRequired,
};
