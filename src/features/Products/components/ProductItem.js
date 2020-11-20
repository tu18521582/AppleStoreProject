import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setProductChosen } from '../../Cart/cartSlice';
import { addToCart } from '../productSlice';
import './style.css'
ProductItem.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    imageURL: PropTypes.string,
    description: PropTypes.string,
    inventory: PropTypes.number,
    price: PropTypes.number,
};


function ProductItem(props) {
    const dispatch = useDispatch();

    const onAddToCart = (param) => {
        const action = addToCart(param.id);
        dispatch(action);
        const action2 = setProductChosen(param)
        dispatch(action2);
    }
    return (
        <>
            <Col sm={4} key={props.id} className="list-product-pc">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={props.imageURL} className="img-product" />
                    <Card.Body>
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Text>
                            {props.description}
                        </Card.Text>
                        <Card.Text style={{ color: "red" }}>
                            Price: ${props.price}
                        </Card.Text>
                        <Card.Text>
                            Inventory: {props.inventory}
                        </Card.Text>
                        <Button
                            variant="primary"
                            onClick={() => onAddToCart(props)}
                            disabled={props.inventory ? "" : "disabled"}
                        >{props.inventory ? "Buy" : "Sold out"}
                        </Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col sm={6} key={props.id} className="list-product-tablet">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={props.imageURL} className="img-product" />
                    <Card.Body>
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Text>
                            {props.description}
                        </Card.Text>
                        <Card.Text style={{ color: "red" }}>
                            Price: ${props.price}
                        </Card.Text>
                        <Card.Text>
                            Inventory: {props.inventory}
                        </Card.Text>
                        <Button
                            variant="primary"
                            onClick={() => onAddToCart(props)}
                            disabled={props.inventory ? "" : "disabled"}
                        >{props.inventory ? "Buy" : "Sold out"}
                        </Button>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
}

export default ProductItem;