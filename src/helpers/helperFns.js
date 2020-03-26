export const showPassword = () => {
  const password = document.getElementById("password");
  password.type = "text";
};

export const hidePassword = () => {
  const password = document.getElementById("password");
  password.type = "password";
};

export const apiUrl = "foodie-apiv1.herokuapp.com";
