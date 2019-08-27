import React from 'react';
import { connect } from 'react-redux';
import { signIn as _signIn } from "../actions/userActions"

class LoginModal extends React.Component {
    state = {
        email: '',
        password:''
    }

    onChangeInput = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.signIn(this.state);
        this.setState({
            email:'',
            password:''
        })
    }


    render() {

        const { loginError, isLoading } = this.props;

        return (
            <div className="modal fade" id="loginForm" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                aria-hidden="true" style={{ overflow: "hidden" }}>
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">

                        <div className="modal-body">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <form className="text-center p-4" onSubmit={e => this.handleSubmit(e)}>

                                <p className="h4 mb-4  font-weight-bold">Sign in</p>
                            
                            {loginError && 
                            <div className="alert alert-danger alert-dismissible p-3 fade show" role="alert">
                                {loginError}
                            </div>}

                                <p className="text-left mb-1 text-left"><i className="fa fa-envelope" ></i> <span className="ml-2">Email :</span></p>
                                <input type="email" name="email" className="form-control mb-4" placeholder="Enter your email..." value={this.state.email} onChange={e => this.onChangeInput(e)}/>

                                <p className="text-left mb-1 text-left"><i className="fa fa-key" ></i> <span className="ml-2">Password :</span></p>
                                <input type="password" name="password" className="form-control mb-4" placeholder="Enter your password..." value={this.state.password} onChange={e => this.onChangeInput(e)}/>

                                <button className="btn btn-pokemon btn-block my-4">{!isLoading? "Submit" : "Please wait..." }</button>

                            </form>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return{
        signIn: data => dispatch(_signIn(data))
    }
}

const mapStateToProps = state => {
    return{
        loginError: state.user.loginError,
        isLoading: state.user.isLoading,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);