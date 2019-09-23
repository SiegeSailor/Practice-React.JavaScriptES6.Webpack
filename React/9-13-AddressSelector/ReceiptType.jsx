class ReceiptType extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            receiptType: 2,
            taxId: ``,
            receiptOptions: ["promptRegistered"]
        }
    }

    // ## 這幾乎是標準的 React 使 input 能夠更改 value 的方式
    handler = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value }, () => {
            console.log(this.state)
        })
    }

    removeValueFromArray = (array, value) => {
        return array.filter((element) => {
            // 如果 values 這個陣列裡面的值依序比較與 value(newValue) 相同，則留下
            return element != value
        })
    }

    checkboxHandler = (event) => {
        // 因為 HTML form 的使用需求，這裡的 name 不會是我們需要的，多了 []
        // const { name, value } = event.target;

        // 因應 HTML 需求的取 name 方式
        const newValue = event.target.value;
        const name = event.target.getAttribute(`attributeName`);

        let values = this.state[name]
        if (values.includes(newValue)) {
            // 如果現在的 name 中有選擇的 checkbox 的值，則移除。即已打勾再點一次取消的行為。
            values = this.removeValueFromArray(values, newValue)
        } else {
            // 如果沒有，則加入。即未打勾而後勾選的行為。
            values.push(newValue)
        }

        // 與下方 disabled 的判斷做連結，當要求條件的值未勾選時則清空
        if (name == `receiptOptions` && !values.includes(`byMail`)) {
            values = []
        }

        this.setState({ [name]: values }, () => {
            console.log(this.state)
        })
    }

    render = () => {
        return (
            <div>
                <span>發票類型</span>
                <br />
                <label htmlFor="">
                    {/* 注意 checked 的寫法，這裡有類似指定條件、if 的作用 */}
                    <input type="radio" name="receiptType" value="2" checked={this.state.receiptType == 2} onChange={this.handler} />
                    個人
                </label>
                <br />
                <label htmlFor="">
                    <input type="radio" name="receiptType" value="3" checked={this.state.receiptType == 3} onChange={this.handler} />
                    公司
                    統一編號
                    <input type="text" name="taxId" value={this.state.taxId} onChange={this.handler} />
                </label>
                <br />
                <br />
                <div>
                    <span>郵寄選項</span>
                    <br />
                    <label htmlFor="">
                        {/* 這裡的 name 中有 [] 是因為要用 HTML form 送值，如果沒有則不必有此 [] */}
                        <input type="checkbox" name="receiptOptions[]" value="byMail"
                            checked={this.state.receiptOptions.includes(`byMail`)}
                            onChange={this.checkboxHandler}
                            // 這裡的 attributeName 只是作為 key 使用，讓其值可用 getAttribute 取得
                            attributeName="receiptOptions" />
                        實體寄送(+ $30)
                    </label>
                    <br />
                    <label htmlFor="">
                        <input type="checkbox" name="receiptOptions[]" value="promptRegistered"
                            checked={this.state.receiptOptions.includes(`promptRegistered`)}
                            onChange={this.checkboxHandler}
                            attributeName="receiptOptions"
                            // 最後，利用比對的方式，使此選項在上一個選項還未被點擊前無法點擊
                            disabled={!this.state.receiptOptions.includes(`byMail`)} />
                        限時掛號(再 +30$ = $60))
                    </label>
                </div>
            </div>
        )
    }

}

export default ReceiptType;