import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Footer = () => {
    return (
        <footer className="page-footer font-small danger-color-dark pt-2" style={{ width: '100%' }}>

            <div className="container-fluid text-center text-md-left" style={{padding: '20px 50px'}}>

                <div className="row">


                    <div className="col-md-6 mt-md-0 mt-3">


                        <h5 className="text-uppercase font-weight-bold mb-4">Disclaimer</h5>
                        <p>1. All pokemons were caught using standard pokemon catching procedure.</p>
                        <p>2. We are not in any way affliated with Team Rocket or any organization who are doing illegal pokemon transactions.</p>
                    </div>


                    <hr className="clearfix w-100 d-md-none pb-3" />


                    <div className="col-md-6 mb-md-0 mb-3">


                        <h5 className="font-weight-bold mb-4">Pokemmerce Rocket Inc.</h5>
                        <p><i className="fa fa-envelope"></i> <span className="ml-2">justinTra@pokemmerce.io</span></p>
                        <p><i className="fa fa-map-marker"></i> <span className="ml-2"> #123 Giovanni St., Viridian City, West Kanto Region</span></p>

                    </div>


                </div>


            </div>

            <div className="footer-copyright text-center py-3">© 2019 Copyright:
                <Link to="/"> Pokemmerce</Link>
         </div>
        </footer>
    )
}

export default Footer;