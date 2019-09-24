class AddressPicker extends React.Component {
    constructor(props) {
        super(props)
        this.cities = Object.keys(this.props.taiwanPostalCodes)
        // 為了避免 state 的更新導致同個 DOM 不斷更新，將 state 移到最上層，也就是 App.jsx
        // this.state = {
        //     city: `新竹市`,
        //     district: ``,
        //     postalCode: ``,
        //     address: ``,
        // }
    }

    handlerRelated = (name, value) => {
        // mergeObject 是要利用 ES6 ... 的合併特性作判斷處理
        // 實際使用見下方的 inputHandler
        let mergeObject = {}
        const { taiwanPostalCodes, fullAddress: { city, district, postalCode, address } } = this.props

        if (name == "city" && city != value) {
            mergeObject['district'] = ""
            mergeObject['postalCode'] = ""
        } else if (name == "district" && district != value) {
            const cityData = taiwanPostalCodes[city];
            const postalCode = cityData[value];
            mergeObject['postalCode'] = postalCode
        }

        return mergeObject
    }

    inputHandler = (e) => {
        const { name, value } = e.target
        const { fullAddress, handler } = this.props

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
        // 如果上述 if 成真 ( 在 hanlderRelated 內。即選擇 city 後的第一次顯示 )，則 margeObject 就有了 district 為空的 object
        // 使用 ... 合併的情況下，會優先留有 ... 的值，因此 mergetObject 的 district 的空值會覆蓋 this.state.district
        // postalCode 同理
        handler("fullAddress", { ...fullAddress, ...mergeObject, [name]: value })
    }

    getCityOptions = (cities) => {
        // # 重新繪製時，React 可以比對前後兩者的差異，進而減少效能消耗
        // 這當中，靠的就是用獨特的 key 比對。這邊因為每個 target ( 在這裡是 city 或 district ) 不同，固當作 key 使用
        return cities.map((city) => {
            return (<option key={city} value={city}>{city}</option>)
        })
    }

    getDistricOptions = (districts) => {
        return districts.map((district) => {
            return (<option key={district} value={district}>{district}</option>)
        })
    }

    render = () => {
        const { taiwanPostalCodes, fullAddress: { city, district, postalCode, address } } = this.props
        const cityOptions = this.getCityOptions(this.cities)
        // 由於區域在城市下，而城市會隨時更動，因此 district 的取得需在 render 時
        const cityData = taiwanPostalCodes[city];
        const districts = Object.keys(cityData)
        const districtsOptions = this.getDistricOptions(districts)
        return (
            <div>
                <label>
                    城市
                    <select name="city"
                        onChange={this.inputHandler}
                        value={city}
                    >
                        {cityOptions}
                    </select>
                </label>
                <br />
                <label>
                    市/區
                    <select
                        name="district"
                        onChange={this.inputHandler}
                        value={district}
                    >
                        {districtsOptions}
                    </select>
                </label>
                <br />
                <label>
                    郵遞區號
                    <input
                        name="postalCode"
                        value={postalCode}
                        disabled={true} />
                </label>
                <br />
                <label>
                    <input
                        name="address"
                        onChange={this.inputHandler}
                        value={address}
                    />
                </label>
            </div>
        )
    }
}

export default AddressPicker;