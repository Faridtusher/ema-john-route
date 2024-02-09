// eslint-disable-next-line no-unused-vars
import React from 'react';
import Order from '../Order/Order';
import { useLoaderData } from 'react-router-dom';
import SingleProduct from '../SingleProduct/SingleProduct';
import './Orders.css'


const Orders = () => {
   const loadProducts = useLoaderData();
   // console.log(loadProducts)
   return (
      <div className='ord-container'>
         <div className='product-container'>
            {
               loadProducts.map(product => <SingleProduct
               key={product.key}
               product={product}
               ></SingleProduct>)
            }
         </div>            

         <div>
            <Order cart={loadProducts}></Order>
         </div>   
           
      </div>
   );
};

export default Orders;