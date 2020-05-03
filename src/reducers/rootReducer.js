const rootReducer = (state = {}, action) => {

  switch (action.type) {
    case 'LOADING_SESSION':
      return state  // TODO!
    case 'LOG_IN_USER':
      return {
        ...state,
        loggedInUser: action.user
      }
    default:
      return state
  }
}

export default rootReducer
