import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

/**
 * Validates post datas
 * @class dataValidators
 */
class dataValidators {
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

  jobApplicationInput(data) {
    this.errors = {};
    if (/^[a-zA-Z ]*$/.test(data.fullname) === false) {
      this.errors.fullname = 'Your name can only be letters';
    }

    if (data.fullname === undefined || Validator.isEmpty(data.fullname)) {
      this.errors.fullname = 'Fullname is required';
    }

    if (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(data.phone) === false) {
      this.errors.phone = 'Please enter a valid phone number';
    }

    if (data.phone === undefined || Validator.isEmpty(data.phone)) {
      this.errors.phone = 'Phone number is required';
    }

    if (data.email === undefined || Validator.isEmpty(data.email)) {
      this.errors.email = 'Email is required';
    } else if (!Validator.isEmail(data.email)) {
      this.errors.email = 'Email must be valid';
    }

    if (data.address === undefined || Validator.isEmpty(data.address)) {
      this.errors.address = 'Address is required';
    }

    if (Validator.isEmpty(data.picsObj.filename)) {
      this.errors.photo = 'Please upload your picture';
    }

    if (Validator.isEmpty(data.resumeObj.filename)) {
      this.errors.resume = 'Please upload your CV';
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

    if (data.startDate && data.endDate) {
      const startDate = data.startDate.getTime();
      const endDate = data.endDate.getTime();
      if (startDate > endDate) {
        this.errors.startDate = 'Start date has to be earlier than End Date below';
      }
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
