import {
    CHANGE_RECIEPT_TYPE, 
    ADD_TAX_ID, 
    CHANGE_RECEIPT_OPTIONS,
    UPDATE_FULL_ADDRESS
} from './actionTypes.js' 

export let changeReceiptType = (event) => {
    const {value} = event.target
    return {
        type: CHANGE_RECIEPT_TYPE,
        receiptType: value
    }
}

export let addTaxId = (event) => {
    const {value} = event.target
    return {
        type: ADD_TAX_ID,
        taxId: value
    }
}

export let changeReceiptOptions = (values) => {
    return {
        type: CHANGE_RECEIPT_OPTIONS,
        receiptOptions: values
    }
}

export let updateFullAddress = (fullAddress) => {
 return {
     type: UPDATE_FULL_ADDRESS,
     fullAddress: fullAddress
 }
}