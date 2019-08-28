import React from "react";
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = props => {

    

    const { token, signOut, role, clearCount } = props;

    const LogOutAndClearCount = () => {
        clearCount();
        signOut();
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg mb-5 fixed-top scrolling-navbar" >
                <Link className="navbar-brand" to="/"><img alt="pokeball" src="/assets/pokeball.png" className="companyLogo" /> PoKeMMerce <p className="subBanner m-0">We hunt, You fight!</p></Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">
                        <i className="fa fa-chevron-down nav-image-icon" style={{transform: "scale(1.2)"}}></i>
                    </span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item mr-auto">
                            <Link className="nav-link" to="/"><i className="fa fa-home"></i> Home</Link>
                        </li>
                        <li className="nav-item mr-auto">
                            <Link className="nav-link" to="/shop"><i className="fa fa-shopping-basket"></i> Shop</Link>
                        </li>

                        {
                            token && (
                                <li className="nav-item mr-auto">
                                    <Link className="nav-link" to="/cart"><i className="fa fa-shopping-cart"></i> Cart {props.orderCount > 0 ? <span className="badge btn-pokemon">{props.orderCount}</span> : null}</Link>
                                </li>
                            )
                        }

                        {
                            !token && (
                                <li className="nav-item mr-auto">
                                    <Link className="nav-link" to="/#register"><i className="fa fa-user-plus"></i> Register</Link>
                                </li>
                            )
                        }


                        {!token && (
                            <li className="nav-item mr-auto">
                                <Link className="nav-link" to="/" data-toggle="modal" data-target="#loginForm" style={{ backgroundColor: "none" }}>
                                    <i className="fa fa-sign-in" ></i> Login
                                </Link>
                            </li>
                        )}

                        {token && (
                            <li className="nav-item mr-auto" onClick={() => LogOutAndClearCount()}>
                                <Link className="nav-link" to="/" style={{ backgroundColor: "none" }}>
                                    <i className="fa fa-sign-out" ></i> Logout
                                </Link>
                            </li>
                        )}

                        {role === "admin" && (
                            <li className="nav-item dropdown mr-auto">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fa fa-cogs"></i> Settings
                                 </Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link className="dropdown-item" to="/admin">Admin Panel</Link>
                                </div>
                            </li>
                        )}
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;