
const createNote = (note, callback) => {
  return dispatch => {    
    // Create (or find) the note in the backend
    const req = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(note)
    }

    // Make the request to the backend. 
    // Then dispatch an action to add the note to redux state.
    // Then execute the callback (likely redirecting to a new page).
    fetch('http://localhost:3000/notes', req)
      .then(resp => resp.json())
      .then(note => {
        dispatch({ type: 'ADD_NOTE', note })
      })
      .then(() => callback())
      .catch(err => console.log("ERROR:", err))
  }
}


export { createNote }