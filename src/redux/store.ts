import {applyMiddleware, combineReducers, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import {shoppingReducer} from './shopping-reducer'


const rootReducer = combineReducers({
    shopping: shoppingReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)))
export type AppRootStateType = ReturnType<typeof rootReducer>
// @ts-ignore
window.store = store