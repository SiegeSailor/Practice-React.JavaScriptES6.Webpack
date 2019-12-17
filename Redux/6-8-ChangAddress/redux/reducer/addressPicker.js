import {
    CHANGE_RECIEPT_TYPE, 
    ADD_TAX_ID, 
    CHANGE_RECEIPT_OPTIONS,
    UPDATE_FULL_ADDRESS
} from '../actionTypes.js' 

const initialState = {
    fullAddress: {}
}

let reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_FULL_ADDRESS:
            return {
                ...action.fullAddress
                // 因為這裡的動作是一次更換全部，因此直接替換
                // 通常作法應參考 receiptType
            }
        default:
            return state
    }
}

export default reducer;