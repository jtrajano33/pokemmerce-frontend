import React from 'react';
import { Link } from 'react-router-dom';

const Intro = () => {
    return (
        <div style={{ width: '100%'}} >
            <div className="view intro-2" style={{marginTop: '75px'}} >
                <div className="full-bg-img">
                    <div className="mask rgba-orange-light flex-center">
                        <div className="container text-center white-text wow fadeInUp ">
                            <div style={{ opacity: '1', textShadow: '1px 1px black' }}>
                                <h2 style={{fontWeight: '800', fontSize:'35px', fontFamily: 'PokemonFont', letterSpacing: '5px'}}>PoKeMoNs For Everyone</h2>
                                <br />

                                <h5 id="dissappear">Search for pokemon according to your needs. Legendary and rare pokemons are available</h5>

                                <br />
                                <Link to="/shop">
                                    <button className="btn btn-pokemon mt-3" id="dissappear" style={{color: "white", fontWeight: 'bold', fontSize: '16px'}} >
                                        Go to Store  <i className="fa fa-search"></i>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro;