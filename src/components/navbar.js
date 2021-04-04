import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';  
import './styles/Header.css'
import logo from './assets/dota.png';

function Header({account}) {
    
    return (
        <Navbar scrolling="true" className ='navbar navbar-inverse navbar-fixed-top' fixed="top" bg="dark" variant="dark">
            <Navbar.Brand as={Link} to="/">
            <img
                src={logo}
                width="40"
                height="40"
                className="d-inline-block align-top"
                alt="Dota Logo"   
            />
            <span className="header-text"><span>DOTA</span> - NFT</span>
            </Navbar.Brand>
            <Nav className="nav-links">
                <Nav.Link as={Link} to="/"><span>Home</span></Nav.Link>
                <Nav.Link as={Link} to="/heros"><span>Heros</span></Nav.Link>
                <Nav.Link as={Link} to="/items"><span>Items</span></Nav.Link>
            </Nav>
            <Nav className="ml-auto address">
                <Nav.Item>
                    Account : {account}
                </Nav.Item>
            </Nav>
        </Navbar>
    )
}

export default Header