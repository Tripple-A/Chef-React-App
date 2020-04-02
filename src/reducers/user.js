const user = (state = { id: 10, vendor: true }, action) => {
  switch (action.type) {
    case "ASSIGN USER":
      return action.user;
    default:
      return state;
  }
};

export default user;
