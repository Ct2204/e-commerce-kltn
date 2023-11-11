import api from "./api";
import httpRequest from "./httpRequest";

export const login = async (email, password) => {
  try {
    let url = api.url.login;

    const response = await httpRequest({
      url: url,
      method: "POST",
      data: { email: email, password: password },
    });
    if (response.code === 200) {
      return response;
    } else {
      return response;
    }
  } catch (err) {
    const errMessage = "Error in posting login: ";
    console.error(errMessage, err);
    return null;
  }
};

export const register = async (fullName,email, password,confirmPassword) => {
  try {
    let url = api.url.register;

    const response = await httpRequest({
      url: url,
      method: "POST",
      data: { fullName:fullName,email: email, password: password, confirmPassword: confirmPassword },
    });
    if (response.code === 200) {
      return response;
    } else {
      return response;
    }
  } catch (err) {
    const errMessage = "Error in posting login: ";
    console.error(errMessage, err);
    return null;
  }
};