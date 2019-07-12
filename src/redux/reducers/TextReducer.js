import * as types from "../constants/constants"

const initialState ={
    text : "React",
    buttonName:["React", "Angular", "React-redux"]
}

const TextReducer = (state =initialState, action) =>{
    switch(action.type){
        case types.CHANGE_TEXT :
            return {
                ...state,
                text: action.text
            }
        default:
            return state;
    }
}

export default TextReducer;