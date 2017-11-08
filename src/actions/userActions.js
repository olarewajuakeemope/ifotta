import axios from 'axios';

const ROOT_URL = 'https://formspree.io/';
const EMAIL = 'info@ifotta.com';

/**
 * Async Function to handle academySignup request
 * @export
 * @param {Object} user
 * @returns {Object} dispatch
 */
export function academySignup(user) {
  return axios.post(`${ROOT_URL}${EMAIL}`, user);
}
/**
 * Async Function to handle contact request
 * @export
 * @param {Object} user
 * @returns {Object} dispatch
 */
export function contact(user) {
  return axios.post(`${ROOT_URL}${EMAIL}`, user);
}
/**
 * Async Function to handle contact request
 * @export
 * @param {Object} user
 * @returns {Object} dispatch
 */
export function hireSignup(user) {
  return axios.post(`${ROOT_URL}${EMAIL}`, user);
}
