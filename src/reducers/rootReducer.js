const rootReducer = (state = {}, action) => {

  switch (action.type) {
    case 'LOG_IN_USER':
      return {
        ...state,
        loggedInUser: action.user
      }
    case 'LOG_OUT_USER':
      return {
        ...state,
        loggedInUser: null
      }
    default:
      return state
  }
}

export default rootReducer
