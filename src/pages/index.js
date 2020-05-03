import React, { Component } from 'react';
import Header from '../components/Header';
import LandingPage from '../components/LandingPage';

class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <LandingPage />
            </div>
        );
    }
}

export default Main;