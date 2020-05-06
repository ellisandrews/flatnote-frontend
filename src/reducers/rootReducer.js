const initialState = {
  loggedInUser: null,
  notes: []
}

const rootReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'LOG_IN_USER':
      return {
        ...state,
        loggedInUser: action.user
      }
    case 'LOG_OUT_USER':
      return {
        ...state,
        loggedInUser: null,
        notes: []
      }
    case 'STORE_NOTES':
      return {
        ...state,
        notes: action.notes
      }
    case 'ADD_NOTE':
      return {
        ...state,
        notes: [...state.notes, action.note]
      }
    case 'UPDATE_NOTE':
      return {
        ...state,
        notes: state.notes.map(note => (note.id === action.note.id) ? action.note : note ) 
      }
    default:
      return state
  }
}

export default rootReducer
