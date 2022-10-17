import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Main from './Layout/Main';
import Orders from './components/Orders/Oeders'
import Invontory from './components/Inventory/Invontory';
import { productsAndCartLoader } from './Loaders/productsAndCartLoader';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/shop',
          loader: () => fetch('products.json'),

          element: <Shop></Shop>
        },
        {
          path: '/orders',
          loader: () => productsAndCartLoader(),
          element: <Orders></Orders>


        },
        {
          path: '/inventory',
          element: <Invontory></Invontory>
        },
        {
          path: '/about',
          element: <About></About>
        }

      ]
    },


  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
