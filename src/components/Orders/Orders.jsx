// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Order from '../Order/Order';
import { Link, useLoaderData } from 'react-router-dom';
import SingleProduct from '../SingleProduct/SingleProduct';
import './Orders.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const Orders = () => {
   const loadProducts = useLoaderData();
   const [cart, setCart] = useState(loadProducts);
   const deleteFromCart = () =>{
      setCart([])
      deleteShoppingCart()
   }

   const handelRemoveFromCart = (id) =>{
      // console.log(id)
      const remainingItems = cart.filter(product => product.id !== id)
      setCart(remainingItems)
      removeFromDb(id)
   }

   return (
      <div className='ord-container'>
         <div className='product-container'>
            {
               cart.map(product => <SingleProduct
               key={product.key}
               product={product}
               handelRemoveFromCart={handelRemoveFromCart}
               ></SingleProduct>)
            }
         </div>            

         <div>
            <Order 
            cart={cart}
            deleteFromCart ={deleteFromCart}
            >
               <Link to=''><button  className='orderButton'>  Checkout  <FontAwesomeIcon  className='icon' icon={faArrowRight} /></button></Link>
            </Order>
         </div>     
      </div>
   );
};

export default Orders;