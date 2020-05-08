import React, { Component } from 'react';
//import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Spring } from 'react-spring/renderprops';

class LandingPage extends Component {
    render() {
        return( 
            <Spring
                from={{opacity:0, marginLeft: -500}}
                to={{opacity:1, marginLeft: 0}}
                config={{duration:1000}}
            >
                {props => (
                    <div style={props}>
                        <BodyComponent className="landing-page-container">
                            <div class="main-landing-page-text">
                                <span>A verdade sobre a <br/></span> 
                                <span id="blue">educação pública <br/></span> 
                                <span>do Brasil</span>
                            </div>
                        </BodyComponent>
                    </div>
                )}
            </Spring>
        );
    }
}

export default LandingPage;

const BodyComponent = styled.div`
    width: 100vw;
    height: 100vh;

    .main-landing-page-text{
        justify-content: center;
        padding: 25vh;
        text-align: center;
        font-size: 6rem;
        display:block;
        line-height:7rem;
    }
`;