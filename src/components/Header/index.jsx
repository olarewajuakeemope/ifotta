import React, { Component } from 'react';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import logo from '../../resources/images/logo.png';

/**
 * Replace with Headerropriate info on completion
 * @class Header
 * @extends {Component}
 */
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  /**
   * @returns {Object} Jsx
   * @memberOf Header
   */
  render() {
    const styles = {
      title: {
        textDecoration: 'none',
        color: 'initial',
      },
      appBar: {
        backgroundColor: 'white',
      },
      logo: {
        width: '5em',
      },
    };
    return (
      <div>
        <AppBar
          style={styles.appBar}
          title={<Link to="/" ><img style={styles.logo} src={logo} alt="site logo" /></Link>}
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
