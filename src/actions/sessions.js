// TODO: Store the backend API URL somewhere global


const login = username => {
  return dispatch => {
    // Dispatch action that the session is being loaded
    dispatch({ type: 'LOADING_SESSION'})
    
    // Find or create the user by username
    const req = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username
      })
    }

    // Make the request to the backend. Then dispatch an action to add the user to redux state.
    fetch('https://localhost:3000/users', req)
      .then(resp => resp.json())
      .then(user => {
        dispatch({ type: 'LOG_IN_USER', user })
      })
      .catch(err => console.log("** ERROR ** :", err))
  }
}


export { login }
