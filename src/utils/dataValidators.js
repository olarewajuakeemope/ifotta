import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

/**
 * Validates post datas
 * @class dataValidators
 */
class dataValidators {
  /**
   * Validates the user inputs when trying
   * to save a new document
   * @method documentPostData
   * @param {object} data
   * @return {object} - errors
   * @return {boolean} - isValid
   * @memberOf dataValidators
   */
  documentsPostData(data) {
    this.errors = {};
    if (data.title === undefined || isEmpty((data.title).toString())) {
      this.errors.title = 'Title field is required';
    }
    if (data.content === undefined || isEmpty(data.content.toString())) {
      this.errors.content = 'Content is required';
    }
    if (data.author === undefined || isEmpty(data.author.toString())) {
      this.errors.author = 'Author is required';
    }
    const errors = this.errors;
    return {
      errors,
      isValid: isEmpty(errors),
    };
  }

  /**
   * Validates the user inputs when trying
   * to log into the application
   * @method validateLogin
   * @param {object} data
   * @return {object} - errors
   * @return {boolean} - isValid
   * @memberOf dataValidators
   */
  validateLogin(data) {
    this.errors = {};
    if (data.identifier === undefined ||
        isEmpty((data.identifier).toString())) {
      this.errors.identifier = 'Username or email is required';
    }
    if (data.password === undefined || isEmpty((data.password).toString())) {
      this.errors.password = 'Password cannot be empty';
    }
    const errors = this.errors;
    return {
      errors,
      isValid: isEmpty(errors),
    };
  }

  /**
   * Validates the user inputs when trying
   * to log into the application
   * @method validateRolePostData
   * @param {object} data
   * @return {object} - errors
   * @return {boolean} - isValid
   * @memberOf dataValidators
   */
  validateRolePostData(data) {
    this.errors = {};
    if (data.name === undefined || Validator.isEmpty(data.name)) {
      this.errors.name = 'Role name is required';
    }

    if (data.description === undefined || Validator.isEmpty(data.description)) {
      this.errors.description = 'Role description is required';
    }

    const errors = this.errors;
    return {
      errors,
      isValid: isEmpty(errors),
    };
  }

  /**
   * Validates the user inputs when trying
   * to log into the application
   * @method validateInput
   * @param {object} data
   * @return {object} - errors
   * @return {boolean} - isValid
   * @memberOf dataValidators
   */
  validateAcademyInput(data) {
    this.errors = {};
    if (/^[a-zA-Z ]*$/.test(data.fullname) === false) {
      this.errors.fullname = 'Username can only be letters';
    }

    if (data.email === undefined || Validator.isEmpty(data.email)) {
      this.errors.email = 'Email is required';
    } else if (!Validator.isEmail(data.email)) {
      this.errors.email = 'Email must be valid';
    }

    if (data.fullname === undefined || Validator.isEmpty(data.fullname)) {
      this.errors.fullname = 'Fullname is required';
    }
    if (data.select === 0) {
      this.errors.select = 'Training session is required';
    }

    const errors = this.errors;
    return {
      errors,
      isValid: isEmpty(errors),
    };
  }
  contactInput(data) {
    this.errors = {};
    if (/^[a-zA-Z ]*$/.test(data.fullname) === false) {
      this.errors.fullname = 'Your name can only be letters';
    }

    if (data.email === undefined || Validator.isEmpty(data.email)) {
      this.errors.email = 'Email is required';
    } else if (!Validator.isEmail(data.email)) {
      this.errors.email = 'Email must be valid';
    }

    if (data.subject === undefined || Validator.isEmpty(data.subject)) {
      this.errors.subject = 'Subject is required';
    }

    if (data.message === undefined || Validator.isEmpty(data.message)) {
      this.errors.message = 'Message is required';
    }

    if (data.fullname === undefined || Validator.isEmpty(data.fullname)) {
      this.errors.fullname = 'Fullname is required';
    }

    const errors = this.errors;
    return {
      errors,
      isValid: isEmpty(errors),
    };
  }
  hireFormInput1(data) {
    this.errors = {};
    if (/^[a-zA-Z ]*$/.test(data.fullname) === false) {
      this.errors.fullname = 'Your name can only be letters';
    }

    if (data.email === undefined || Validator.isEmpty(data.email)) {
      this.errors.email = 'Email is required';
    } else if (!Validator.isEmail(data.email)) {
      this.errors.email = 'Email must be valid';
    }

    if (data.projectSummary === undefined || Validator.isEmpty(data.projectSummary)) {
      this.errors.projectSummary = 'Please tell us what your poject is about';
    }

    if (data.fullname === undefined || Validator.isEmpty(data.fullname)) {
      this.errors.fullname = 'Fullname is required';
    }

    if (!data.startDate) {
      this.errors.startDate = 'Project start date is required';
    }

    if (!data.endDate) {
      this.errors.endDate = 'Project end date is required';
    }

    const errors = this.errors;
    return {
      errors,
      isValid: isEmpty(errors),
    };
  }

  hireFormInput2(data) {
    this.errors = {};
    if (data.developerSkills === undefined || Validator.isEmpty(data.developerSkills)) {
      this.errors.developerSkills = 'Please enter developer skills needed';
    }
    const errors = this.errors;
    return {
      errors,
      isValid: isEmpty(errors),
    };
  }

  hireFormInput3(data) {
    this.errors = {};
    if (data.manager === 0) {
      this.errors.manager = 'Please select an option here';
    }

    if (data.location === 0) {
      this.errors.location = 'Please select an option here';
    }
    const errors = this.errors;
    return {
      errors,
      isValid: isEmpty(errors),
    };
  }
}

export default new dataValidators();
