import {useParams} from "react-router-dom";
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {Row, Col, Image, listGroup, Card, Button, ListGroup, ListGroupItem} from 'react-bootstrap';
import Rating from "../components/Rating";
import axios from 'axios';

const ProductScreen = () => {

    const [product, setProduct] = useState({});

    //get id from URL, useParams() → { id: "3" }
    //same as const params = useParams() and const productId = params.id;
    const {id: productId } = useParams();
    
    //fetching data from backend
    useEffect(() => {
        const fetchProduct = async() => {
            const {data} = await axios.get(`/api/products/${productId}`);
            setProduct(data);
        }
        fetchProduct();
        
    }, [productId])


  return (
    <>
    <Link className = "btn btn-right my-3" to = '/'>Go Back</Link>
    <Row>
        {/**we have 12 columns in total
         * in first column we show product image
         * second column:product name, rating and price
         * third column is a card showing price and stock situation
         */}
        <Col md = {5}>
            <Image src={product.image} alt = {product.name} fluid />
        </Col>

        <Col md = {4}>
            <ListGroup variant = "flush">
                <ListGroupItem>
                    <h3>{product.name}</h3>
                </ListGroupItem>
                <ListGroupItem>
                    <Rating value = {product.rating} text = {`${product.numReviews} reviews`} />
                </ListGroupItem>
                <ListGroupItem>
                    Price: ${product.price}
                </ListGroupItem>
                <ListGroupItem>
                    Description: {product.description}
                </ListGroupItem>
            </ListGroup>
        </Col>

        <Col md = {3}>
            <Card>
                <ListGroup variant = "flush">
                    <ListGroupItem>
                        <Row>
                            <Col>Price:</Col>
                            <Col><strong>${product.price}</strong></Col>
                        </Row>
                    </ListGroupItem>

                    <ListGroupItem>
                        <Row>
                            <Col>Status:</Col>
                            <Col><strong>{product.countInStock > 1? 'In Stock' : 'Out of Stock'}</strong></Col>
                        </Row>
                    </ListGroupItem>

                    <ListGroupItem>
                        {/**if the item is out of stock, the button will be disabled */}
                        <Button className = "btn-block" type = "button" disabled = {product.countInStock === 0}>
                            Add to Cart
                        </Button>
                    </ListGroupItem>

                </ListGroup>
            </Card>
        </Col>
    </Row>
    </>
  )
}

export default ProductScreen