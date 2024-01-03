import store from '../store/index.js'
import api from './api'
import httpRequest from './httpRequest'

// Update Status User
export const updateStatusUser = async (userId) => {
  try {
    const token = store.getState().auth.token
    if (!token) {
      console.error('Token is not available.')
      return null
    }

    let url = `${api.url.updateStatusUser}/${userId}`

    const response = await httpRequest({
      url: url,
      method: 'PATCH',
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

//Get All User
export const getAllUser = async () => {
  try {
    const token = store.getState().auth.token
    if (!token) {
      console.error('Token is not available.')
      return null
    }

    let url = `${api.url.getAllUser}`
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
