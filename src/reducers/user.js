const user = (state = { id: 3 }, action) => {
  switch (action.type) {
    case "ASSIGN USER":
      return action.user;
    default:
      return state;
  }
};

export default user;
