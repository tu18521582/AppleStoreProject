import React from 'react';
import { Button, Card, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './style.css';
Cart.propTypes = {

};

function Cart(props) {
    const cartList = useSelector(state => state.cart);
    // var priceArr = cartList.map(item => { price: item.price, count: item.count });
    var priceArr = cartList.map((item) => {
        return { price: item.price, count: item.count };
    });
    var totalPriceArr = priceArr.map((item) => {
        return item.price * item.count
    })
    var total = 0;
    // var temp = 0;
    // total = priceArr.reduce((sum, item) => sum + item);
    if (priceArr.length !== 0) {
        total = totalPriceArr.reduce((sum, item) => sum + item);
    }
    return (
        <>
            <div>
                <hr></hr>
                <h2 className="my-cart">My cart</h2>
                <hr></hr>
                {cartList.length === 0 ?
                    <>
                        <p className="noti-remind">Vui lòng chọn sản phẩm</p><Link to="/products" style={{ textDecoration: 'none' }} className="abc"><h3 className="back-to-product">Xem sản phẩm<i className="fa fa-hand-o-left" aria-hidden="true"></i></h3></Link>

                    </>
                    :
                    <><Table striped bordered hover size="sm" style={{ width: '100%' }}>
                        <tbody>
                            {cartList.map((cart, index) => (
                                <tr key={index}>
                                    <td>
                                        <div>
                                            <Card style={{ width: '8rem' }}><Card.Img variant="top" src={cart.imageURL} /></Card>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="inline">
                                            <p className="title center">{cart.title}</p>
                                            <br></br>
                                            <div style={{ color: "red" }}>${cart.price}</div>
                                            <div> Quantity: {cart.count}</div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            <tr>
                                <td>Total</td>
                                <td>${total}</td>
                            </tr>
                        </tbody>
                    </Table>
                        <Button variant="outline-success"><Link to="/cart/checkout" style={{ textDecoration: 'none' }}>Check out</Link></Button>
                    </>}
            </div>
        </>
    );
}

export default Cart;