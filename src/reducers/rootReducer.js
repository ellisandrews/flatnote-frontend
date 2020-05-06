import { combineReducers } from 'redux'

import notesReducer from './notesReducer'
import userReducer from './userReducer'


const rootReducer = combineReducers({
  loggedInUser: userReducer, 
  notes: notesReducer
})


export default rootReducer
