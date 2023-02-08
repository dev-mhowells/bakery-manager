import { React, useState} from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import App from './App';
import AddItem from './AddItem'
import Signup from './Signup';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import OrderForm from './orderForm';
// import { Navigate } from "react-router-dom";

import LogInForm from './login';
import Login from './login';
import Profile from './profile';
import BakeryIndex from './bakeryIndex';
import Orders from './orders';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/orderform',
    element: <OrderForm />
  },
  {
    path: '/addItem',
    element: <AddItem />
  },
  {
    path: '/login',
    element: <LogInForm />
  },
  {
    path: '/addItem',
    element: <AddItem />
  },
  // {
  //   path: '/login',
  //   element: <Login />
  // },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/profile',
    element: <Profile/>
  },
  {
    path: '/bakeryindex',
    element: <BakeryIndex/>
  },
  {
    path: '/orders',
    element: <Orders/>
  },
])

const Root = () => {
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    // Make an API call to the server to retrieve the user's role
    fetch('/api/user/type')
      .then(res => res.json())
      .then(res => setUserRole(res.role))
      .catch(err => console.error(err));
  }, []);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
      {userRole === 'admin' && <AddItem />}
      {userRole === 'customer' && <OrderForm />}
    </React.StrictMode>
  );
};

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root />);
