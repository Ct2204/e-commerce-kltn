import api from "./api";
import httpRequest from "./httpRequest";

export const getProductDetail = async (id) => {
  try {
    let url = `${api.url.productdetail}/${id}`;

    const response = await httpRequest({
      url: url,
      method: "GET",
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

export const getProductList = async () => {
  try {
    let url = api.url.products;

    const response = await httpRequest({
      url: url,
      method: "GET",
    });
    if (response.code === 200) {
      return response.data;
    } else {
      return null;
    }
  } catch (err) {
    const errMessage = "Error in getting products list: ";
    console.error(errMessage, err);
    return {
      success: false,
      message: errMessage,
    };
  }
};

export const getProductDescription = async (id) => {
  try {
    let url = `${api.url.productdescription}/${id}`;

    const response = await httpRequest({
      url: url,
      method: "GET",
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

export const getProductsByCategory = async (id) => {
  try {
    let url = `${api.url.productsbycategory}/${id}`;

    const response = await httpRequest({
      url: url,
      method: "GET",
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
