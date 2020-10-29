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
                        <Nav.Link><Link to="/">Home</Link></Nav.Link>
                        <Nav.Link><Link to="/products">Products</Link></Nav.Link>
                        <Nav.Link><Link to="/about">About</Link></Nav.Link>
                    </Nav>
                    <Form inline>
                        {/* <Button variant="outline-success">Search</Button> */}
                        <Button variant="warning"><Link to="/cart" style={{ textDecoration: 'none' }} ><i class="fa fa-shopping-cart" aria-hidden="true"></i></Link></Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Header;