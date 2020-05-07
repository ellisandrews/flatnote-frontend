// TODO: Store the backend API URL somewhere global?

const signup = (data, callback) => {
  return dispatch => {    
    // Create (or find) the user by username in the backend
    const req = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: data.username,
          password: data.password
        }
      })
    }

    // Make the request to the backend. 
    // Then dispatch an action to add the user to redux state as logged in (and save their notes in one fell swoop)
    // Then execute the callback (likely redirecting to a new page).
    fetch('http://localhost:3000/users', req)
      .then(resp => {
        // Fetch doesn't error on status >= 400, so have to check resp.ok
        if (resp.ok) { 
          return resp.json()
        }

        // Error out on 400 codes
        if (resp.status >= 400 && resp.status < 500) {
          // TODO: Check the errors returned from the backend to customize this message
          throw 'Invalid signup. Username may already be taken.'
        }
      })
      .then(user => {
        dispatch({ type: 'LOG_IN_USER', user })  // Store user's data (including notes!)
        callback()
      })
      .catch(err => window.alert(`ERROR: ${err}`))
  }
}


const login = (username, callback) => {
  return dispatch => {    
    // Create (or find) the user by username in the backend
    const req = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username
      })
    }

    // Make the request to the backend. 
    // Then dispatch an action to add the user to redux state as logged in (and save their notes in one fell swoop)
    // Then execute the callback (likely redirecting to a new page).
    fetch('http://localhost:3000/users', req)
      .then(resp => resp.json())
      .then(user => {
        dispatch({ type: 'LOG_IN_USER', user })  // Store user's data (including notes!)
        callback()
      })
      .catch(err => console.log("ERROR:", err))
  }
}


const logout = () => ({ type: 'LOG_OUT_USER' })


export { login, logout, signup }
