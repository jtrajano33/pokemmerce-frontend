import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import DeliveryAddressForm from './DeliveryAddressForm';
import Footer from '../Footer';
import OrderSummary from './OrderSummary';
import { addCheckOutOrders as _addCheckOutOrders } from '../../actions/checkoutActions'

class CheckoutPage extends React.Component {
    state = {
        address: '',
        city: '',
        state: '',
        zipCode: '',
        country: '',
        contactNumber: '',
        orders: this.props.checkoutOrders
    }

    onChangeCheckoutFields = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = () => {
        this.props.addCheckOutOrders(this.state);
    }

    render() {
        const { userId, totalAmount, orderCount, checkoutOrders, isLoading, successOrder, message } = this.props
        console.log(successOrder)
        const CheckoutAuthenticated = userId && totalAmount > 0 ?
            <div className="row">
                <DeliveryAddressForm
                    checkoutOrders={checkoutOrders}
                    address={this.state.address}
                    city={this.state.city}
                    state={this.state.state}
                    zipCode={this.state.zipCode}
                    country={this.state.country}
                    contactNumber={this.state.contactNumber}
                    onChangeCheckoutFields={this.onChangeCheckoutFields}
                />
                <div className="col-md-4 col-lg-4 order-md-2 mb-4 summaryMobile">
                    <OrderSummary totalAmount={totalAmount} orderCount={orderCount} checkoutOrders={checkoutOrders} />
                    <button className="btn btn-block btn-pokemon" onClick={() => this.handleSubmit()}>{isLoading ? "Please wait..." : "Place Order"}</button>
                </div>
            </div>
            :
            <Redirect to="/" />

        const GoodbyeCheckout = !successOrder ?
            <div>
                <div style={{ marginTop: '120px' }} className="container-fluid">
                    <div style={{ marginBottom: '25px' }}>
                        <h1>Checkout Page</h1>
                    </div>
                    {message && <div className="alert alert-danger alert-dismissible fade show p-3" role="alert">
                                {message}
                            </div>}
                    {CheckoutAuthenticated}
                </div>
                <div style={{ position: 'relative', top: "55px" }}>
                    <Footer />
                </div>
            </div>:
            <Redirect to="/thankyou" />
        return (
            <div>
                {GoodbyeCheckout}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        userId: state.user.userId,
        totalAmount: state.orders.totalAmount,
        orderCount: state.orders.orderCount,
        checkoutOrders: state.checkout.checkoutOrders,
        isLoading: state.checkout.isLoading,
        successOrder: state.checkout.successOrder,
        message: state.checkout.message
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addCheckOutOrders: data => dispatch(_addCheckOutOrders(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage)