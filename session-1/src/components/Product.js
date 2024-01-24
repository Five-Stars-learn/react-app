import React from 'react'
import { Link } from "react-router-dom"

const Product = (props)=> {
  const {product, showButton} = props;

  return (
    <>
    <div className="card">
   <img src={product.image} className="card-img-top" alt={product.title}/>
  <div className="card-body">
    <h2 className="card-title">{product.title}</h2>
    <h5 className="card-text">
    {product.description}
    </h5>
    <h2 className='price'> Price: {product.price}Dt</h2>
    {showButton && 
    <Link className="btn btn-primary" to={`/product/${product.id}`}>Details</Link>}
        </div>
        </div>
    </>
 )
}
export default Product