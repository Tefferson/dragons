import user from './user'
import dragons from './dragons'

import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { combineReducers, createStore, applyMiddleware } from 'redux'

const reducers = combineReducers({ user, dragons })

const middlewares = [thunk]

if (process.env.NODE_ENV !== 'production') {
	middlewares.push(logger)
}

const store = createStore(reducers, applyMiddleware(...middlewares))

export default store
