import React from 'react';
import { connect } from 'react-redux';
import { getOrders as _getOrders, deleteOrder as _deleteOrder } from '../../actions/orderActions';
import { getCheckOutOrders as _getCheckOutOrders } from '../../actions/checkoutActions';
import Footer from '../Footer';
import OrderRow from './OrderRow';
import { Link } from 'react-router-dom';

class CartPage extends React.Component {

    componentDidMount() {
        this.props.getOrders()
    }

    handleOrderDelete = id => {
        this.props.deleteOrder(id)
    }

    handleSubmit = orders => {
        this.props.getCheckOutOrders(orders)
    }

    render() {

        const { orders, isLoading, totalAmount, userId } = this.props;

        let orderRow;

        let userOrderArray=[];

        if(orders){
             orderRow = orders.filter(order => {
                  return order.user._id === userId
                 }).map(order => {
                     userOrderArray.push(order)
                return (
                    <OrderRow order={order} handleOrderDelete={this.handleOrderDelete}  key={order._id}/>
                )
            })
    
        } 

        return (

            <div style={{ marginTop: '120px' }}>
                <h1>My Shopping Cart</h1>
                <div className="container mt-5">
                    <table className="table">
                        <thead className="black white-text">
                            <tr>
                                <th scope="col">Image</th>
                                <th scope="col" className="mobileRemove">Item Name</th>
                                <th scope="col" className="mobileRemove">Quantity</th>
                                <th scope="col" className="text-left">Price</th>
                                <th width="10%" scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                orderRow && orderRow.length > 0? orderRow :
                                !orders && isLoading? 
                                <tr>
                                    <td colSpan="5" className="p-3"><p className="mb-0">Loading orders ...</p></td>
                                </tr>
                                :
                                orders && isLoading? 
                                <tr>
                                    <td colSpan="5" className="p-3"><p className="mb-0">Loading orders ...</p></td>
                                </tr>
                                : orders=== null ?
                                <tr>
                                    <td colSpan="5" className="p-2"><p className="mb-0">You have no orders</p></td>
                                </tr>
                                :
                                <tr>
                                    <td colSpan="5" className="p-2"><p className="mb-0">You have no orders <Link to="/shop"><button className="btn btn-success">Go to Store</button></Link></p></td>
                                </tr>                               
                            }
                            <tr>
                                <td colSpan="1" className="p-2 text-left font-weight-bold"><p className="mb-0">Total Amount:</p></td>
                                <td className="mobileSpan"></td>
                                <td className="mobileSpan"></td>
                                <td colSpan="2" className="px-3 py-3 text-right"><p className="mb-0">$ {totalAmount.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p></td>
                            </tr>  
                        </tbody>
                    </table>

                    <div className="text-right  mobileButton">
                        {totalAmount>0?
                            <Link to="/checkout">
                                <button onClick={()=>this.handleSubmit(userOrderArray)} className="btn btn-pokemon">Proceed To Checkout</button>
                            </Link>                             
                            :
                                <button className="btn btn-light" disabled >
                                    <i className="mr-2 fa fa-lock" style={{transform: "scale(1.3)"}}></i> Proceed To Checkout
                                </button> 
                        }
                        
                    </div>
                </div>

                <div style={{position: 'relative', top: "55px"}} className="cartFooter">
                    <Footer />
                </div>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        orders: state.orders.orders,
        isLoading: state.orders.isLoading,
        totalAmount: state.orders.totalAmount,
        userId: state.user.userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getOrders: () => dispatch(_getOrders()),
        deleteOrder: id => dispatch(_deleteOrder(id)),
        getCheckOutOrders: orders => dispatch(_getCheckOutOrders(orders))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);