
import {createStore} from "redux"
import rootReducer from "./reducer/combine"


const store=createStore(rootReducer)
export default store 