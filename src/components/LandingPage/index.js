import React, { Component } from 'react';
//import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

class LandingPage extends Component {
    render() {
        return( 
           <BodyComponent className="landing-page-container">
                <div class="main-landing-page-text">
                    <span>A verdade sobre a <br/></span> 
                    <span id="blue">educação pública <br/></span> 
                    <span>do Brasil</span>
                </div>
           </BodyComponent>
        );
    }
}

export default LandingPage;

const BodyComponent = styled.div`
    .main-landing-page-text{
        text-align: center;
        font-size: 6rem;
        display:block;
        line-height:6rem;
        position:absolute;
        top:35%;
        left:25%;
    }
`;