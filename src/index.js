import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App'
import rootReducer from './reducers/rootReducer'


// Create the Redux store, incorporating redux-thunk for async actions
const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// Wrap the root <App/> component to connect the store
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>, 
  document.getElementById('root')
)
