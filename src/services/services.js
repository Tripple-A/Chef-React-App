import axios from "axios";
const apiUrl = "https://foodie-apiv1.herokuapp.com/";

const logout = () => {
  return axios.delete(`${apiUrl}logout`, { withCredentials: true });
};

const signin = details => {
  return axios.post(`${apiUrl}sessions`, details);
};

async function checkLoggedIn() {
  return await axios.get(`${apiUrl}logged_in`);
}

const signup = details => {
  return axios.post(`${apiUrl}registrations`, details);
};

const getVendors = () => {
  return axios.get(`${apiUrl}logged_in`);
};

const getProfiles = () => {
  return axios.get(`${apiUrl}profiles`);
};
export default {
  logout: logout,
  signin: signin,
  checkLoggedIn: checkLoggedIn,
  signup: signup,
  getVendors: getVendors,
  getProfiles: getProfiles
};
