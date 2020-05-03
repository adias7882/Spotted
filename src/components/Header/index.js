import React, { Component } from 'react';
import logo from '../../svg/spotted-logosvg.svg'
//import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

class Header extends Component {
    render() {
        return(
            <HeaderComponent className="header-container">
                <Logo src={logo} alt="Logo not loaded"/>
                <ul>
                    <li className="li-btn" id="sections-navbar">Seções</li>
                    <li className="li-btn" id="about-navbar">Sobre a Iniciativa</li>
                </ul>                
            </HeaderComponent>
        );
    }
}

export default Header;

//Logo
const Logo = styled.img`
    position:absolute;
    top: 1.5%;
    left: 3%;
`;

//Header Component
const HeaderComponent = styled.div`
    .li-btn{
        list-style-type:None;
        top: 3.5%;
        left: 77%;
        line-height:normal;
        font-size:1.5rem;
        color: var(--main-light-gray);
        position: absolute;
        cursor: pointer;
        transition: background 0.2s easy-in;
        &:hover {
            color: var(--main-light-blue);
        }
    }
    #about-navbar{
        left:85%;
    }
`;


