// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './Shop.css'
import Products from '../Products/Products';
import Order from '../Order/Order';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';



const Shop = () => {
   const [products, setProducts] = useState([]);
   useEffect( () =>{
      fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
   } ,[])

   
   
   const [cart, setCart] = useState([]);

   const handelAddToCart = (product) =>{
      // console.log(product)
      const newCart = [...cart, product];
      setCart(newCart);
      addToDb(product.id)
   }

   useEffect(() =>{
      const storedCart = getShoppingCart();
      console.log(storedCart)
   },[])


   return (
      <div className='shop-container'>
            <div className='products-container'>
               {
                  products.map(product => <Products 
                  product ={product} 
                  key={product.id}
                  handelAddToCart = {handelAddToCart}
                  >
                  </Products> )
               }
            </div>

            <div className='cart-container'>
              <Order cart={cart}></Order>
            </div>   
      </div>
   );
};

export default Shop;