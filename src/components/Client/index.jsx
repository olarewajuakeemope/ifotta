import React, { Component } from 'react';

/**
 * Replace with Clientropriate info on completion
 * @class Client
 * @extends {Component}
 */
class Client extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  /**
   * @returns {Object} Jsx
   * @memberOf Client
   */
  render() {
    return (

      <div className="container">
        <form className="form-signin">
          <h2 className="form-signin-heading ifotta-text">Please sign in</h2>
          <label htmlFor="inputEmail" className="sr-only">Email address</label>
          <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
          <label htmlFor="inputPassword" className="sr-only">Password</label>
          <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
          <div className="checkbox">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <div style={{ marginLeft: '-1em' }}>
            <button className="btn btn-lg btn-primary btn-block ifotta-text" type="submit">Sign in</button>
          </div>
        </form>

      </div>
    );
  }
}

export default Client;
