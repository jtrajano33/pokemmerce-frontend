import React from 'react';
import { connect } from 'react-redux';
import { addItem as _addItem } from '../../actions/itemActions';


class AddProductForm extends React.Component {

    state = {
        selectedFile: null,
        name:'',
        price: null,
        description:'',
        category:'rare'
    }

    handleChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    fileHandler = e => {
        this.setState({ selectedFile: e.target.files[0] })
    }


    handleSubmit = e => {
        e.preventDefault();
        this.props.addItem(this.state)
    }

    render() {

        return (
            
            <div className="container mt-5">

                <form className="text-center border border-light p-5" onSubmit={e => this.handleSubmit(e)}>

                    <p className="h4 mb-4">Add a pokemon</p>

                    {this.props.itemSuccessNotif && <div className="alert alert-success alert-dismissible fade show" role="alert">
                                {this.props.itemSuccessNotif}
                     </div>}

                    <div className="text-left"><label>Name</label></div>
                    <input type="text" id="name" name="name" className="form-control mb-4" placeholder="Name" onChange={e=> this.handleChange(e)}/>

                    <div className="text-left"><label>Price</label></div>
                    <input type="number" id="price" name="price" className="form-control mb-4" placeholder=" Enter price" onChange={e=> this.handleChange(e)} />

                    <div className="text-left"><label>Category</label></div>
                    <select name="category" className="browser-default custom-select mb-4" onChange={e=>{this.handleChange(e)}}>
                        <option value="" disabled>Choose option</option>
                        <option value="rare" >Rare</option>
                        <option value="legendary">Legendary</option>
                        <option value="trained">Trained</option>
                    </select>


                    <div className="form-group">
                    <div className="text-left"><label>Description</label></div>
                        <textarea onChange={e=> this.handleChange(e)} className="form-control rounded-0" id="description" name="description" rows="3" placeholder="Enter description..."></textarea>
                    </div>

                    <div className="form-group  my-4">
                        <div className="text-left"><label>Upload Image</label></div>
                        <input type="file"  className="form-control-file my-3" onChange={e=> {this.fileHandler(e)}} />
                    </div>


                    <button className="btn btn-pokemon btn-block">Send</button>

                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return{
        addItem: data => dispatch(_addItem(data))
    }
}

export default connect(null, mapDispatchToProps)(AddProductForm);