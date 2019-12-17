import {
    CHANGE_RECIEPT_TYPE, 
    ADD_TAX_ID, 
    CHANGE_RECEIPT_OPTIONS
} from '../actionTypes.js' 

const initialState = {
}

let reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_RECIEPT_TYPE:
            // reducer 撰寫對值更改的情形時，應參考 store 內的資料架構
            // 注意，永遠都要先把原本的以 ... 全傳、後面再疊加的方式改值
            return {...state, receiptType: action.receiptType}
        case ADD_TAX_ID:
                return {...state, taxId: action.taxId}
        case CHANGE_RECEIPT_OPTIONS:
                return {...state, receiptOptions: action.receiptOptions}
        default:
            return state
    }
}

export default reducer;