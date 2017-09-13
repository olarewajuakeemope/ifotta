import React, { Component } from 'react';

/**
 * Replace with appropriate info on completion
 * @class App
 * @extends {Component}
 */
class App extends Component {
  /**
   * @returns {Object} Jsx
   * @memberOf App
   */
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default App;