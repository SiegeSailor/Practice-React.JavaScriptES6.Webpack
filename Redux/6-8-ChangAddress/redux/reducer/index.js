import { combineReducers } from 'redux';
import receipt from './receiptType.js';
// 這裡 import 進來的名稱必須與 store 內的 key 名稱對應，因此不能是 receiptType
import fullAddress from "./addressPicker.js";

export default combineReducers({ receipt, fullAddress })