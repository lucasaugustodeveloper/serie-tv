import React, { Component } from 'react';

import Attractions from '../../components/Attractions/Attractions';

class Home extends Component {
    render() {
        return (
            <main className="main container">
                <Attractions />
            </main>
        )
    }
}

export default Home;
