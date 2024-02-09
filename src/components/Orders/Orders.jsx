// eslint-disable-next-line no-unused-vars
import React from 'react';
import Order from '../Order/Order';
import { useLoaderData } from 'react-router-dom';


const Orders = () => {
   const loadProducts = useLoaderData();
   // console.log(loadProducts)
   return (
      <div>
         <div className='shop-container'>
            <div>
               <h3>Order page :{loadProducts.length}</h3>
            </div>
            

            <div className='cart-container'>
              <Order cart={loadProducts}></Order>
            </div>   
         </div>   
      </div>
   );
};

export default Orders;