const loggedIn = (state = true, action) => {
  switch (action.type) {
    case "LOG IN":
      return true;
    case "LOG OUT":
      return false;
    default:
      return state;
  }
};

export default loggedIn;
