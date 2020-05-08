import { handleResponse } from './utils'
import { getAuthTokenHeader } from '../utils'


const createNote = (note, redirectToNote) => {
  return dispatch => {    

    const req = {
      method: 'POST',
      headers: {
        ...getAuthTokenHeader(),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ note })
    }

    const createSuccess = note => {
      dispatch({ type: 'ADD_NOTE', note })
      redirectToNote(note.id)
    }

    const createFailure = error => {
      window.alert(error.messages.join(', '))
    }
  
    // Make the request to the backend, handling response appropriately.
    fetch('http://localhost:3000/notes', req)
      .then(resp => handleResponse(resp, createSuccess, createFailure))
      .catch(err => {
        window.alert(`Unknown Error: ${err}`)
      })
  }
}


const updateNote = (noteId, noteData, redirectToNote) => {
  return dispatch => {    

    const req = {
      method: 'PATCH',
      headers: {
        ...getAuthTokenHeader(),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ note: noteData })
    }

    const updateSuccess = note => {
      dispatch({ type: 'UPDATE_NOTE', note })
      redirectToNote(note.id)
    }

    const updateFailure = error => {
      window.alert(error.messages.join(', '))
    }
    
    fetch(`http://localhost:3000/notes/${noteId}`, req)
      .then(resp => handleResponse(resp, updateSuccess, updateFailure))
      .catch(err => {
        window.alert(`Unknown Error: ${err}`)
      })
  }
}


const deleteNote = (noteId, redirect) => {
  return dispatch => {    

    const req = {
      method: 'DELETE',
      headers: getAuthTokenHeader()
    }

    const deleteSuccess = () => {
      dispatch({ type: 'DELETE_NOTE', noteId })
      redirect()
    }

    const deleteFailure = error => {
      window.alert(error.messages.join(', '))
    }

    fetch(`http://localhost:3000/notes/${noteId}`, req)
      .then(resp => handleResponse(resp, deleteSuccess, deleteFailure))
      .catch(err => {
        window.alert(`Unknown Error: ${err}`)
      })
  }
}


export { createNote, deleteNote, updateNote }
