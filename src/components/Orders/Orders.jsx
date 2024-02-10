// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Order from '../Order/Order';
import { useLoaderData } from 'react-router-dom';
import SingleProduct from '../SingleProduct/SingleProduct';
import './Orders.css'
import { removeFromDb } from '../../utilities/fakedb';


const Orders = () => {
   const loadProducts = useLoaderData();

   const [cart, setCart] = useState(loadProducts);

   const handelRemoveFromCart = (id) =>{
      console.log(id)
      const remainingItems = cart.filter(product => product.id !== id)
      setCart(remainingItems)
      removeFromDb(id)
      // const myCart = cart.foreach(cd => cd.id === id);
      // setCart(myCart)
   }

   // console.log(cart)
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
            <Order cart={cart}></Order>
         </div>     
      </div>
   );
};

export default Orders;