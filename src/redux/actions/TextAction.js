import * as types from "../constants/constants"

export const changeText = (text) =>({
    type: types.CHANGE_TEXT,
    text
})