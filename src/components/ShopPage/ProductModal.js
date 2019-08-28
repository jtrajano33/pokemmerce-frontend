import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { addOrder as _addOrder } from '../../actions/orderActions';

class ProductModal extends React.Component {

  handleOrder = itemId => {
    const { userId } = this.props
    this.props.addOrder({ itemId, userId })
  }

  render() {
    const { item, isLoading, token } = this.props;

    return (
      <div className="modal fade" id={item.name} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Pokemon Description</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body py-3">
              <div className="row">
                <div className="col-md-6 col-lg-6">
                  <div className="card p-2 embed-responsive embed-responsive-4by3">
                    <img className="card-img-top embed-responsive-item" src={item.image} alt={item.name} />
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 text-left" style={{ fontSize: '14px' }}>
                  <p className="itemNameMobile"><span className="font-weight-bold">Name: </span>{item.name}</p>
                  <p><span className="font-weight-bold">Date Caught: </span>{moment(item.createdAt).calendar()}</p>
                  <p className="text-justify"><span className="font-weight-bold">Description: </span>{item.description}</p>
                  <p><span className="font-weight-bold">Price: </span>$ {item.price.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                </div>
              </div>
            </div>

            {token ?
              <div className="modal-footer py-2">

                {!isLoading ?
                  <button type="button" className="btn btn-pokemon" onClick={() => this.handleOrder(item._id)}>
                    <i className="fa fa-shopping-cart"></i>
                    <span className="m-2">Buy</span>
                  </button>

                  :

                    <button type="button" className="btn btn-pokemon px-5">
                          <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                      </button>

                }

                <button type="button" className="btn btn-success" data-dismiss="modal">Close</button>
              </div>

              :
              <div className="modal-footer py-2">

                <button type="button" className="btn btn-light" disabled>
                  <i className="fa fa-lock" style={{transform:"scale(1.3)"}}></i>
                  <span className="pl-2">Login</span>
                </button>


                <button type="button" className="btn btn-success" data-dismiss="modal">Close</button>
              </div>

            }

          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.orders.isLoading,
    token: state.user.token,
    userId: state.user.userId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addOrder: data => dispatch(_addOrder(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductModal);