import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { clearCount as _clearCount } from '../../actions/orderActions';


class ThankYouPage extends React.Component {
    componentDidMount(){
        this.props.clearCount();
    }

    render() {
        const { userId, totalAmount } = this.props;

        const thankyou = userId && totalAmount > 0 ?
                <div className="container">
                    <div>
                        <i className="fa fa-check-circle fa-5x text-success thankanimation" style={{ transform: 'scale(2)' }}></i>
                        <div style={{ marginTop: '70px' }}>
                            <h1 className="mb-4">Thank you!</h1>
                            <p>Your order has been successfully completed. Expect your pokemon(s) to arrive within one week ;)</p>
                        </div>
                    </div>
                </div>
            :
            <Redirect to="/" />

        return (
            <div style={{ marginTop: '210px' }}>
                {thankyou}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        userId: state.user.userId,
        totalAmount: state.orders.totalAmount,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        clearCount: () => dispatch(_clearCount())
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThankYouPage);