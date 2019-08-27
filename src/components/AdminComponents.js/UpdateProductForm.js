import React from 'react';
import {connect} from 'react-redux';
import { editForm as _editForm, updateItem as _updateItem } from '../../actions/itemActions'

class UpdateProductForm extends React.Component {

    state={
        selectedFile: null
    }

    fileHandler = e => {
        this.setState({ selectedFile: e.target.files[0] })
    }

    handleSubmit = e => {
        e.preventDefault();
        if(this.state.selectedFile){
            const data = {...this.props.pokemon, item: {...this.props.pokemon.item, image:this.state.selectedFile}}
            this.props.updateItem(data.item)
        }

        else{
           this.props.updateItem(this.props.pokemon.item)
        }
    }

    render() {

        const { pokemon } = this.props

        if (pokemon) {

            const { name, price, description, category } = pokemon.item
            return (
                <div className="container mt-5">

                    <form className="text-center border border-light p-5" onSubmit={e=> this.handleSubmit(e)}>

                        <p className="h4 mb-4">Update Pokemon Information</p>

                        {this.props.itemSuccessNotif && <div className="alert alert-success alert-dismissible fade show" role="alert">
                                {this.props.itemSuccessNotif}
                        </div>}
                        
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            className="form-control mb-4" 
                            placeholder="Name" 
                            value={name} 
                            onChange={e => this.props.editForm(e.target.name, e.target.value )} 
                        />


                        <input 
                            type="number" 
                            id="price" 
                            name="price" 
                            className="form-control mb-4" 
                            placeholder=" Enter price" 
                            value={price}
                            onChange={e => this.props.editForm(e.target.name, e.target.value )} 
                        />


                        <label>Category</label>
                        <select name="category" className="browser-default custom-select mb-4" value={category} onChange={e => this.props.editForm(e.target.name, e.target.value )} >
                            <option value="" disabled>Choose option</option>
                            <option value="rare" >Rare</option>
                            <option value="legendary">Legendary</option>
                            <option value="trained">Trained</option>
                        </select>


                        <div className="form-group">
                            <textarea value={description} className="form-control rounded-0" id="description" name="description" rows="3" placeholder="Enter description..." onChange={e => this.props.editForm(e.target.name, e.target.value )} ></textarea>
                        </div>

                        <div className="form-group  my-4">
                            <div className="text-left"><label>Upload Image</label></div>
                            <input type="file"  className="form-control-file my-3"  onChange={e=> {this.fileHandler(e)}} />
                        </div>

                        <button className="btn btn-pokemon btn-block">Update</button>

                    </form>
                </div>
            )
        }

        else {
            return (
                <div className="container mt-5">

                <form className="text-center border border-light p-5">

                    <p className="h4 mb-4">Update Pokemon Information</p>

                    {this.props.itemSuccessNotif && <div className="alert alert-success alert-dismissible fade show" role="alert">
                                {this.props.itemSuccessNotif}
                     </div>}

                    <input type="text" id="name" name="name" className="form-control mb-4" placeholder="Loading ..." />


                    <input type="number" id="price" name="price" className="form-control mb-4" placeholder=" Loading ..." />


                    <label>Category</label>
                    <select name="category" className="browser-default custom-select mb-4">
                        <option value="" disabled>Choose option</option>
                        <option value="rare" >Rare</option>
                        <option value="legendary">Legendary</option>
                        <option value="trained">Trained</option>
                    </select>


                    <div className="form-group">
                        <textarea className="form-control rounded-0" id="description" name="description" rows="3" placeholder="Loading ..."></textarea>
                    </div>

                    <input type="text" id="image" name="image" className="form-control mb-4" placeholder="Upload an image" />

                    <button className="btn btn-pokemon btn-block">Update</button>

                </form>
            </div>
            )
        }
    }


}

const mapDispatchToProp = dispatch => {
    return{
        editForm: (name, value) => dispatch(_editForm(name, value)),
        updateItem: data => dispatch(_updateItem(data))
    }
}

export default connect(null, mapDispatchToProp)(UpdateProductForm);