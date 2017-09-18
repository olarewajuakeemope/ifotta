import axios from 'axios';
import types from './actionTypes';

/**
 * Function to dispatch action type of SIGNUP_USER
 * @export
 * @param {Object} user
 * @returns {Object} action
 */
export function createUser(user) {
  return { type: types.SIGNUP_USER, user };
}
/**
 * Async Function to handle signup request
 * @export
 * @param {Object} user
 * @returns {Object} dispatch
 */
export function signup(user) {
  return dispatch => axios.post('/api/users', user)
    .then((res) => {
      const token = res.data.token;
      dispatch(createUser(res.data));
      axios.defaults.headers.common.Authorization = token;
    });
}
