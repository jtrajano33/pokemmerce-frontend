import React from 'react';
import moment from 'moment';
import { HashLink as Link } from 'react-router-hash-link';

const ProductsTable = ({ items, handleDeleteItem, handleWhichForm }) => {

    const products = items.map(item => {
        return (
            <tr key={item._id}>
                <td><img src={item.image} width="50px" alt={item.name} /></td>
                <td>{item.name}</td>
                <td>{item.price.toFixed(2)}</td>
                <td>{moment(item.createdAt).calendar()}</td>
                <td>
                    <Link to="/admin/#adminTop">
                        <button className="btn btn-success p-2" onClick={() => handleWhichForm("AddPokemon",item._id)}><i className="fa fa-plus-square fa-2x"></i></button>
                    </Link>
                    <Link to="/admin/#adminTop">
                        <button className="btn btn-info  p-2" onClick={() => handleWhichForm("UpdatePokemon", item._id)}><i className="fa fa-edit fa-2x"></i></button>
                    </Link>
                    <button className="btn btn-danger  p-2" onClick={() => handleDeleteItem(item._id)}><i className="fa fa-trash fa-2x"></i></button>
                </td>
            </tr>
        )
    })

    return (
        <div className="container mt-5">
            <table className="table">
                <thead className="black white-text">
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Item Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Date Created</th>
                        <th width="25%" scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { items.length !== 0 ? products: <tr>
                            <td colSpan="5" className="p-2"><p>Loading pokemons ...</p></td>
                        </tr> }
                </tbody>
            </table>
        </div>
    )
}

export default ProductsTable;