import Card, {
    CardPrimaryContent,
} from "@material/react-card";

import {
    Body2,
    Headline6,
} from '@material/react-typography';

import Radio, { NativeRadioControl } from '@material/react-radio';
import Checkbox from '@material/react-checkbox';
import TextField, { HelperText, Input } from '@material/react-text-field';

import React from 'react';
import { connect } from "react-redux";
import { changeReceiptType, addTaxId, changeReceiptOptions } from "./../actions.js"

class ReceiptType extends React.Component {

    componentDidMount = () => {
        // 這是既定的函式，是指 DOM 都 Render 完之後
        // 這裡因為 Google Material Component 的 value 沒有放好在元件內，所以我們必須這樣額外給予
        document.getElementById("byMail").value = "byMail"
        document.getElementById("promptRegistered").value = "promptRegistered"
    }

    // inputHandler = (e) => {
    //     const { name, value } = e.target

    //     const { receipt, handler } = this.props
    //     handler("receipt", { ...receipt, [name]: value })
    // }

    removeValueFromArray = (array, value) => {
        return array.filter((element) => {
            return element != value
        })
    }

    checkboxHandler = (e) => {
        // 注意這裡與 9-12-AddressSelector 的 ReceiptType.jsx 的差異，因為 Google Material Component 這個元件的結構，
        // AttributeName 的具體位置不像一般 HTML 一樣，value 也不在
        // 因此根據實際位置做出抓取值的調整
        const checkboxParent = e.target.closest('.mdc-checkbox')
        const newValue = e.target.value
        const name = checkboxParent.getAttribute("attributeName")
        const { receipt, handler } = this.props

        let values = receipt[name]
        if (values.includes(newValue)) {
            values = this.removeValueFromArray(values, newValue)
        } else {
            values.push(newValue)
        }

        if (name == "receiptOptions" && !values.includes("byMail")) {
            values = []
        }

        // 注意這邊的邏輯，是在 hanlder 處理好值後直接用 action 傳送
        // 也可以選擇不用 handler、action 單純傳值，再在 reducer 中處理的方式
        this.props.changeReceiptOptions(values)
        // handler("receipt", { ...receipt, [name]: values })
    }

    render = () => {
        const { receipt, handler } = this.props
        const { receiptType, taxId, receiptOptions } = receipt
        console.log(receiptOptions)
        return (
            <div>
                <Card>
                    <CardPrimaryContent>
                        <div style={{ padding: "1rem" }}>
                            <Headline6 tag="p">
                                發票類型
                            </Headline6>
                            <Body2 tag="div">
                                <div>
                                    <Radio label='個人' key='personal'>
                                        <NativeRadioControl
                                            name='receiptType'
                                            value='2'
                                            id='personal'
                                            onChange={this.props.changeReceiptType}
                                            checked={receiptType == 2}
                                        />
                                    </Radio>
                                    <br />
                                    <Radio label='公司' key='company'>
                                        <NativeRadioControl
                                            value='3'
                                            name='receiptType'
                                            id='company'
                                            onChange={this.props.changeReceiptType}
                                            checked={receiptType == 3}
                                        />
                                    </Radio>
                                    <TextField
                                        style={{"marginLeft" : "1rem"}}
                                        outlined
                                        label='統一編號'
                                    >
                                        <Input
                                            type="text"
                                            name="taxId"
                                            value={taxId}
                                            onChange={this.props.addTaxId}
                                        />
                                    </TextField>
                                </div>
                                <br />
                                <div>
                                    <Headline6 tag="p">
                                        郵寄選項
                                    </Headline6>
                                    <React.Fragment>
                                        <Checkbox
                                        // 照 Google Material Component 原本的概念，應該是 name 改為 receiptOptions，
                                        // 去掉 attritubteName
                                        // 並且值維持 on 與 off 來判斷是否勾選
                                        // 這裡為了符合原來的結構，就維持原樣並另用 workaround 的 handler 處理
                                            name="receiptOptions[]"
                                            attributeName="receiptOptions"
                                            nativeControlId='byMail'
                                            checked={receiptOptions.includes("byMail")}
                                            onChange={this.checkboxHandler}
                                        />
                                        <label htmlFor='byMail'>實體寄送(+ $30)</label>
                                    </React.Fragment>
                                    <br />
                                    <React.Fragment>
                                        <Checkbox
                                            name="receiptOptions[]"
                                            attributeName="receiptOptions"
                                            nativeControlId='promptRegistered'
                                            checked={receiptOptions.includes("promptRegistered")}
                                            disabled={
                                                !receiptOptions.includes("byMail")
                                            }
                                            onChange={this.checkboxHandler}
                                        />
                                        <label htmlFor='promptRegistered'>限時掛號(再 + $30 = 60)</label>
                                    </React.Fragment>

                                </div>
                            </Body2>
                        </div>
                    </CardPrimaryContent>
                </Card>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        receipt : state.receipt
    }
}
const mapDispatchToProps = { changeReceiptType, addTaxId, changeReceiptOptions }
export default connect(mapStateToProps, mapDispatchToProps)(ReceiptType);