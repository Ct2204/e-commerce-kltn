import api from "./api";
import httpRequest from "./httpRequest";

export const createCart = async (userId, quantity,productItemId) => {
  try {
    let url = api.url.createCart;

    const response = await httpRequest({
      url: url,
      method: "POST",
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