import AddressPicker from './redux/components/AddressPicker.jsx'
import ReceiptType from './redux/components/ReceiptType.jsx'
import TaiwanPostalCode from './TaiwanPostalCode.json'
import React from 'react';
import Button from '@material/react-button';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import { connect } from 'react-redux';

class App extends React.Component {
    checkIsReceiptTypeReady = () => {
        let result = false
        if (this.props.receipt.receiptType == 2) {
            result = true
        } else if (this.props.receipt.receiptType == 3 && this.props.receipt.taxId != "") {
            result = true
        }

        return result
    }

    checkIsAddressReady = () => {
        const { city, district, postalCode, address } = this.props.fullAddress
        if (city != "" && district != "" && postalCode != "" && address != "") {
            return true
        }
        return false
    }

    isReady = () => {
        return this.checkIsReceiptTypeReady() && this.checkIsAddressReady()
    }

    render = () => {
        console.log(this.props)
        return (
            <form>
                <Grid>
                    <Row>
                        {/* 當使用 column 時，會蓋掉其他所有指定設備的寬度，因此當使用到 phone, tablet
                        等時，必須一起使用 desktop, phone, tablet */}
                        <Cell desktopColumns={3} phoneColumns={0} tabletColumns={1}></Cell>
                        <Cell desktopColumns={6} phoneColumns={4} tabletColumns={6}>
                            <ReceiptType />
                            <br />
                        </Cell>
                        <Cell desktopColumns={3} phoneColumns={0} tabletColumns={1}></Cell>
                    </Row>
                    <Row>
                        <Cell desktopColumns={3} phoneColumns={0} tabletColumns={1}></Cell>
                        <Cell desktopColumns={6} phoneColumns={4} tabletColumns={6}><AddressPicker />
                            <br></br>
                        </Cell>
                        <Cell desktopColumns={3} phoneColumns={0} tabletColumns={1}></Cell>
                    </Row>
                    <Row>
                        <Cell desktopColumns={3} phoneColumns={0} tabletColumns={1}></Cell>
                        <Cell desktopColumns={6} phoneColumns={4} tabletColumns={6}>
                            <Button type="submit" outlined={true} disabled={!this.isReady()
                        }>Submit</Button></Cell>
                        <Cell desktopColumns={3} phoneColumns={0} tabletColumns={1}></Cell>
                    </Row>
                </Grid>
            </form>
        )
    }
}
const mapStateToProps = state => {
    return state
}
export default connect(mapStateToProps, null)(App);