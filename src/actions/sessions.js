// TODO: Store the backend API URL somewhere global


const login = (username, callback) => {
  return dispatch => {
    // Dispatch action that the session is being loaded
    dispatch({ type: 'LOADING_SESSION'})
    
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
    // Then dispatch an action to add the user to redux state as logged in.
    // Then execute the callback (likely redirecting to a new page).
    fetch('http://localhost:3000/users', req)
      .then(resp => resp.json())
      .then(user => {
        dispatch({ type: 'LOG_IN_USER', user })
      })
      .then(() => callback())
      .catch(err => console.log("** ERROR ** :", err))
  }
}


export { login }
