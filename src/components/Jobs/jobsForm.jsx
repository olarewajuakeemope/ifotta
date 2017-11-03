import React, { Component } from 'react';
import swal from 'sweetalert';
import { client } from 'filestack-react';
import PropTypes from 'prop-types';
import bgLaptop from '../../resources/img/bg-laptop.jpg';
import Footer from '../Footer';
import { contact } from '../../actions/userActions';
import dataValidators from '../../utils/dataValidators';
import whiteLogo from '../../resources/img/ifotta-logo-white.png';

/**
 * Dialog content can be scrollable.
 */
class JobsForm extends Component {
  /**
   * Creates an instance of SignupForm.
   * @param {any} props
   * @memberOf SignupForm
   */
  constructor(props) {
    super(props);
    this.state = {
      fullname: '',
      email: '',
      phone: '',
      address: '',
      loading: false,
      submitText: 'Submit',
      resumeObj: {
        url: '',
        filename: '',
        error: false,
      },
      picsObj: {
        url: '',
        filename: '',
        error: false,
      },
      errors: {},
      renderDropZone: () => (
        <p>
          Click Here To Upload Your Picture.
        </p>
      ),
    };
    this.filestack = client.init('AUfz0DAtlRXaYz33tEZosz');
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.validateData = this.validateData.bind(this);
  }

  /**
   * Bind the value of the inputs to state
   * @method onChange
   * @param {any} e
   * @return {void}
   * @memberOf SignupForm
   */
  onChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  openPicsPicker = () => {
    this.filestack.pick({
      accept: 'image/*',
      maxSize: 5 * 1024 * 1024,
      fromSources: [
        'local_file_system',
        'imagesearch',
        'facebook',
        'instagram',
        'dropbox',
      ],
    }).then((response) => {
      const { filename, url } = response.filesUploaded[0];
      this.setState({
        picsObj: {
          url,
          filename,
          error: false,
        },
        renderDropZone: () => (
          <img
            src={url}
            style={{ width: '100%', height: '100%' }}
            alt="Your Uploaded Profile Pic"
          />
        ),
      });
    })
      .catch((error) => {
        this.setState({
          picsObj: { error },
        });
      });
  }

  openCVPicker = () => {
    this.filestack.pick({
      accept: ['.pdf', '.docx', '.doc'],
      maxSize: 5 * 1024 * 1024,
      fromSources: [
        'local_file_system',
        'imagesearch',
        'facebook',
        'instagram',
        'dropbox',
      ],
    }).then((response) => {
      const { filename, url } = response.filesUploaded[0];
      this.setState({
        resumeObj: {
          url,
          filename,
          error: false,
        },
      });
    })
      .catch((error) => {
        this.setState({
          resumeObj: { error },
        });
      });
  }

  /**
   * Validates useer's data before making
   * post request
   * @method validateData
   * @returns {boolean} -
   * @memberOf SignupForm
   */
  validateData() {
    const { errors, isValid } = dataValidators.jobApplicationInput(this.state);
    if (!isValid) {
      this.setState({ errors });
    }

    return { errors, isValid };
  }

  isFormProcessing = (state) => {
    if (state) {
      this.setState({
        loading: true,
        submitText: 'Processing...',
      });
    } else {
      this.setState({
        loading: false,
        submitText: 'Submit',
      });
    }
  }

  /**
   * Submit the form
   * @method submitForm
   * @param {object} e
   * @return {void}
   * @memberOf SignupForm
   */
  submitForm(e) {
    e.preventDefault();
    this.setState({
      errors: {},
    });
    const { errors, isValid } = this.validateData();
    if (isValid) {
      this.isFormProcessing(true);
      contact(this.state)
        .then(() => {
          swal({
            title: 'Your Application has been recieved',
            text: 'We will review your application and get back to you',
            icon: 'success',
          });
          this.resetState();
        })
        .catch((error) => {
          const { message } = error;
          swal({
            title: 'Oops Something Went Wrong!',
            text: message,
            icon: 'error',
          });
          this.isFormProcessing(false);
        });
    } else {
      this.setState({ errors });
    }
  }

  resetState = () => {
    this.setState({
      fullname: '',
      email: '',
      phone: '',
      address: '',
      loading: false,
      submitText: 'Submit',
      resumeObj: {
        url: '',
        filename: '',
        error: false,
      },
      picsObj: {
        url: '',
        filename: '',
        error: false,
      },
      errors: {},
      renderDropZone: () => (
        <p>
          Click Here To Upload Your Picture.
        </p>
      ),
    });
  }

  render() {
    const { title } = this.props;
    const {
      errors,
      email,
      phone,
      address,
      fullname,
      resumeObj,
      picsObj,
      renderDropZone,
      loading,
      submitText,
    } = this.state;
    return (
      <div>
        <header className="header header-inverse bg-fixed" style={{ backgroundImage: `url(${bgLaptop})` }}>
          <div className="header-overlay opacity-90" style={{ backgroundColor: '#1F88C1' }} />
          <div className="container text-center">

            <div className="row">
              <div className="col-12 col-lg-8 offset-lg-2">

                <img width="300px" height="150px" src={whiteLogo} alt="logo" />
                <h1>{title} APPLICATION FORM</h1>

              </div>
            </div>

          </div>
        </header>
        <main className="main-content">


          <div className="section">
            <div className="container">

              <div className="row gap-y">
                <div className="col-12 col-md-12">
                  <h3>PLEASE FILL THE {title} APPLICATION FORM BELOW</h3>
                </div>
                <div className="col-12 col-md-6">

                  <form action="/" method="POST" data-form="mailer">

                    <div className="form-group">
                      <div
                        style={{width: '10em', height: '10em', border: '1px solid #CCCCCC', cursor: 'pointer' }}
                        onClick={this.openPicsPicker}
                      >
                        {renderDropZone()}
                      </div>
                      { errors.photo && <p className="error text-danger">{errors.photo}</p> }
                      { picsObj.error && <p className="error text-danger">{picsObj.error}</p> }
                    </div>

                    <div className="form-group">
                      <button className="btn btn-default" onClick={this.openCVPicker} type="button">Upload Resume</button>
                      <span>  {resumeObj.filename}</span>
                      { errors.resume && <p className="error text-danger">{errors.resume}</p> }
                      { resumeObj.error && <p className="error text-danger">{resumeObj.error}</p> }
                    </div>

                    <div className="form-group">
                      <input
                        className="form-control form-control-lg"
                        type="text"
                        name="fullname"
                        placeholder="Full Name"
                        onChange={this.onChange}
                        value={fullname}
                      />
                      { errors.fullname && <p className="error text-danger">{errors.fullname}</p> }
                    </div>

                    <div className="form-group">
                      <input
                        className="form-control form-control-lg"
                        type="email"
                        name="email"
                        placeholder="Your Email Address"
                        onChange={this.onChange}
                        value={email}
                      />
                      { errors.email && <p className="error text-danger">{errors.email}</p> }
                    </div>

                    <div className="form-group">
                      <input
                        className="form-control form-control-lg"
                        type="text"
                        name="phone"
                        placeholder="Your Phone Number"
                        onChange={this.onChange}
                        value={phone}
                      />
                      { errors.phone && <p className="error text-danger">{errors.phone}</p> }
                    </div>

                    <div className="form-group">
                      <input
                        className="form-control form-control-lg"
                        type="text"
                        name="address"
                        placeholder="Your Home Address"
                        onChange={this.onChange}
                        value={address}
                      />
                      { errors.address && <p className="error text-danger">{errors.address}</p> }
                    </div>

                    <button
                      className="btn btn-lg btn-primary btn-block"
                      onClick={this.submitForm}
                      type="button"
                      disabled={loading}
                    >
                      {submitText}
                    </button>
                  </form>

                </div>
              </div>


            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

JobsForm.propTypes = {
  title: PropTypes.string.isRequired,
};

export default JobsForm;
