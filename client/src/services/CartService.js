import store from "../store/index.js";
import api from "./api";
import httpRequest from "./httpRequest";

export const createCart = async (userId, quantity,productItemId) => {
  try {
    const token = store.getState().auth.token;
    if (!token) {
      console.error("Token is not available.");
      return null;
    }

    let url = api.url.createCart;

    const response = await httpRequest({
      url: url,
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: { userId: userId, quantity: quantity, productItemId: productItemId },
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

//Get Cart Item
export const getCartItem = async (userId) => {
  try {

    const token = store.getState().auth.token;
    if (!token) {
      console.error("Token is not available.");
      return null;
    }

    let url = `${api.url.getCartItem}/${userId}`;
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
    const errMessage = "Error in getting productdetail: ";
    console.error(errMessage, err);
    return null;
  }
};

//Update Cart Item
export const updateCartItem = async (userId,cartItemList) => {
  try {

    const token = store.getState().auth.token;
    if (!token) {
      console.error("Token is not available.");
      return null;
    }

    let url = `${api.url.updateCartItem}/${userId}`;

    const response = await httpRequest({
      url: url,
      method: "PUT",
      data: JSON.stringify({
        cartItemList: cartItemList,
      })
      ,

      headers: {
        // 'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.code === 200) {
      return response;
    } else {
      return null;
    }
  } catch (err) {
    const errMessage = "Error in getting productdetail: ";
    console.error(errMessage, err);
    return null;
  }
};


//delete cart item
export const deleteCartItem = async (userId,cartItemId) => {
  try {

    const token = store.getState().auth.token;
    if (!token) {
      console.error("Token is not available.");
      return null;
    }

    let url = `${api.url.deleteCartItem}/${userId}/${cartItemId}`;

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
    const errMessage = "Error in getting productdetail: ";
    console.error(errMessage, err);
    return null;
  }
};