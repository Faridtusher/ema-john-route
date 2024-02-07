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
      let newCart = [];

      let exists = cart.find(pd => pd.id === product.id)
      if(!exists){
         product.quantity = 1 ;
         newCart = [...cart, product]
      }
      else{
         exists.quantity = exists.quantity + 1
         const remaining = cart.filter(pd => pd.id !== product.id);
         newCart = [...remaining , exists]
      }
      // const newCart = [...cart, product];
      setCart(newCart);
      addToDb(product.id)
   }

   useEffect( () =>{
      const storedCard = getShoppingCart();
      let savedCart = [];

      // step-1 get the id from local storage
      for(const id in storedCard){

         // step 2 (find the product data based on id)
         const addedProduct = products.find(product => product.id === id); 

         // step - 3 set the quantity
         if(addedProduct){
            const quantity = storedCard[id];
            addedProduct.quantity = quantity;

            // step-4 (add the added product to the save cart)
            savedCart.push(addedProduct)
            console.log(addedProduct)
         }
      }

      // step-5 (set the cart)
      setCart(savedCart);
   },[products])



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