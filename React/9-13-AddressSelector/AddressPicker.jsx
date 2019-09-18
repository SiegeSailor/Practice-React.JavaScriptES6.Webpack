import TaiwanPostalCode from "./TaiwanPostalCode.json";

class AddressPicker extends React.Component {
    constructor(props) {
        super(props)
        this.postalCode = TaiwanPostalCode
        this.cities = Object.keys(this.postalCode)
        this.state = {
            city: `新竹市`,
        }
    }
    
    renderCitiesOptions = (cities) => {
        return cities.map((city, index) => {
            return (
                // # 重新繪製時，React 可以比對前後兩者的差異，進而減少效能消耗
                // 這當中，靠的就是用獨特的 key 比對。這邊因為每個 city 不同，固當作 key 使用
                <option key={city} value={city}>{city}</option>
            )
        })
    }

    handler = (event) => {
        let {name, value} = event.target
        this.setState({[name]:value}, () => {
            console.log(this.state)
        })
    }

    render = () => {
        const cityOptions = this.renderCitiesOptions(this.cities)

        return(
            <div>
                <label htmlFor="">
                    城市
                </label>
                <select name="city" id="" onChange={this.handler} value={this.state.city}>
                    {cityOptions}
                </select>
                <label htmlFor="">
                    市 / 區
                </label>
                <select name="" id="">
                    <option value="">
                        中正區
                    </option>
                    <option value="">
                        大同區
                    </option>
                </select>
            </div>
        );
    }
};

export default AddressPicker;