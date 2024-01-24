import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../rtk/slices/products-slice';
import {addToCart} from '../rtk/slices/cart-slice';

function Products() {
  const products = useSelector((state) => state.products);
const dispatch = useDispatch()
 useEffect(()=>{
  dispatch(fetchProducts());
},[dispatch])

  return (
    <container className= 'py-5'>
        <div className='row py-5'>
          {products.map((product)=>(  
           <div className = "col-3" key = {product.id}>  
    <Card style={{ width: '18rem' }}>
      <Card.Img style={{height: "300px"}} variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
        {product.description}
        </Card.Text>
        <Card.Text className = "price">
        {product.price} Dt
        </Card.Text>
        <Button variant="primary" onClick ={()=>dispatch(addToCart(product))}>Add to Cart</Button>
      </Card.Body>
    </Card>
    </div>
    ))}
  </div>
    </container>
  )
}

export default Products