import axios from 'axios';

/**
 * Async Function to handle academySignup request
 * @export
 * @param {Object} user
 * @returns {Object} dispatch
 */
export function academySignup(user) {
  console.log(user);
  return axios.get('/api/academy/signup');
}
/**
 * Async Function to handle contact request
 * @export
 * @param {Object} user
 * @returns {Object} dispatch
 */
export function contact(user) {
  console.log(user);
  return axios.get('/api/contact');
}
/**
 * Async Function to handle contact request
 * @export
 * @param {Object} user
 * @returns {Object} dispatch
 */
export function hireSignup(user) {
  console.log(user);
  return axios.get('/api/hire/signup');
}
