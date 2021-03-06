const initialState = []

const notesReducer = (state = initialState, action) => {

  switch (action.type) {

    case 'ADD_NOTE':
      // Append a new note
      return [...state, action.note]

    case 'UPDATE_NOTE':
      // Update an existing note (by replacement)
      return state.map(note => note.id === action.note.id ? action.note : note ) 

    case 'DELETE_NOTE':
      // Remove an existing note by ID
      return state.filter(note => note.id !== action.noteId) 

    case 'LOG_IN_USER':
      // Store the user's notes
      return action.user.notes

    case 'LOG_OUT_USER':
      // Reset notes to initial state
      return initialState

    default:
      return state
  }

}


export default notesReducer
