import TaiwanPostalCode from "./TaiwanPostalCode.json";

class AddressPicker extends React.Component {
    constructor(props) {
        super(props)
        this.postalCode = TaiwanPostalCode
        this.cities = Object.keys(this.postalCode)
        this.state = {
            city: `新竹市`,
            district: ``,
            postalCode: ``,
            address: ``,
        }
    }

    renderOptions = (targets) => {
        return targets.map((target, index) => {
            return (
                // # 重新繪製時，React 可以比對前後兩者的差異，進而減少效能消耗
                // 這當中，靠的就是用獨特的 key 比對。這邊因為每個 target ( 在這裡是 city 或 district ) 不同，固當作 key 使用
                <option key={target} value={target}>{target}</option>
            )
        })
    }

    handlerRelated = (name, value) => {
        // 利用 ES6 ... 的合併特性作判斷處理
        let mergeObject = {}

        if (name == `city` && this.state.city != value) {
            mergeObject[`district`] = ``
            mergeObject[`postalCode`] = ``
        } else if (name == `district` && this.state.postalCode != value) {
            const cityData = this.postalCode[this.state.city]
            const postalCode = cityData[value]
            mergeObject[`postalCode`] = postalCode
        }

        return mergeObject
    }

    handler = (event) => {
        let { name, value } = event.target

        // 選擇完 city 後 district 會變動，但真正 state 裡面的 district 是在 district 的選擇後才變動的
        // 因此設立條件，使選擇 city 後的 district 清空
        // if (name == `city` && this.state.city != value) {
        //     this.setState({[name]: value, district: ""}, ()=>{
        //         console.log(this.state)
        //     })
        // } else {
        //     this.setState({ [name]: value }, () => {
        //         console.log(this.state)
        //     })
        // }

        const mergeObject = this.handlerRelated(name, value)


        // 如果上述 if 成真 ( 即選擇 city 後的第一次顯示 )，則 margeObject 就有了 district 為空的 object
        // 使用 ... 合併的情況下，會優先留有 ... 的值，因此 mergetObject 的 district 的空值會覆蓋 this.state.district
        // postalCode 同理
        this.setState({ ...mergeObject, [name]: value }, () => {
            console.log(this.state)
        })

    }

    render = () => {
        const cityOptions = this.renderOptions(this.cities)
        // 由於區域在城市下，而城市會隨時更動，因此 district 的取得需在 render 時
        const cityData = this.postalCode[this.state.city]
        const district = Object.keys(cityData)
        const districtOptions = this.renderOptions(district)

        return (
            <div>
                <label htmlFor="">
                    城市
                    <select name="city" id="" onChange={this.handler} value={this.state.city}>
                        {cityOptions}
                    </select>
                </label>
                <br />
                <label htmlFor="">
                    市 / 區
                    <select name="district" id="" onChange={this.handler} value={this.state.district}>
                        {districtOptions}
                    </select>
                </label>
                <br />
                <label htmlFor="">
                    郵遞區號
                    <input name="postalCode" value={this.state.postalCode} disabled={true} type="text" />
                </label>
                <br />
                <label htmlFor="">
                    地址
                    <input name="address" onChange={this.handler} value={this.state.address} type="text" />
                </label>
            </div>
        );
    }
};

export default AddressPicker;