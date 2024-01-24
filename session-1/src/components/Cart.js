import React from 'react';
import { Table, Button, Image} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import {clear, deleteFromCart} from '../rtk/slices/cart-slice';

function Cart() {
  const cart = useSelector(state => state.cart);

  const dispatch = useDispatch()

  const totalPrice = cart.reduce((acc, product)=>{
     acc += product.price * product.quantity;
     return acc
    },0).toFixed(2)

  
  return (
    <container>
    <h2 className='py-3'>Welcome to cart</h2>
    <Button variant= "primary" className='mb-3' 
    onClick={()=> dispatch(clear())}>Clear Cart</Button>
    <h5>Total Price: {totalPrice} Dt</h5>
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Image</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((product) => (
           <tr key = {product.id}>
          <td>{product.id}</td>
          <td>{product.title}</td>
          <td><Image src = {product.image} alt="{product.title}"
          style={{width:"100px", height:"100px"}}/></td>
          <td>{product.price} Dt</td>
          <td>{product.quantity}</td>
          <td><Button variant="danger" 
          onClick={()=>{dispatch(deleteFromCart(product))}}>Delete</Button> </td>
        </tr>
        ))}
        </tbody>
    </Table>
  
    </container>
     )
}

export default Cart