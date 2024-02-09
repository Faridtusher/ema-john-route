// eslint-disable-next-line no-unused-vars
import React from 'react';
import './SingleProduct.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


// eslint-disable-next-line react/prop-types
const SingleProduct = ({product}) => {
   console.log(product)
   // eslint-disable-next-line react/prop-types
   const {img, name, price, quantity} = product
   return (
      <div className='single-cart-container'>

         <div className='cartProductDetails'>
             <img src={img} alt="image is not found" />
            <div className='cart-product-titles'>
               <h3>{name}</h3>
               <h4>Price: <span>${price}</span></h4>
               <p>Quantity: <span>{quantity}</span></p>
            </div>
         </div>

         <div>
            <FontAwesomeIcon className='delete-icon' icon={faTrash} />   
         </div>
      </div>
   );
};

export default SingleProduct;