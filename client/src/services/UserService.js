import store from "../store";
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

export const register = async (fullName, email, password, confirmPassword) => {
  try {
    let url = api.url.register;

    const response = await httpRequest({
      url: url,
      method: "POST",
      data: {
        fullName: fullName,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      },
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

export const getProfileOfUser = async (id) => {
  try {
    const token = store.getState().auth.token;
    if (!token) {
      console.error("Token is not available.");
      return null;
    }

    let url = `${api.url.getProfileOfUser}/${id}`;
    const response = await httpRequest({
      url: url,
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.code === 200) {
      return response;
    } else {
      return null;
    }
  } catch (err) {
    const errMessage = "Error in get profile of user: ";
    console.error(errMessage, err);
    return null;
  }
};

export const updateUserProfile = async (data, id) => {
  try {
    const token = store.getState().auth.token;
    if (!token) {
      console.error("Token is not available.");
      return null;
    }

    let url = `${api.url.updateUserProfile}/${id}`;
    const response = await httpRequest({
      url: url,
      method: "PUT",
      data: data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.code === 200) {
      return response;
    } else {
      return response;
    }
  } catch (err) {
    const errMessage = "Error in update userprofile ";
    console.error(errMessage, err);
    return null;
  }
};

export const getAddressOfUserById = async (id) => {
  try {
    const token = store.getState().auth.token;
    if (!token) {
      console.error("Token is not available.");
      return null;
    }

    let url = `${api.url.getAddressOfUserById}/${id}`;
    const response = await httpRequest({
      url: url,
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.code === 200) {
      return response;
    } else {
      return null;
    }
  } catch (err) {
    const errMessage = "Error in get address of user: ";
    console.error(errMessage, err);
    return null;
  }
};

export const postUserAddress = async (data, id) => {
  try {
    const token = store.getState().auth.token;
    if (!token) {
      console.error("Token is not available.");
      return null;
    }

    let url = `${api.url.postAddressOfUserById}/${id}`;
    const response = await httpRequest({
      url: url,
      method: "POST",
      data: data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.code === 201) {
      return response;
    } else {
      return null;
    }
  } catch (err) {
    const errMessage = "Error in post useraddress";
    console.error(errMessage, err);
    return null;
  }
};

export const updateAddressOfUser = async (data, id) => {
  try {
    const token = store.getState().auth.token;
    if (!token) {
      console.error("Token is not available.");
      return null;
    }

    let url = `${api.url.updateAddressOfUserById}/${id}`;
    const response = await httpRequest({
      url: url,
      method: "PUT",
      data: data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.code === 200) {
      return response;
    } else {
      return null;
    }
  } catch (err) {
    const errMessage = "Error in update  Address of User ";
    console.error(errMessage, err);
    return null;
  }
};

export const deleteAddressOfUserById = async (id) => {
  try {
    const token = store.getState().auth.token;
    if (!token) {
      console.error("Token is not available.");
      return null;
    }

    let url = `${api.url.deleteAddressOfUserById}/${id}`;
    const response = await httpRequest({
      url: url,
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.code === 200) {
      return response;
    } else {
      return null;
    }
  } catch (err) {
    const errMessage = "Error in delete address of user: ";
    console.error(errMessage, err);
    return null;
  }
};
