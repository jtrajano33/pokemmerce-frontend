import React from 'react';
import { connect } from 'react-redux';
import { 
    getItems as _getItems, 
    deleteItem as _deleteItem,
    getOneItem as _getOneItem
 } from '../actions/itemActions';
import ProductsTable from './AdminComponents.js/ProductsTable';
import AddProductForm from './AdminComponents.js/AddProductFrom';
import UpdateProductForm from './AdminComponents.js/UpdateProductForm';

class AdminPage extends React.Component{

    state = {
        whichForm: "AddPokemon"
    }

    componentDidMount(){
        this.props.getItems();
    }

    handleDeleteItem = id => {
        this.props.deleteItem(id)
    }

    handleWhichForm = (form,id) => {
        this.setState({
            whichForm: form
        })

        if(form === "UpdatePokemon"){
            this.props.getOneItem(id)
        }
    }

    render(){
         
        const { items } = this.props;

        const { whichForm } = this.state;

        const CurrentForm = whichForm === "AddPokemon"? <AddProductForm itemSuccessNotif={this.props.itemSuccessNotif} /> : <UpdateProductForm pokemon={this.props.pokemon} itemSuccessNotif={this.props.itemSuccessNotif} />

        return(
            <div style={{marginTop: '100px'}}>
                <h1 id="adminTop" className="mt-5">Admin Page</h1>
                {CurrentForm}
                <ProductsTable  
                    items={items} 
                    handleDeleteItem={this.handleDeleteItem} 
                    getItems={this.props.getItems} 
                    handleWhichForm={this.handleWhichForm} 
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        items: state.items.items,
        pokemon: state.items.pokemon,
        itemSuccessNotif: state.items.itemSuccessNotif
    }
}

const mapDispatchToProps = dispatch => {
    return{
        getItems: () => dispatch(_getItems()),
        deleteItem: id => dispatch(_deleteItem(id)),
        getOneItem: id => dispatch(_getOneItem(id))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);