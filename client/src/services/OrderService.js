import store from "../store/index.js";
import api from "./api";
import httpRequest from "./httpRequest";

// Create order
export const createOrder = async (cartItemId,userId) => {
    try {
      const token = store.getState().auth.token;
      if (!token) {
        console.error("Token is not available.");
        return null;
      }
  
      let url = api.url.createOrder;
  
      const response = await httpRequest({
        url: url,
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: { cartItemId: cartItemId, userId: userId},
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
  

// Update Order
export const updateOrder = async (orderId,status) => {
    try {
      const token = store.getState().auth.token;
      if (!token) {
        console.error("Token is not available.");
        return null;
      }
  
      let url = `${api.url.updateOrder}/${orderId}`;
  
      const response = await httpRequest({
        url: url,
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: { status},
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
  
//Get Order By Id
export const getOrderById = async (orderId) => {
    try {
  
      const token = store.getState().auth.token;
      if (!token) {
        console.error("Token is not available.");
        return null;
      }
  
      let url = `${api.url.getOrderById}/${orderId}`;
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
  
//Get Order By Status
export const getOrderByStatus = async (status) => {
    try {
  
      const token = store.getState().auth.token;
      if (!token) {
        console.error("Token is not available.");
        return null;
      }
  
      let url = `${api.url.getOrderByStatus}/${status}`;
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
  
//Get Order userId
export const getOrderByUserId = async (userId) => {
    try {
  
      const token = store.getState().auth.token;
      if (!token) {
        console.error("Token is not available.");
        return null;
      }
  
      let url = `${api.url.getOrderByUserId}/${userId}`;
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
  
//Get Order Detail By Order Id
export const getOrderDetailByOrderId = async (orderDetailId) => {
    try {
  
      const token = store.getState().auth.token;
      if (!token) {
        console.error("Token is not available.");
        return null;
      }
  
      let url = `${api.url.getOrderDetailByOrderId}/${orderDetailId}`;
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