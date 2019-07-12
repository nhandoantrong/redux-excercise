import {combineReducers} from "redux"
import Text from "./reducers/TextReducer";
import Counter from "./reducers/CountingReducer"

const rootReducer = combineReducers({
    Text,
    Counter
})

export default rootReducer