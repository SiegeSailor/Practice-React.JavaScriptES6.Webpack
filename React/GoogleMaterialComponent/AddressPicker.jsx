import Card, {CardPrimaryContent} from "@material/react-card";

import TextField, {HelperText, Input} from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import Select, {Option} from '@material/react-select';

class AddressPicker extends React.Component {
    constructor(props) {
        super(props)
        this.cities = Object.keys(this.props.taiwanPostalCodes)
        // ## 為了不要用 form 送出多餘的值，拿掉 enhanced select 的 name
        this.div = React.createRef();
    }

    componentDidMount = () => {
        // ## 為了不要用 form 送出多餘的值，拿掉 enhanced select 的 name
        let enhancedSelects = this.div.current.querySelectorAll(`input[name="enhanced-select"]`)
        enhancedSelects.forEach(select=> {
            console.log(select)
            select.removeAttribute(`name`)
        })
        // 如果很確定 DOM 順序的話，也可以這樣指定 name 的 key，傳出有意義的 key，來避免 form 傳出 enhanced-select 的無意義 key
        enhancedSelects[0].name = `district`;
    }

    handlerRelated = (name, value) => {
        let mergeObject = {}
        const {
            taiwanPostalCodes,
            fullAddress: {
                city,
                district,
                postalCode,
                address
            }
        } = this.props

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

    onEnhancedChange = (name, index, item) => {
        // 見下方 district 的套用方法，name 是由 bind 傳過來的
        // 參數=name, 當下值的 index=index，當下值的 HTML=index，後兩者是 onEnhancedChange 本來就有的，前者是需要用 bind 傳才有的
        console.log(name, index, item)

        const value = item.getAttribute(`data-value`);
        // 以下與 inputHandler 相同
        const {fullAddress, handler} = this.props
        const mergeObject = this.handlerRelated(name, value)
        handler("fullAddress", {
            ...fullAddress,
            ...mergeObject,
            [name]: value
        })
    }

    inputHandler = (event) => {
        const {name, value} = event.target
        const {fullAddress, handler} = this.props
        const mergeObject = this.handlerRelated(name, value)
        handler("fullAddress", {
            ...fullAddress,
            ...mergeObject,
            [name]: value
        })
    }

    clearAddress = () => {
        const name = "address"
        const value = ""
        const {fullAddress, handler} = this.props
        const mergeObject = this.handlerRelated(name, value)
        handler("fullAddress", {
            ...fullAddress,
            ...mergeObject,
            [name]: value
        })
    }

    getCityOptions = (cities) => {
        return cities.map((city) => {
            return (
                <Option key={city} value={city}>{city}</Option>
            )
        })
    }

    getDistricOptions = (districts) => {
        return districts.map((district) => {
            return (
                <Option key={district} value={district}>{district}</Option>
            )
        })
    }

    render = () => {
        const {
            taiwanPostalCodes,
            fullAddress: {
                city,
                district,
                postalCode,
                address
            }
        } = this.props
        const cityOptions = this.getCityOptions(this.cities)
        const cityData = taiwanPostalCodes[city];
        const districts = Object.keys(cityData)
        const districtsOptions = this.getDistricOptions(districts)
        return (
            // ## 為了不要用 form 送出多餘的值，拿掉 enhanced select 的 name
            <div ref={this.div}>
                <Card>
                    <CardPrimaryContent>
                        <div
                            style={{
                            padding: "1rem"
                        }}>
                            <Select
                                label='城市'
                                name="city"
                                value={city}
                                onChange={this.inputHandler}
                                outlined={true}>
                                {cityOptions}
                            </Select>
                            <br/>
                            <br/>
                            {/* 套用 enhanced 可以避免沒有初選值而使 UI 版型跑掉的問題，注意這裡因為套用 enhanced，因此整個結構都改變，
                            必須由 onChange 變為 onEnhancedChange，同時 handler 也必須更改 */}
                            <Select
                                label='市/區'
                                name="district"
                                value={district}
                                // 由於在 enhanced 架構中，select 內並沒有 name，因此必須採用別的作法，
                                // 第一種，用 bind 綁定 onEnhancedChange 到 this，並且傳一個值過去當作 name 使用
                                onEnhancedChange={this.onEnhancedChange.bind(this, "district")}
                                enhanced={true}
                                outlined={true}>
                                {districtsOptions}
                            </Select>
                            {/* 在 Network 中觀看這個 form 發出的 request，會發現套用 enhanced 的 Query String Parameters 的 key 變成 enhanced-select，
                            這個問題可以直接用 state 的值去發 request 來解決，但若是要用 form 來發送，就必須使用 hidden 的 input 來一起送值，如下 */}
                            <input type="hidden" name="district" value={district}/>
                            <br/>
                            <br/>
                            <TextField outlined label='郵遞區號'>
                                <Input type="text" name="postalCode" value={postalCode} disabled={true}/>
                            </TextField>
                            <br/>
                            <br/>
                            <TextField
                                outlined
                                label='地址'
                                helperText={<HelperText> 請輸入正確地址用以寄送商品 </ HelperText>}
                                leadingIcon={< MaterialIcon role = "button" icon = "alarm" />}
                                onTrailingIconSelect={this.clearAddress}
                                trailingIcon={< MaterialIcon role = "button" icon = "delete" />}>
                                <Input type="text" name="address" value={address} onChange={this.inputHandler}/>
                            </TextField>
                        </div>
                    </CardPrimaryContent>
                </Card>
            </div>
        )
    }
}

export default AddressPicker;