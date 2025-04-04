import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Product = ({product}) => {
  return (
    //my adds vertical margin while p adds inner padding
    <Card className= "my-3 p-3 rounded">
        <Link to={`/product/${product._id}`}>
        {/* top means place the image at the top of the card */}
        <Card.Img src = {product.image} variant= "top" />
        </Link>
        
        <Card.Body>
            <Link to={`/product/${product._id}`}>
            {/* as=div let it render the title as plain div instead h5 */}
            <Card.Title as="div">
                <strong>{product.name}</strong>
            </Card.Title>
            </Link>
            <Card.Text as="h3">
                ${product.price}
            </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default Product