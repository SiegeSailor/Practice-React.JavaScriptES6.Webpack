import { createStore } from "redux";
import index from "./reducer/index.js";

export default createStore(index, {
    receipt: {
        receiptType: 2,
        taxId: "",
        receiptOptions: ["byMail"]
    },
    // 因為這個 state 的 key 等等會拿來解構，不可內外有同名 ( address )，因此改為 fullAddress
    fullAddress: {
        city: "新竹市",
        district: "",
        postalCode: "",
        address: ""
    }
})