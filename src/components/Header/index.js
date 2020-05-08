import React, { Component } from 'react';
import logo from '../../svg/spotted-logosvg.svg'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return(
            <MyDesktopNavbar>
                <img src={logo} alt="Logo not loaded"/>

                <ul className="nav-links">
                    <li>
                        <Link to="/">Seções</Link>
                    </li>
                    <li>
                        <Link to="/">Sobre a Iniciativa</Link>
                    </li>

                </ul>
            </MyDesktopNavbar>
        );
    }
}

export default Header;

//Nabvar Styling
const MyDesktopNavbar = styled.nav`
    display: Flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
    background: var(--main-dark-blue);
    height: 10vh;
    font-size: 1.5rem;
    margin-block-start: 0;
    padding-block-start: 0;

    .nav-links{
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-evenly;
        align-items: center;

        width: 35vh;
        list-style:none;
        color: var(--main-light-gray);

        &:hover{
            color: var(--main-light-blue);
        }
    }

    .Link {
        color: white;
        font-size: 2.5vg;
        text-decoration: none;
        color: var(--main-light-gray);
        margin: 20px 10px;
    }
`;



