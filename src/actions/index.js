const LOGIN = {
  type: "LOG IN"
};

const LOGOUT = {
  type: "LOG OUT"
};

const ASSIGNUSER = user => ({
  type: "ASSIGN USER",
  user
});

export { LOGIN, LOGOUT, ASSIGNUSER };
