import store from "../store";
import api from "./api";
import httpRequest from "./httpRequest";

export const postProductOfSeller = async (productObject) => {
  try {
    const token = store.getState().auth.token;
    if (!token) {
      console.error("Token is not available.");
      return null;
    }

    let url = api.url.postProductSeller;
    const response = await httpRequest({
      url: url,
      method: "POST",
      data: productObject,
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
    const errMessage = "Error in posting login: ";
    console.error(errMessage, err);
    return null;
  }
};

export const getProductOfSellerById = async (id) => {
  try {
    const token = store.getState().auth.token;
    if (!token) {
      console.error("Token is not available.");
      return null;
    }

    let url = `${api.url.getProductSellerById}/${id}`;
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
    const errMessage = "Error in posting login: ";
    console.error(errMessage, err);
    return null;
  }
};
