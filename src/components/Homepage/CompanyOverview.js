import React from 'react';

const CompanyOverview = () => {
    return (
        <section className="my-5">

            <h2 className="h1-responsive font-weight-bold text-center my-5 animated wow zoomIn">
                Welcome to Pokemmerce
            </h2>

            <p className="lead grey-text text-center w-responsive mx-auto mb-5 wow fadeIn">
                Pokemmerce is an e-commerce website where you can find all kinds of rare pokemons. All our pokemons lives in a stress free environment so you can be sure they are in perfect condition.
            </p>

            <div className="container animated wow fadeIn">
                <div className="row">

                    <div className="col-md-4 mb-md-0 mb-5">


                        <div className="row">

                            <div className="col-lg-10 col-md-12 col-12">
                                <h4 className="font-weight-bold" style={{height: '60px'}}>Be an undefeated Pokemon Master</h4>
                                <p className="grey-text text-justify">
                                    We at Pokemmerce helps you on your journey to become a pokemon master. We sell trained pokemons so you can focus on being a Pokemon Master instead of spending days finding a pokemon.
                                </p>

                            </div>

                        </div>


                    </div>

                    <div className="col-md-4 mb-md-0 mb-5">


                        <div className="row">

                            <div className="col-lg-10 col-md-12 col-12">
                                <h4 className="font-weight-bold">Legendaries in the palm of your hand</h4>
                                <p className="grey-text text-justify">
                                    Having a hard time seeking for legendary pokemons? We have them in our store! You can buy them for a reasonable price. No need to go to space to get deoxys.
                                </p>

                            </div>

                        </div>


                    </div>

                    <div className="col-md-4 mb-md-0 mb-5">


                        <div className="row">

                            <div className="col-lg-10 col-md-12 col-12">
                                <h4 className="font-weight-bold">Delivered straight to your home</h4>
                                <p className="grey-text text-justify">
                                    No need to go fetch your new pokemon in our office. We will send it straight to your home! 100% money back guarantee if you don't receive it within one week. 
                                </p>

                            </div>

                        </div>


                    </div>

                </div>

            </div>

        </section>
    )
}

export default CompanyOverview;