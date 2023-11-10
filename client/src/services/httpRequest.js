import axiosClient from "./axiosClient";

const httpRequest = async ({ url, method, params, data, ...rest }) => {
  let result;
  try {
    const response = await axiosClient.request({
      url,
      method,
      params,
      data,
      ...rest,
    });
    const { data: responseData, status } = response;
    if (
      typeof responseData === "object" &&
      !(responseData instanceof Blob) &&
      !Array.isArray(responseData)
    ) {
      result = responseData;
      return {
        status,
        ...result,
      };
    } else {
      result = responseData;
      return result;
    }
  } catch (error) {
    return error;
  }
};

export default httpRequest;
