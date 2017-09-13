import React, { Component } from 'react';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import logo from '../../resources/images/logo.png'

/**
 * Replace with Headerropriate info on completion
 * @class Header
 * @extends {Component}
 */
class Header extends Component {
  /**
   * @returns {Object} Jsx
   * @memberOf Header
   */
  render() {
    const styles = {
      title: {
        textDecoration: 'none',
        color: 'initial'
      },
      appBar: {
        backgroundColor: 'white'
      },
      logo: {
        width: '5em'
      },
    };
    return (
      <div>
        <AppBar
          style={styles.appBar}
          title={<span ><img style={styles.logo} src={logo} alt="site logo"/></span>}
          iconElementRight={
            <div>
             <FlatButton>
              <Link
                style={styles.title}
                to="/about"
              >
               About
              </Link>
            </FlatButton>
            <FlatButton>
              <Link
                style={styles.title}
                to="/dfghjk"
              >
               Contact
              </Link>
            </FlatButton>
        </div>
        }
         />
       </div>
    );
  }
}

export default Header;
