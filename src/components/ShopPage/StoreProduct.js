import React from 'react';
import ProductModal from './ProductModal';

class StoreProduct extends React.Component{
    render(){
        const { item } = this.props

        const modalTarget = `#${item.name}`

        return(
            <div className="col-md-4 col-lg-4">

            <div className="card p-3 mb-3 itemHovered">
                <div className="card-group p-2 embed-responsive embed-responsive-4by3">
                    <img className="card-img-top embed-responsive-item" src={item.image} alt={item.name} />
                </div>

                <div className="card-body p-1">
                    <h4 className="card-title pt-2 mb-2">{item.name}</h4>

                    <p className="card-text">$ {item.price.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>

                    <button className="btn btn-primary btn-block" data-toggle="modal" data-target={modalTarget}>
                        <span className="mx-2">Details</span> <i className="fa fa-search"></i>
                    </button>

                </div>

            </div>
            <ProductModal item={item} />
        </div>
        )
    }
}

export default StoreProduct;