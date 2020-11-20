import React from 'react';
import { Button, Col, Container, Form, FormControl, Nav, Navbar, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './style.css';
Header.propTypes = {

};

function Header(props) {
    const productInCart = useSelector(state => state.cart);
    let sumQuantity = 0;
    let countProductArr;
    if (productInCart.length > 0) {
        countProductArr = productInCart.map(item => {
            return item.count
        })
        sumQuantity = countProductArr.reduce((sum, item) => {
            return (sum + item);
        })
    }
    return (
        //style={{ paddingBottom: '20px' }}
        <div style={{ paddingBottom: '130px' }}>
            <Navbar bg="light" expand="lg" fixed="top">
                <Container style={{ border: 'none', backgroundColor: 'transparent', display: 'inline-block' }}>
                    <Row>
                        <Col xs={6} md={4} className="display-contents">
                            <Navbar.Brand>
                                <h1><Link to="/" style={{ textDecoration: 'none', color: '#666  ' }}>APPLESTORE</Link></h1>
                            </Navbar.Brand>
                            <Link to="/cart"><div className="cart-tablet cart-icon">
                                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                <span className='badge badge-warning' id='lblCartCount'>
                                    {sumQuantity ? sumQuantity : 0}
                                </span>
                            </div>
                            </Link>
                        </Col>
                        <Col xs={6} md={4}>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="mr-auto">
                                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                                    <Nav.Link as={Link} to="/products">Product</Nav.Link>
                                    <Nav.Link>About</Nav.Link>
                                    <Nav.Link as={Link} to="/cart" className="cart-in-nav">
                                        <div className="cart-icon">
                                            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                            <span className='badge badge-warning' id='lblCartCount'>
                                                {sumQuantity ? sumQuantity : 0}
                                            </span>
                                        </div>
                                    </Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Col>
                        <Col xs={6} md={4}>
                            <Form inline>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2 mg-0" />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;