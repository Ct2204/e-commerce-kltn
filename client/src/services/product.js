import { useSelector } from "react-redux";
import api from "./api";
import httpRequest from "./httpRequest";
import store from "../store";

//get product detail
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

//get list product
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

// get product description
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

//get list category
export const listCategory = async () => {
  try {
    let url = api.url.listCategory;

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

// get product by category
export const getProductsByCategory = async (id) => {
  try {
    let url = `${api.url.productsbycategory}/${id}?perPage=100&currentPage=1`;

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

//get product option
export const getProductOption = async (productId) => {
  try {
    let url = `${api.url.productoption}/${productId}`;

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

//get product option detail
export const getProductOptionDetail = async (
  productId,
  productOptionDetailId
) => {
  try {
    let url = `${api.url.productoptiondetail}/${productId}/${productOptionDetailId}`;
    console.log("url", url);
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

//get product item
export const getProductItem = async (id) => {
  try {
    let url = `${api.url.productitem}/${id}`;

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

//get product items
export const getProductItems = async (id) => {
  try {
    let url = `${api.url.productitems}/${id}`;

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

export const getRatingOfProduct = async (pageNum, pageLength, id) => {
  try {
    const token = store.getState().auth.token;
    if (!token) {
      console.error("Token is not available.");
      return null;
    }
    const queryString = `${id}?perPage=${pageLength}&currentPage=${pageNum}`;

    let url = `${api.url.getRatingOfProduct}/${queryString}`;
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
      return response;
    }
  } catch (err) {
    const errMessage = "Error in get description: ";
    console.error(errMessage, err);
    return null;
  }
};

export const getProductsByCategory2 = async (id) => {
  try {
    let url = `${api.url.productsbycategory}/${id}?perPage=4&currentPage=1`;

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

//search Product Name

export const searchProductName = async (name) => {
  try {
    const token = store.getState().auth.token;
    if (!token) {
      console.error("Token is not available.");
      return null;
    }
    if (name === "") return null;
    const queryString = `?keyword=${name}&pageNumber=1`;

    let url = `${api.url.searchProductName}${queryString}`;
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
    const errMessage = "Error in get description: ";
    console.error(errMessage, err);
    return null;
  }
};
