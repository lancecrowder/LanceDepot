import React from 'react'

class PayTypeSelector extends React.Component{
    constructor(props){
        super(props);
        this.onPayTypeSelected = this.onPayTypeSelected.bind(this);
        this.state = {selectedPayType: null};
    }
    render() {
        return(
            <div className="field">
                <label htmlFor="order_pay_type">Pay Type</label>
                <select onChange={this.onPayTypeSelected} name="order[pay_type]">
                    <option value="">Select a Payment Method</option>
                    <option value="Check">Check</option>
                    <option value="Credit">Credit</option>
                    <option value="Purchase Order">Purchase Order</option>
                </select>
            </div>
        );
    }
    onPayTypeSelected(event){
     this.setState({ selectedPayType: event.target.value });
        // console.log((event.target.value));
    }

}
export default PayTypeSelector