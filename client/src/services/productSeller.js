import store from '../store'
import api from './api'
import httpRequest from './httpRequest'
import { queryString } from 'query-string'

export const postProductOfSeller = async (productObject) => {
  try {
    const token = store.getState().auth.token
    if (!token) {
      console.error('Token is not available.')
      return null
    }

    let url = api.url.postProductSeller
    const response = await httpRequest({
      url: url,
      method: 'POST',
      data: productObject,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    if (response.code === 201) {
      return response
    } else {
      return response
    }
  } catch (err) {
    const errMessage = 'Error in posting login: '
    console.error(errMessage, err)
    return null
  }
}

export const getProductOfSellerById = async (id) => {
  try {
    const token = store.getState().auth.token
    if (!token) {
      console.error('Token is not available.')
      return null
    }

    let url = `${api.url.getProductSellerById}/${id}`
    const response = await httpRequest({
      url: url,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    if (response.code === 200) {
      return response
    } else {
      return null
    }
  } catch (err) {
    const errMessage = 'Error in posting login: '
    console.error(errMessage, err)
    return null
  }
}

export const getProductListOfSeller = async () => {
  try {
    const token = store.getState().auth.token
    if (!token) {
      console.error('Token is not available.')
      return null
    }
    let url = api.url.getListProductOfSeller

    const response = await httpRequest({
      url: url,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    if (response.code === 200) {
      return response.data
    } else {
      return response
    }
  } catch (err) {
    const errMessage = 'Error in getting products list: '
    console.error(errMessage, err)
    return {
      success: false,
      message: errMessage,
    }
  }
}

export const getProductOfSellerByID = async (id) => {
  try {
    const token = store.getState().auth.token
    if (!token) {
      console.error('Token is not available.')
      return null
    }
    let url = `${api.url.getProductOfSellerByID}/${id}`

    const response = await httpRequest({
      url: url,
      method: 'GET',

      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    if (response.code === 200) {
      return response.data
    } else {
      return null
    }
  } catch (err) {
    const errMessage = 'Error in getting productdetail: '
    console.error(errMessage, err)
    return null
  }
}

export const updateProductOfSeller = async (data) => {
  try {
    const token = store.getState().auth.token
    if (!token) {
      console.error('Token is not available.')
      return null
    }

    let url = api.url.updateProductOfSeller
    const response = await httpRequest({
      url: url,
      method: 'PUT',
      data: data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    if (response.code === 200) {
      return response
    } else {
      return response
    }
  } catch (err) {
    const errMessage = 'Error in posting login: '
    console.error(errMessage, err)
    return null
  }
}

export const deleteProductOfSellerById = async (id) => {
  try {
    const token = store.getState().auth.token
    if (!token) {
      console.error('Token is not available.')
      return null
    }

    let url = `${api.url.deleteProductOfSellerById}/${id}`
    const response = await httpRequest({
      url: url,
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    if (response.code === 200) {
      return response
    } else {
      return null
    }
  } catch (err) {
    const errMessage = 'Error in posting login: '
    console.error(errMessage, err)
    return null
  }
}

export const createProductOptionAndItem = async (data) => {
  try {
    const token = store.getState().auth.token
    if (!token) {
      console.error('Token is not available.')
      return null
    }

    let url = api.url.createProductOptionAndItem
    const response = await httpRequest({
      url: url,
      method: 'POST',
      data: data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    if (response.code === 201) {
      return response
    } else {
      return response
    }
  } catch (err) {
    const errMessage = 'Error in posting login: '
    console.error(errMessage, err)
    return null
  }
}

export const getPaging = async (pageNum, pageLength) => {
  try {
    const token = store.getState().auth.token
    if (!token) {
      console.error('Token is not available.')
      return null
    }
    const queryString = `?perPage=${pageLength}&currentPage=${pageNum}`

    let url = `${api.url.getListProductOnePage}/1${queryString}`
    const response = await httpRequest({
      url: url,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    if (response.code === 200) {
      return response
    } else {
      return response
    }
  } catch (err) {
    const errMessage = 'Error in posting login: '
    console.error(errMessage, err)
    return null
  }
}

export const postDescriptionBySeller = async (data) => {
  try {
    const token = store.getState().auth.token
    if (!token) {
      console.error('Token is not available.')
      return null
    }

    let url = api.url.postDescriptionBySeller
    const response = await httpRequest({
      url: url,
      method: 'POST',
      data: data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    if (response.code === 201) {
      return response
    } else {
      return null
    }
  } catch (err) {
    const errMessage = 'Error in posting description: '
    console.error(errMessage, err)
    return null
  }
}

export const getDescriptionBySeller = async (id) => {
  try {
    const token = store.getState().auth.token
    if (!token) {
      console.error('Token is not available.')
      return null
    }

    let url = `${api.url.getDescriptionBySeller}/${id}`
    const response = await httpRequest({
      url: url,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    if (response.code === 200) {
      return response
    } else {
      return null
    }
  } catch (err) {
    const errMessage = 'Error in get description: '
    console.error(errMessage, err)
    return null
  }
}

export const uploadImageProduct = async (files) => {
  try {
    const token = store.getState().auth.token
    if (!token) {
      console.error('Token is not available.')
      return null
    }

    let url = `${api.url.uploadImageProduct}`
    const formData = new FormData()
    formData.append('files', files)
    const response = await httpRequest({
      url: url,
      method: 'POST',
      data: formData,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    })
    if (response.code === 200) {
      return response
    } else {
      return response
    }
  } catch (err) {
    const errMessage = 'Error in update userprofile '
    console.error(errMessage, err)
    return null
  }
}
