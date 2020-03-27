import axios from "axios";
const apiUrl = "https://foodie-apiv1.herokuapp.com/";

const logout = () => {
  return axios.delete(`${apiUrl}logout`, { withCredentials: true });
};

const signin = details => {
  return axios.post(`${apiUrl}sessions`, details, { withCredentials: true });
};

async function checkLoggedIn() {
  return await axios.get(`${apiUrl}logged_in`, {
    withCredentials: true
  });
}

const signup = details => {
  return axios.post(`${apiUrl}registrations`, details, {
    withCredentials: true
  });
};
export default {
  logout: logout,
  signin: signin,
  checkLoggedIn: checkLoggedIn,
  signup: signup
};
