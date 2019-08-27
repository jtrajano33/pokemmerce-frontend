import React from 'react'


class DeliveryAddressForm extends React.Component {
    render() {

        const { checkoutOrders, address, city, state, zipCode, country, contactNumber, onChangeCheckoutFields  } = this.props; 

        return (
            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 col-md-pull-6 col-sm-pull-6">
                <form className="form card text-left p-4">
                    <div className="row">
                        <div className="form-group">
                            <div className="col-md-12 col-lg-12 mb-3">
                                <h4>Delivery Address</h4>
                            </div>
                        </div>

                        <div className="col-md-12 col-lg-12 mb-3">
                            <label className="mb-2" htmlFor="name"><strong>Name:</strong></label>
                            <input type="text" name="name" id="name" className="form-control" disabled value={checkoutOrders[0].user.name} />
                        </div>

                        <div className="col-md-12 col-lg-12 mb-3">
                            <label className="mb-2" htmlFor="email"><strong>Email Address:</strong></label>
                            <input type="text" name="email" id="email" className="form-control" disabled value={checkoutOrders[0].user.email} />
                        </div>

                        <div className="col-md-12 col-lg-12 mb-3">
                            <label className="mb-2" htmlFor="address"><strong>Address:</strong></label>
                            <input type="text" name="address" id="address" className="form-control" value={address} onChange={e=>onChangeCheckoutFields(e)} />
                        </div>

                        <div className="col-md-12 col-lg-12 mb-3">
                            <label className="mb-2" htmlFor="city"><strong>City:</strong></label>
                            <input type="text" name="city" id="city" className="form-control" value={city} onChange={e=>onChangeCheckoutFields(e)} />
                        </div>

                        <div className="col-md-12 col-lg-12 mb-3">
                            <label className="mb-2" htmlFor="state"><strong>State:</strong></label>
                            <input type="text" name="state" id="state" className="form-control" value={state} onChange={e=>onChangeCheckoutFields(e)} />
                        </div>

                        <div className="col-md-12 col-lg-12 mb-3">
                            <label className="mb-2" htmlFor="zipCode"><strong>Zip / Postal Code:</strong></label>
                            <input type="text" name="zipCode" id="zipCode" className="form-control" value={zipCode} onChange={e=>onChangeCheckoutFields(e)} />
                        </div>

                        <div className="col-md-12 col-lg-12 mb-3">
                            <label className="mb-2" htmlFor="country"><strong>Country:</strong></label>
                            <input type="text" name="country" id="country" className="form-control" value={country} onChange={e=>onChangeCheckoutFields(e)} />
                        </div>

                        <div className="col-md-12 col-lg-12 mb-5">
                            <label className="mb-2" htmlFor="contactNumber"><strong>Contact Number:</strong></label>
                            <input type="text" name="contactNumber" id="contactNumber" className="form-control" value={contactNumber} onChange={e=>onChangeCheckoutFields(e)} />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default DeliveryAddressForm;