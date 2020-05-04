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
    case 'ADD_NOTE':
      return {
        ...state,
        notes: [...state.notes, action.note]
      }
    default:
      return state
  }
}

export default rootReducer
