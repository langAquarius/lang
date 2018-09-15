import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import reducers from './reducer'

let store = createStore(reducers,applyMiddleware(logger),applyMiddleware(thunk))

export default store