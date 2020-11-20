import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

Success.propTypes = {

};

function Success(props) {
    return (
        <>
            <h1 class="thank-you">Cảm ơn vì đã mua hàng !!!</h1>
            <Link to="/products" style={{ textDecoration: 'none' }} className="abc"><h3 className="back-to-product">
                Tiếp tục mua
            <i className="fa fa-hand-o-left" aria-hidden="true"></i></h3></Link>
        </>
    );
}

export default Success;