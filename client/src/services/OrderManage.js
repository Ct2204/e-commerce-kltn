import store from '../store/index.js'
import api from './api'
import httpRequest from './httpRequest'

// Update Order
export const changeStatusOrder = async (orderId, status) => {
  try {
    const token = store.getState().auth.token
    if (!token) {
      console.error('Token is not available.')
      return null
    }

    let url = `${api.url.changeStatusOrder}/${orderId}`

    const response = await httpRequest({
      url: url,
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: status,
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

//Get Order By Id
export const getOrderById = async (orderId) => {
  try {
    const token = store.getState().auth.token
    if (!token) {
      console.error('Token is not available.')
      return null
    }

    let url = `${api.url.getOrderById}/${orderId}`
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

//Get Order By Status
export const getOrderManageByStatus = async (status) => {
  try {
    const token = store.getState().auth.token
    if (!token) {
      console.error('Token is not available.')
      return null
    }

    let url = `${api.url.getOrderManageByStatus}/${status}`
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

//Get Order sellerId
export const getOrderBySeller = async (sellerId) => {
  try {
    const token = store.getState().auth.token
    if (!token) {
      console.error('Token is not available.')
      return null
    }

    let url = `${api.url.getOrderBySeller}/${sellerId}`
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

export const getAmuntUser = async () => {
  try {
    const token = store.getState().auth.token
    if (!token) {
      console.error('Token is not available.')
      return null
    }

    let url = `${api.url.getAmuntUser}`
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
    const errMessage = 'Error in getting productdetail: '
    console.error(errMessage, err)
    return null
  }
}
