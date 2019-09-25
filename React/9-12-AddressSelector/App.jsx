import AddressPicker from './AddressPicker.jsx.js'
import ReceiptType from './ReceiptType.jsx.js'
import TaiwanPostalCode from './TaiwanPostalCode.json.js'

class App extends React.Component {
    constructor(props) {
        super(props)
        // 為了避免 state 的更新導致多個 DOM 重繪，將下層的 state 移到上層
        this.state = {
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
        }
    }

    // 由於 state 在本層，因此在此曾撰寫 handler 並傳送到下層們
    handler = (name, value) => {
        this.setState({ [name]: value }, () => {
            console.log(this.state)
        })
    }

    checkIsReceiptTypeReady = () => {
        let result = false
        if (this.state.receipt.receiptType == 2) {
            result = true
        } else if (this.state.receipt.receiptType == 3 && this.state.receipt.taxId != "") {
            result = true
        }

        return result
    }

    checkIsAddressReady = () => {
        const { city, district, postalCode, address } = this.state.fullAddress
        if (city != "" && district != "" && postalCode != "" && address != "") {
            return true
        }
        return false
    }

    isReady = () => {
        return this.checkIsReceiptTypeReady() && this.checkIsAddressReady()
    }

    render = () => {
        console.log("App render")
        return (
            <form>
                {/* 將下層需要的 state 傳入，這樣等於是用 props 傳入。由於現在 state 在外層， */}
                {/* 因此 handler 也放在外層，與 state 一起。 */}
                <ReceiptType
                    handler={this.handler}
                    receipt={this.state.receipt}
                />
                <hr />
                <AddressPicker
                    handler={this.handler}
                    fullAddress={this.state.fullAddress}
                    taiwanPostalCodes={TaiwanPostalCode}
                />
                <button type="submit" disabled={!this.isReady()}>Submit</button>
            </form>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("app"));