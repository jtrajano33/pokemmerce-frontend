import React from 'react';

const OurTeam = () => {
    
    return (
        <div>
            <h2 className="h1-responsive font-weight-bold my-5 animated wow zoomIn">Our amazing team</h2>
            <div className="row">

                <div className="col-lg-3 col-md-6 mb-lg-0 mb-5">
                    <div className="avatar mx-auto">
                        <img src="./team/bug-catcher.PNG" width="95%" className="rounded-circle z-depth-1 animated wow jackInTheBox" alt="Sample avatar" />
                    </div>
                    <h5 className="font-weight-bold mt-4 mb-3 animated wow fadeIn">Bug catcher Bret</h5>
                    <p className="grey-text text-justify animated wow fadeIn">One of our most reliable hunters. After spending years catching caterpies and weedles, Bug catcher Bret joins our team and starts catching pokemons using his knowledge in bug catching. He easily defeated gym leader Sabrina when he went to Safron City</p>
                </div>

                <div className="col-lg-3 col-md-6 mb-lg-0 mb-5">
                    <div className="avatar mx-auto">
                        <img src="./team/bill.PNG" width="94%"  className="rounded-circle z-depth-1 animated wow jackInTheBox" alt="Sample avatar" />
                    </div>
                    <h5 className="font-weight-bold mt-4 mb-3 animated wow fadeIn">Professor Bill</h5>
                    <p className="grey-text text-justify animated wow fadeIn">Everyone knows Bill. His PC is where we store the pokemons that we get in our journey to become a pokemon master. If you ever go to Bill's PC now, you won't be seeing a free evee or any pokemon there. He now sells what he has in his PC in our shop.</p>

                </div>

                <div className="col-lg-3 col-md-6 mb-md-0 mb-5">
                    <div className="avatar mx-auto">
                        <img src="./team/pokemon-breeder.PNG" width="96%" className="rounded-circle z-depth-1 animated wow jackInTheBox" alt="Sample avatar" />
                    </div>
                    <h5 className="font-weight-bold mt-4 mb-3 animated wow fadeIn">Pokemon Breeder Ella</h5>
                    <p className="grey-text text-justify animated wow fadeIn">Ella gives us the rarest pokemons of all. Working in the Pokemon day care as her sideline, She sends us a pokemon whenever the day care produces a shiny or rare pokemon. Trainers who sent their pokemon in day care only gets back the normal ones.</p>

                </div>

                <div className="col-lg-3 col-md-6">
                    <div className="avatar mx-auto">
                        <img src="./team/youngster-joey.PNG" width="93%" className="rounded-circle z-depth-1 animated wow jackInTheBox" alt="Sample avatar" />
                    </div>
                    <h5 className="font-weight-bold mt-4 mb-3 animated wow fadeIn">Youngster Joey</h5>
                    <p className="grey-text text-justify animated wow fadeIn">Joey ain't a kid anymore. His ratata and spearow already mega evolved. He is responsible for catching legendary pokemons using Z-moves on mega evolved Raticate. Some of his famous catches that is in our shop includes mewtwo and deoxys.</p>

                </div>
            </div>
        </div>
    )
}

export default OurTeam;