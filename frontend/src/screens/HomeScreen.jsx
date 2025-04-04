import {useEffect, useState} from 'react';
import { Row, Col } from "react-bootstrap";
import Product from '../components/Product';
import axios from 'axios';


const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  //fetching data from backend
  useEffect(() => {
    //calls backend API, waits for the data to come back, and stores it in products state
    //there are other methods apart from async/await such as Promise
    const fetchProducts = async () => {
      const {data} = await axios.get('/api/products');
      setProducts(data);
    };

    fetchProducts();
  }, [])

  return (
    <>
     <h1>Lastest Products</h1>
     <Row>
        {products.map((product) => (
            //defines how much width the column should take on different screens
            <Col key = {product._id} sm = {12} md = {6} lg = {4} xl = {3}>
                <Product product = {product} />
            </Col>
        )) }
     </Row>
    </>
  )
}

export default HomeScreen