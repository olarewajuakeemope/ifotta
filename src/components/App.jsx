import React, { Component } from 'react';
import Header from './Header';
import AdModal from './AdModal';

/**
 * Replace with appropriate info on completion
 * @class App
 * @extends {Component}
 */
class App extends Component {
  state = {
    showModal: false,
  }

  addEvent = (obj, evt, fn) => {
    if (obj.addEventListener) {
      obj.addEventListener(evt, fn, false);
    } else if (obj.attachEvent) {
      obj.attachEvent(`on${evt}`, fn);
    }
  }
  /**
   * @returns {Object} Jsx
   * @memberOf App
   */
  render() {
    const modalComponent = this.state.showModal ? <AdModal /> : '';
    this.addEvent(document, 'mouseout', (e) => {
      e = e || window.event;
      const from = e.relatedTarget || e.toElement;
      if (!from || from.nodeName == 'HTML') {
        this.setState({ showModal: true });
      }
    });
    return (
      <div>
        <Header />
        {modalComponent}
        {this.props.children}
      </div>
    );
  }
}

export default App;
