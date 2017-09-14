import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

/**
 * Dialog content can be scrollable.
 */
export default class AdModal extends React.Component {
  state = {
    open: false,
  };

  componentWillMount() {
    this.handleOpen();
  }

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
        <Dialog
          title="Scrollable Dialog"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent
        >
          <div style={{ textAlign: 'center' }}>
            <h5>Get A Free ifotta Shirt</h5>
            <img className="logo" src="https://arcservices.org/content/uploads/sites/23/2017/02/blue_logo_t-shirt_front.png" alt="get free ifotta shirt" />
          </div>
        </Dialog>
      </span>
    );
  }
}
