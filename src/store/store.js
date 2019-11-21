import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

//reducers
import cartReducer from '../store/reducers/cartReducer'



const store =
    createStore(combineReducers(
        { cartReducer }),
        {},
        applyMiddleware(thunk, logger))

export default store