import Card, {
    CardPrimaryContent,
} from "@material/react-card";

import TextField, { HelperText, Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';


class AddressPicker extends React.Component {
    constructor(props) {
        super(props)
        this.cities = Object.keys(this.props.taiwanPostalCodes)
    }

    handlerRelated = (name, value) => {
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
        const mergeObject = this.handlerRelated(name, value)
        handler("fullAddress", { ...fullAddress, ...mergeObject, [name]: value })
    }

    clearAddress = () => {
        const name = "address" 
        const value = ""
        const { fullAddress, handler } = this.props
        const mergeObject = this.handlerRelated(name, value)
        handler("fullAddress", { ...fullAddress, ...mergeObject, [name]: value })
    }

    getCityOptions = (cities) => {
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
        const cityData = taiwanPostalCodes[city];
        const districts = Object.keys(cityData)
        const districtsOptions = this.getDistricOptions(districts)
        return (
            <div>
                <Card>
                    <CardPrimaryContent>
                        <div style={{ padding: "1rem" }}>
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
                            <br />
                            <TextField
                                outlined
                                label='郵遞區號'
                            >
                                <Input
                                    type="text"
                                    name="postalCode"
                                    value={postalCode}
                                    disabled={true}
                                />
                            </TextField>
                            <br />
                            <br />
                            <TextField
                                outlined
                                label='地址'
                                helperText={<HelperText>請輸入正確地址用以寄送商品</HelperText>}
                                leadingIcon={<MaterialIcon role="button" icon="alarm"/>}
                                onTrailingIconSelect={this.clearAddress}
                                trailingIcon={<MaterialIcon role="button" icon="delete"/>}
                            >
                                <Input
                                    type="text"
                                    name="address"
                                    value={address}
                                    onChange={this.inputHandler}
                                />
                            </TextField>
                        </div>
                    </CardPrimaryContent>
                </Card>
            </div>
        )
    }
}

export default AddressPicker;