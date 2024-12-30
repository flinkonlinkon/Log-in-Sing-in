import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LogIn from './Components/LogIn.jsx';
import SingUp from './Components/SingUp.jsx';
import ContextProvider from './Components/ContextProvider.jsx';
import Home from './Components/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[{
      path:'/',
      element:<Home></Home>
    }]
  },
  {
    path:'/login',
    element:<LogIn></LogIn>
  },
  {
    path:'/singup',
    element:<SingUp></SingUp>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>

    <RouterProvider router={router} />
    </ContextProvider>
  </StrictMode>,
)
