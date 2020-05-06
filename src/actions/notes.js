const createNote = (note, redirectToNote) => {
  return dispatch => {    
    // Create the note in the backend
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
        redirectToNote(note.id)
      })
      .catch(err => console.log("ERROR:", err))
  }
}


const updateNote = (noteId, noteData, redirectToNote) => {
  return dispatch => {    
    // Create (or find) the note in the backend
    const req = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(noteData)
    }

    // Make the request to the backend. 
    fetch(`http://localhost:3000/notes/${noteId}`, req)
      .then(resp => resp.json())
      .then(note => {
        dispatch({ type: 'UPDATE_NOTE', note })
        redirectToNote(note.id)
      })
      .catch(err => console.log("ERROR:", err))
  }
}


const fetchUserNotes = user_id => {
  return dispatch => {
    // Construct URL with `user_id` param for fetching the user's notes from the backend
    const url = new URL('http://localhost:3000/notes')
    const params = { user_id }
    url.search = new URLSearchParams(params).toString()
    
    // Make the request for the user's notes.
    // Then dispatch an action to store the notes to the redux state.
    fetch(url)
      .then(resp => resp.json())
      .then(notes => {
        dispatch({ type: 'STORE_NOTES', notes })
      })
      .catch(err => console.log("ERROR:", err))
  }
}


export { createNote, fetchUserNotes, updateNote }
