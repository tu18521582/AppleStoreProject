import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { checkOutSuccess } from '../cartSlice';
import './style.css';
CartCheckout.propTypes = {

};

function CartCheckout() {
    const cartProduct = useSelector(state => state.cart);
    var priceArr = cartProduct.map((item) => {
        return { price: item.price, count: item.count };
    });
    var totalPriceArr = priceArr.map((item) => {
        return item.price * item.count
    })
    var total = 0;
    if (priceArr.length !== 0) {
        total = totalPriceArr.reduce((sum, item) => sum + item);
    }
    const dispatch = useDispatch();
    const confirmFunc = () => {
        const action = checkOutSuccess();
        dispatch(action);
    }
    console.log(cartProduct);
    return (
        <div>
            <div className="row">
                <div className="col-75">
                    <div className="container">
                        <form action="/action_page.php">

                            <div className="row">
                                <div className="col-50">
                                    <h3>Billing Address</h3>
                                    <label for="fname"><i className="fa fa-user"></i> Full Name</label>
                                    <input type="text" id="fname" name="firstname" placeholder="John M. Doe" />
                                    <label for="email"><i className="fa fa-envelope"></i> Email</label>
                                    <input type="text" id="email" name="email" placeholder="john@example.com" />
                                    <label for="adr"><i className="fa fa-address-card-o"></i> Address</label>
                                    <input type="text" id="adr" name="address" placeholder="542 W. 15th Street" />
                                    <label for="city"><i className="fa fa-institution"></i> City</label>
                                    <input type="text" id="city" name="city" placeholder="New York" />

                                    <div className="row">
                                        <div className="col-50">
                                            <label for="state">State</label>
                                            <input type="text" id="state" name="state" placeholder="NY" />
                                        </div>
                                        <div className="col-50">
                                            <label for="zip">Zip</label>
                                            <input type="text" id="zip" name="zip" placeholder="10001" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <label>
                                <input type="checkbox" checked="checked" name="sameadr" /> Shipping address same as billing
                            </label>
                            <input type="submit" value="Continue to checkout" className="btn" />
                        </form>
                    </div>
                </div>
                <div className="col-25">
                    <div className="container">
                        <h4>Cart
                            <span className="price">
                                <i className="fa fa-shopping-cart"></i>
                            </span>
                        </h4>
                        {cartProduct.map(item => (
                            <div key={item.id}>
                                <img src={item.imageURL} style={{ width: "30%" }}></img>
                                <p><a href=" #">{item.title}</a> <span className="price">${item.price}</span>x {item.count}</p>
                            </div>
                        ))}
                        <hr></hr>
                        <p>Total <span className="price"><b>${total}</b></span></p>
                        <Button variant="outline-danger"><Link to="/success" style={{ textDecoration: 'none' }} onClick={confirmFunc}> Confirm</Link></Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartCheckout;