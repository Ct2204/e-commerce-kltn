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
      return response.data;
    } else {
      return null;
    }
  } catch (err) {
    const errMessage = "Error in posting login: ";
    console.error(errMessage, err);
    return null;
  }
};
