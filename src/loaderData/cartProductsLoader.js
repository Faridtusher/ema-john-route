import { getShoppingCart } from "../utilities/fakedb";

const createProductLoader = async () =>{
   const loadedProducts = await fetch('products.json')
   const products = await loadedProducts.json();
   let savedCart = [];

   const storedCart = getShoppingCart();
   for(const id in storedCart){
      const addedProducts = products.find(product => product.id === id);
      // set the quantity
      if(addedProducts){
         const quantity = storedCart[id]
         addedProducts.quantity = quantity
         savedCart.push(addedProducts)
      }
   }
   return savedCart
}

export default createProductLoader;





