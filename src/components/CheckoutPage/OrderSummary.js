import React from 'react';

const OrderSummary = props => {

    const { totalAmount, orderCount, checkoutOrders } = props

    return (
        <div>
            <h4 className="d-flex justify-content-between align-items-center mb-3 mt-2">
                <span className="text-muted">Your cart</span>
                <span className="badge btn-pokemon badge-pill">{orderCount}</span>
            </h4>
            <ul className="list-group mb-3 text-left">
                {checkoutOrders.map(order => {
                    return (
                        <li className="list-group-item d-flex justify-content-between lh-condensed" key={order._id}>
                            <div style={{width: "50%"}}>
                                <img src={order.product.image} width="20%" alt={order.product.name} />
                                <small className="text-muted ml-3">{order.product.name}</small>
                            </div>
                            <span className="text-muted">$ {order.product.price.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                        </li>
                    )
                })}
                <li className="list-group-item d-flex justify-content-between">
                    <span><strong>Total (USD)</strong></span>
                    <strong>$ {totalAmount.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</strong>
                </li>
            </ul>

        </div>
    )
}

export default OrderSummary;