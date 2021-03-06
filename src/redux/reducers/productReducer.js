//init state and action

import { ActionTypes } from "../constants/action-types"

const initialState = {
    products: [{
        id: 1,
        title: "Earl",
        category: "Programmer"
    }]
}

export const productReducer = (state = initialState, action) => {
    switch(action.type){
        case ActionTypes.SET_PRODUCTS:
            return state
        default: return state
    }
}