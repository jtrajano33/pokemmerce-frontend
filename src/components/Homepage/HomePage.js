import React from 'react';
import OurTeam from './OurTeam';
import CompanyOverview from './CompanyOverview';
import Register from './Register';
import Intro from './Intro';
import Footer from '../Footer';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <Intro />
                <div className="container">
                    <CompanyOverview />
                    <OurTeam />
                    <Register />
                </div>
                <Footer />
            </div>
        )
    }
}

export default HomePage;