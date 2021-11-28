import {createStore, applyMiddleware} from 'redux'
import loginStatus from '../reducers/reducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const middleware = [thunk]

const store = createStore(
    loginStatus,
    composeWithDevTools(applyMiddleware(...middleware))
)


export default store