import React from 'react';
import './App.css';
import AdminPage from './components/AdminPage';
import HomePage from '../src/components/Homepage/HomePage';
import CartPage from '../src/components/CartPage/CartPage';
import CheckoutPage from '../src/components/CheckoutPage/CheckoutPage';
import ShopPage from '../src/components/ShopPage/ShopPage';
import ThankYouPage from '../src/components/ThankYouPage/ThankYouPage';
import Navbar from '../src/components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from 'react-redux';
import { getOrders as _getOrders, clearCount as _clearCount } from './actions/orderActions';
import LoginModal from './components/LoginModal';
import { signOut as _signOut } from './actions/userActions';


class App extends React.Component{

  componentDidMount(){
    this.props.getOrders();
  }


  render(){

    return (
      <div className="App">

        <BrowserRouter>
          <Navbar 
            orderCount={this.props.orderCount} 
            token={this.props.token} 
            signOut={this.props.signOut} 
            role={this.props.role}
            clearCount={this.props.clearCount}
          />
          <Route exact path="/" component={ HomePage } />
          <Route exact path="/admin" component={ AdminPage } />
          <Route exact path="/cart" component={ CartPage } />
          <Route exact path="/shop" component={ ShopPage } />
          <Route exact path="/checkout" component={ CheckoutPage } />
          <Route exact path="/thankyou" component={ ThankYouPage } />
          <ToastContainer hideProgressBar={true} autoClose={3000} />
          <LoginModal />
        </BrowserRouter>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return{
    orderCount: state.orders.orderCount,
    token: state.user.token,
    role: state.user.role,
  }
}

const mapDispatchToProps = dispatch => {
  return{
    getOrders: () => dispatch(_getOrders()),
    signOut: () => dispatch(_signOut()),
    clearCount: () => dispatch(_clearCount())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
