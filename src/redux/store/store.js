import {createStore,combineReducers,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"
import taskReducer from "../reducers/cardReducer"


const rootReducer=combineReducers({card:taskReducer})

const store= createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))

export default store;