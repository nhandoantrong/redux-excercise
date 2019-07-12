import * as types from "../constants/constants";


export const increase = (amount) =>({
    type: types.INCREASE,
    amount
})

export const decrease = (amount) =>({
    type: types.DECREASE,
    amount
})