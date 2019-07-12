import * as types from "../constants/constants"

const initialState = {
    counter: 42
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.INCREASE:
            return {
                ...state,
                counter: state.counter + action.amount
            }
        case types.DECREASE:
            return {
                ...state,
                counter: state.counter - action.amount
            }


        default:
            return state
    }
}
