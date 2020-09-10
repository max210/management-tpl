import { message } from 'antd'

const fetchInitOption = {
  // credentials: 'include',
  headers: {
    'content-type': 'application/json'
  },
  mode: 'cors'
}

export const get = (url, data = {}) => {
  if (Object.keys(data).length) {
    const queryArray = []
    Object.keys(data).forEach(key => {
      queryArray.push(`${key}=${data[key]}`)
    })
    url = `${url}?${queryArray.join('&')}`
  }

  return fetch(url, { method: 'GET', ...fetchInitOption })
    .then(res => res.json())
    .then(res => {
      if (res && res.code !== 0) {
        throw new Error(res.message)
      }
      return res.data
    })
    .catch(e => {
      message.error(e.message)
    })
}

export const post = (url, data) => {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    ...fetchInitOption
  })
    .then(res => res.json())
    .then(res => {
      if (res && res.code !== 0) {
        throw new Error(res.message)
      }
      return res.data
    })
    .catch(e => {
      message.error(e.message)
    })
}
