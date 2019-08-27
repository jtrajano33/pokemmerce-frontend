import React from 'react';
import { connect } from 'react-redux';
import { signUp as _signUp } from '../../actions/userActions'

class Register extends React.Component {
    state = {
        name:'',
        email:'',
        password:''
    }

    handleChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.signUp(this.state);
        this.setState({ 
            name:'',
            email:'',
            password:''
         })
    } 

    render() {
        const { name, password, email } = this.state;
        const { message, messageSuccess, isLoadingSignUp } = this.props

        return (
            <div className="mb-5" id="register">
                 <h2 className="h1-responsive font-weight-bold my-5 animated wow zoomIn">Register Now!</h2>
                <div className="row">
                    <div className="col-md-6 col-lg-6">
                        <img alt="register" src="./assets/pikachu-register.png" width="75%" className="wow jackInTheBox" />
                    </div>

                    <div className="col-md-6 col-lg-6 animated wow fadeInRight">
                        <p className="text-justify">Register and start building your ultimate pokemon line up! Your new pokemon awaits you. We add new pokemon in our store every week. Leave your hometown with a legendary starter pokemon on hand.</p>
                        <form className="text-center border border-light py-5 px-3 mt-5" onSubmit={this.handleSubmit}>

                            <p className="h4">Sign up</p>

                            {messageSuccess && <div className="alert alert-success alert-dismissible fade show p-3" role="alert">
                                {messageSuccess}
                            </div>}
                            
                            {message && <div className="alert alert-danger alert-dismissible fade show p-3" role="alert">
                                {message.msg}
                            </div>}

                            <input type="text" id="name" name="name" className="form-control mb-4" placeholder="Full Name" value={ name } onChange={ this.handleChange }/>

                            <input type="email" id="email" name="email" className="form-control mb-4" placeholder="E-mail" value={ email } onChange={ this.handleChange } />

                            <input type="password" id="password" name="password" className="form-control" placeholder="Password" value={ password } onChange={ this.handleChange } />
                            <small id="defaultRegisterFormPasswordHelpBlock" className="form-text text-muted mb-4">
                                At least 8 characters and 1 digit
                             </small>

                            <button className="btn btn-pokemon mt-5 btn-block text-white">{!isLoadingSignUp? "Join Now!" : "Please wait" }</button>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        message: state.user.message,
        messageSuccess: state.user.messageSuccess,
        isLoadingSignUp: state.user.isLoadingSignUp
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        signUp: userData => dispatch(_signUp(userData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)