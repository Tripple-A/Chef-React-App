const user = (
  state = { id: 1, email: "fake@fake.com", name: "Fake!!!!", vendor: "true" },
  action
) => {
  switch (action.type) {
    case "ASSIGN USER":
      return action.user;
    default:
      return state;
  }
};

export default user;
