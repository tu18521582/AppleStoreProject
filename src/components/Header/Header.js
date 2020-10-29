import React from 'react';
import { Button, Form, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.css';
Header.propTypes = {

};

function Header(props) {
    return (
        <div>
            <h1><Link to="/">APPLE STORE</Link></h1>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand>APPLE</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/products">Product</Nav.Link>
                        <Nav.Link>About</Nav.Link>
                    </Nav>
                    <Form inline>
                        <Link to="/cart" style={{ textDecoration: 'none' }} ><i className="fa fa-shopping-cart fa-3x" aria-hidden="true"></i></Link>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Header;