import React from 'react';
import Login from './components/Login';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import CustomerHome from './components/customer/CustomerHome';
import CusMainLayout from './components/customer/CusMainLayout';
import CraftMainLayout from './components/craftsman/CraftMainLayout';
import CraftHome from './components/craftsman/CraftHome';
import RegisteredService from './components/customer/RegisteredService';
import RegisteredServiceDetail from './components/customer/RegisteredServiceDetail';
import CusProduct from './components/customer/CusProduct';
import CusDetail from './components/customer/CusDetail';
import Basket from './components/customer/Basket';
import Setting from './components/craftsman/Setting';
import Register from './components/Register';
import CraftNotification from './components/craftsman/CraftNotification';



const router = createBrowserRouter([
  {
    path:'/', 
    element:<Login/>,
   
  
  },
  {
    path:'/register',element:<Register/>
  },
  
  {
    path:'/customer',
    element:<CusMainLayout/>,
    children:
    [
      {
        path:'/customer',element:<CustomerHome/>
      },
      {
        path:'/customer/:param',element:<CustomerHome/>
      },
      {
        path:'/customer/cusproduct',element:<CusProduct/>
      },
      {
        path:'/customer/cusproduct/:param', element:<CusProduct/>
      },
      {
        path:'/customer/detail/:id', element:<CusDetail/>
      },
      {
        path:'/customer/basket/', element:<Basket/>
      },
      {
        path:'/customer/basket/:id', element:<Basket/>
      },
      {
        path:'/customer/registeredService/',element:<RegisteredService/>

      },
      
      
    ]
  },
  {
    path:'/craftsman',
    element:<CraftMainLayout/>,
    children:
    [
      {
        path:'/craftsman',element:<CraftHome/>
      },
      {
        path:'/craftsman/setting',element:<Setting/>
      },
      {
        path:'/craftsman/notification',element:<CraftNotification/>
      },
      

      

      
    ]
  }

]);

function App() {
  return (
    

      <RouterProvider router= {router}/>

  );
}


export default App;

