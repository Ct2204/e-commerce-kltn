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

export const logout = async () => {
  try {
    const token = store.getState().auth.token;
    if (!token) {
      console.error("Token is not available.");
      return null;
    }
    let url = api.url.logout;

    const response = await httpRequest({
      url: url,
      method: "POST",
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

export const getPictureProfile = async (id) => {
  try {
    const token = store.getState().auth.token;
    if (!token) {
      console.error("Token is not available.");
      return null;
    }

    let url = `${api.url.getPictureProfile}/${id}`;
    const response = await httpRequest({
      url: url,
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.code === 200) {
      return response.data;
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

export const uploadPictureProfile = async (userId,file) => {
  try {
    const token = store.getState().auth.token;
    if (!token) {
      console.error("Token is not available.");
      return null;
    }

    let url = `${api.url.uploadPictureProfile}${userId}`;
    const formData = new FormData();
    formData.append('file',file)
    const response = await httpRequest({
      url: url,
      method: "POST",
      data: formData,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": 'multipart/form-data'
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


//get address by user id
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

//send verification code

export const postVerificationCode = async (email) => {
  try {
    let url = api.url.sendVerificationCode;

    const response = await httpRequest({
      url: url,
      method: "POST",
      data: { email: email },
    });
    if (response.code === 200) {
      return response;
    } else {
      return null;
    }
  } catch (err) {
    const errMessage = "Error in post verification code: ";
    console.error(errMessage, err);
    return null;
  }
};

export const enterVerificationCode = async (verificationcode) => {
  try {
    let url = api.url.enterVerificationCode;

    const response = await httpRequest({
      url: url,
      method: "POST",
      data: { verificationCode: verificationcode },
    });
    if (response.code === 200) {
      return response;
    } else {
      return response;
    }
  } catch (err) {
    const errMessage = "Error in post verification code: ";
    console.error(errMessage, err);
    return null;
  }
};

//Change Password

export const changePassword = async (email, newpassword) => {
  try {
    const token = store.getState().auth.token;
    if (!token) {
      console.error("Token is not available.");
      return null;
    }
    console.log("Thien", newpassword);
    let url = api.url.changePassword;

    const response = await httpRequest({
      url: url,
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: { email: email, password: newpassword },
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
 

// Post rating and comment
export const postCommentAndRating = async (userId,formData) => {
  try {
    const token = store.getState().auth.token;
    if (!token) {
      console.error("Token is not available.");
      return null;
    }

    let url = `${api.url.postCommentAndRating}/${userId}`;

    const response = await httpRequest({
      url: url,
      method: "POST",
      data: formData,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": 'multipart/form-data'
      },
    });

    if (response.code === 200) {
      return response;
    } else {
      return response;
    }
  } catch (err) {
    const errMessage = "Error in posting comment: ";
    console.error(errMessage, err);
    return null;
  }
};