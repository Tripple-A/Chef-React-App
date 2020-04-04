const user = (state = { id: 1, vendor: true }, action) => {
  switch (action.type) {
    case "ASSIGN USER":
      return action.user;
    default:
      return state;
  }
};

export default user;
