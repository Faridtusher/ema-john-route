// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './Shop.css'
import Products from '../Products/Products';
import Order from '../Order/Order';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Shop = () => {
   const [products, setProducts] = useState([]);
   useEffect( () =>{
      fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
   } ,[])

   
   const [cart, setCart] = useState([]);
   const handelAddToCart = (product) =>{
      let newCart = [];
      const exists = cart.find(cd => cd.id === product.id);
      if(!exists){
         product.quantity = 1 ;
         newCart = [...cart, product]
      } 
      else{
         exists.quantity = exists.quantity + 1;
         const remaining = cart.filter(pd => pd.id !== product.id)
         newCart = [...remaining, product] 
      }
      setCart(newCart);
      addToDb(product.id)
   }

   useEffect( () =>{
      const storedCard = getShoppingCart();
      let savedCart = [];

      // step-1 get the id from local storage
      for(const id in storedCard){
         // step 2 (find the product data based on id)
         const addedProduct = products.find(pd => pd.id === id); 
         // step - 3 set the quantity
         if(addedProduct){
            const quantity = storedCard[id];
            addedProduct.quantity = quantity;
            // step-4 (add the added product to the save cart)
            savedCart.push(addedProduct)
         }
      }
      // step-5 (set the cart)
      setCart(savedCart);
   },[products])

   const deleteFromCart = () =>{
      setCart([]) ;
      deleteShoppingCart();
   }

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
              <Order 
                cart={cart}
                deleteFromCart={deleteFromCart}
              >
               <Link to='/orders'><button  className='orderButton'> Order Now  <FontAwesomeIcon  className='icon' icon={faArrowRight} /></button> </Link>
              </Order>
            </div>   
      </div>
   );
};

export default Shop;