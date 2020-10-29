
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { CardDeck, Container, Dropdown, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { sortProduct } from '../productSlice';
import ProductItem from './ProductItem';
ProductList.propTypes = {

};

function ProductList() {
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();
    const sortFunc = (param) => {
        if (param === 1) {
            const action = sortProduct(1);
            dispatch(action);
        }
        else if (param === 2) {
            const action = sortProduct(2);
            dispatch(action);
        }
        else {
            const action = sortProduct(3);
            dispatch(action);
        }
    }
    return (
        <>
            <Container>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Sort
                </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => sortFunc(1)}>Price - High to Low</Dropdown.Item>
                        <Dropdown.Item onClick={() => sortFunc(2)}>Price - Low to High</Dropdown.Item>
                        <Dropdown.Item onClick={() => sortFunc(3)}>Inventory - High to Low</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Row>
                    <CardDeck>
                        {products.map((product, index) => (
                            <ProductItem
                                key={index}
                                id={product.id}
                                title={product.title}
                                imageURL={product.imageURL}
                                description={product.description}
                                inventory={product.inventory}
                                price={product.price}
                            />
                        ))}
                    </CardDeck>
                </Row>
            </Container>
        </>
    );
}

export default ProductList;
