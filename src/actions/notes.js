import { getAuthTokenHeader } from '../utils'


const createNote = (note, redirectToNote) => {
  return dispatch => {    
    // Create the note in the backend
    const req = {
      method: 'POST',
      headers: {
        ...getAuthTokenHeader(),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ note })
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
        ...getAuthTokenHeader(),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ note: noteData })
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


const deleteNote = (noteId, redirect) => {
  return dispatch => {    

    const req = {
      method: 'DELETE',
      headers: getAuthTokenHeader()
    }

    // Make the request to the backend. 
    fetch(`http://localhost:3000/notes/${noteId}`, req)
      .then(resp => resp.json())
      .then(respJSON => {
        dispatch({ type: 'DELETE_NOTE', noteId })
        redirect()
      })
      .catch(err => console.log("ERROR:", err))
  }
}


export { createNote, deleteNote, updateNote }
