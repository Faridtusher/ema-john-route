/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Products.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Products = (props) => {
   const {seller, name, img, price, ratings} = props.product;
  const handelAddToCart = props.handelAddToCart;
//   console.log(props.handelAddToCart)

  
   return (
      <div className='myProduct'>
            <img src= {img} alt="Image not found!!" />
            <div className='product-details'>
               <h3 className='product-name'>{name}</h3>
               <h4>Price : ${price}</h4>
               <p>Manufacturer : {seller}</p>
               <p>Rating: {ratings} star</p> 
            </div> 
            <button onClick ={() => handelAddToCart(props.product)}  className='cart-btn'>
               Add to card 
               <FontAwesomeIcon className='shoppingCartIcon' icon={faShoppingCart}/>
            </button>
      </div>
   );
};

export default Products;