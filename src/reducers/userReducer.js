const initialState = null

const userReducer = (state = initialState, action) => {
  
  switch (action.type) {
    
    case 'LOG_IN_USER':
      // Save the logged in user data
      const { id, username } = action.user
      return { id, username }
    
    case 'LOG_OUT_USER':
      // Reset to initial state
      return initialState
    
    default:
      return state
  }

}


export default userReducer
