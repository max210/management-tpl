import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import testModule from './testModule'

const rootReducer = combineReducers({ testModule })
const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
