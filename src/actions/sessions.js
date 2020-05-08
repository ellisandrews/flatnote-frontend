import { handleResponse } from './utils'


// TODO: Store the backend API URL somewhere global?

const signup = (username, password, callback) => {
  return dispatch => {    
    authFetchRequest('http://localhost:3000/users', username, password, dispatch, callback)
  }
}


const login = (username, password, callback) => {
  return dispatch => {    
    authFetchRequest('http://localhost:3000/login', username, password, dispatch, callback)
  }
}


// Note: This is a helper function, not an action!
const authFetchRequest = (url, username, password, dispatch, callback) => {
    
  const req = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user: {
        username,
        password
      }
    })
  }

  const success = userData => {
    dispatch({ type: 'LOG_IN_USER', user: userData.user })  // Store user's data (including notes!)
    localStorage.setItem('token', userData.token)  // Save the user's token in localStorage
    callback()
  }

  const failure = error => {
    window.alert(error.messages.join(', '))
  }

  fetch(url, req)
    .then(resp => handleResponse(resp, success, failure))
    .catch(err => {
      window.alert(`Unknown Error: ${err}`)
    })
}


const logout = () => {
  localStorage.removeItem('token')
  return { type: 'LOG_OUT_USER' }
}


const setLoggedInUser = user => {
  return { type: 'LOG_IN_USER', user }
}


export { login, logout, setLoggedInUser, signup }
