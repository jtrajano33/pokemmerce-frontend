import React from 'react';
import { connect } from 'react-redux';
import { getItems as _getItems } from '../../actions/itemActions';
import Footer from "../Footer";
import StoreProduct from './StoreProduct';

class ShopPage extends React.Component {
    state = {
        currentCategory: 'all'
    }

    componentDidMount() {
        this.props.getItems();
    }

    changeCategory = categoryname => {
        this.setState({
            currentCategory: categoryname
        })
    }

    render() {
        const { currentCategory } = this.state;
        const { items } = this.props;

        let products;

        if(currentCategory === "all"){
            products = items.map(item => {
                return (
                        <StoreProduct item={item} key={item._id} />
                )
            })
        }

        else{
            products = items.filter(item => item.category === currentCategory).map(item => {
                return (
                        <StoreProduct item={item} key={item._id} />
                )
            })            
        }



        return (
            <div>
                <div style={{ marginTop: '120px' }} className="container-fluid">
                    <h1>Welcome to our store</h1>
                    <p>Find a pokemon suited for you!</p>
                    <div className="row pt-3">
                        <div className="col-md-3 col-lg-3">
                            <div className="card p-2">
                                <h5>Categories</h5>
                                <div className="border categoryHover" onClick={() => this.changeCategory("all")}><p className="my-1">All</p></div>
                                <div className="border categoryHover" onClick={() => this.changeCategory("legendary")}><p className="my-1">Legendaries</p></div>
                                <div className="border categoryHover" onClick={() => this.changeCategory("trained")}><p className="my-1">Trained</p></div>
                                <div className="border categoryHover" onClick={() => this.changeCategory("rare")}><p className="my-1">Rare</p></div>
                            </div>
                        </div>
                        <div className="col-md-9 col-lg-9">
                            {items.length > 0 ?
                             <div className="row">
                                {products}
                            </div> 
                            :
                            <div className="mb-5">
                                <h2>Loading awesome pokemons...</h2>
                                <img src="./assets/pikachu-register.png" width="50%"  className="animated jackInTheBox infinite mt-3" alt="Loading items..."/>
                            </div>                          
                            }

                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        items: state.items.items
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getItems: () => dispatch(_getItems()),
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);