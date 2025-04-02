import {Card} from 'react-bootstrap';

const Product = ({product}) => {
  return (
    //my adds vertical margin while p adds inner padding
    <Card className= "my-3 p-3 rounded">
        <a href={`/product/${product._id}`}>
        {/* top means place the image at the top of the card */}
        <Card.Img src = {product.image} variant= "top" />
        </a>
        
        <Card.Body>
            <a href={`/product/${product._id}`}>
            {/* as=div let it render the title as plain div instead h5 */}
            <Card.Title as="div">
                <strong>{product.name}</strong>
            </Card.Title>
            </a>
            <Card.Text as="h3">
                ${product.price}
            </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default Product