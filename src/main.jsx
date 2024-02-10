import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './components/Shop/Shop.jsx';
import HomeLayout from './components/Layout/HomeLayout.jsx';
import Orders from './components/Orders/Orders.jsx';
import Inventory from './components/Inventory/Inventory.jsx';
import cartProductLoader from './loaderData/cartProductsLoader.js';


const router = createBrowserRouter([
  {
    path:'/',
    element:<HomeLayout></HomeLayout>,
    children:[
      {
        path:'/',
        element:<Shop></Shop>
      },

       {
        path:'/orders',
        element:<Orders></Orders>,
        loader: cartProductLoader
      },

       {
        path:'/inventory',
        element:<Inventory></Inventory>
      },
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
    {/* <App /> */}
  </React.StrictMode>,
)
