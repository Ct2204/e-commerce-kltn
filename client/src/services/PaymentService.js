import store from "../store/index.js";
import api from "./api";
import httpRequest from "./httpRequest";

//Check out with vnpay
export const checkOutWithVnpay = async (orderId) => {
  try {
    const token = store.getState().auth.token;
    if (!token) {
      console.error("Token is not available.");
      return null;
    }

    let url = `${api.url.checkOutWithVnpay}/${orderId}`;

    const response = await httpRequest({
      url: url,
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      }
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


//Check out with paypal
export const checkOutWithPaypal = async (orderId) => {
    try {
      const token = store.getState().auth.token;
      if (!token) {
        console.error("Token is not available.");
        return null;
      }
  
      let url = `${api.url.checkOutWithPaypal}/${orderId}`;
  
      const response = await httpRequest({
        url: url,
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        }
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
  
//Check out with vnpay
// export const getPaymentInfo = async (userId, quantity,productItemId) => {
//     try {
//       const token = store.getState().auth.token;
//       if (!token) {
//         console.error("Token is not available.");
//         return null;
//       }
  
//       let url = api.url.createCart;
  
//       const response = await httpRequest({
//         url: url,
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//         data: { userId: userId, quantity: quantity, productItemId: productItemId },
//       });
//       if (response.code === 200) {
//         return response;
//       } else {
//         return response;
//       }
//     } catch (err) {
//       const errMessage = "Error in posting login: ";
//       console.error(errMessage, err);
//       return null;
//     }
//   };

  
// //get payment success
// export const paymentSuccess = async (paymentId,payerId) => {
//     try {
//       const token = store.getState().auth.token;
//       if (!token) {
//         console.error("Token is not available.");
//         return null;
//       }
  
//       let url = api.url.createCart;
  
//       const response = await httpRequest({
//         url: url,
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//         data: { userId: userId, quantity: quantity, productItemId: productItemId },
//       });
//       if (response.code === 200) {
//         return response;
//       } else {
//         return response;
//       }
//     } catch (err) {
//       const errMessage = "Error in posting login: ";
//       console.error(errMessage, err);
//       return null;
//     }
//   };

  
// //payment cancel
// export const createCart = async (userId, quantity,productItemId) => {
//     try {
//       const token = store.getState().auth.token;
//       if (!token) {
//         console.error("Token is not available.");
//         return null;
//       }
  
//       let url = api.url.createCart;
  
//       const response = await httpRequest({
//         url: url,
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//         data: { userId: userId, quantity: quantity, productItemId: productItemId },
//       });
//       if (response.code === 200) {
//         return response;
//       } else {
//         return response;
//       }
//     } catch (err) {
//       const errMessage = "Error in posting login: ";
//       console.error(errMessage, err);
//       return null;
//     }
//   };
  