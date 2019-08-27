import React from 'react';

class OrderRow extends React.Component {

    render() {
        const { order, handleOrderDelete } = this.props

        return (
            <tr key={order._id}>
                <td><img src={order.product.image} width="50px" alt={order.product.name} /></td>
                <td className="mobileRemove">{order.product.name}</td>
                <td className="mobileRemove">{order.quantity}</td>
                <td className="text-left">$ {order.product.price.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                <td>
                    <button className="btn btn-danger  p-2" onClick={() => handleOrderDelete(order._id)}><i className="fa fa-trash fa-2x"></i></button>
                </td>
            </tr>
        )
    }
}

export default OrderRow;