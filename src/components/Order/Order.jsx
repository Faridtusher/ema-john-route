/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './Order.css'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Order = ({cart, deleteFromCart, children}) => {

   console.log(cart)
   // eslint-disable-next-line react/prop-types
  
   let total = 0;
   let TotalShipping = 0;
   let TotalTax = 0;
   let quantity = 0;
   for(const product of cart){
      // product.quantity = product.quantity || 1;
      total = total + product.price * product.quantity;
      TotalShipping = TotalShipping + product.shipping;
      TotalTax = TotalTax + (product.price*2 /100);
      quantity = quantity + product.quantity;
   }
   let grandTotal = total+TotalShipping+TotalTax;

   // eslint-disable-next-line react/prop-types
   return (
      // eslint-disable-next-line react/jsx-no-comment-textnodes
      <div className='order-container'>
         <h3>Order summary</h3>
         <p>Selected items : {quantity}</p>
         <p>Total Price : $ {total.toFixed(2)}</p>
         <p>Total Shipping Charge : $ {TotalShipping.toFixed(2)}</p>
         <p>Tax: $ {TotalTax.toFixed(2)}</p>
         <h4>Grand Total : $ {grandTotal.toFixed(2)}</h4>
         <button onClick={deleteFromCart} className='delateButton'> Clear Cart <FontAwesomeIcon className ='icon' icon={faTrash} /></button>
          
         {
            children
         }
      </div>
   );
};

export default Order;