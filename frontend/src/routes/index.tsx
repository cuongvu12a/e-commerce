import { BrowserRouter, RouteObject, useRoutes } from 'react-router-dom';

import { ROUTE } from '@constants';
import HomePage from '@pages/Home';
import LoginPage from '@pages/Login';
import RegisterPage from '@pages/Register';
import NotFound from '@pages/NotFound';
import Shop from '@pages/Shop';
import Wishlist from '@pages/Wishlist';
import Checkout from '@pages/Checkout';
import Supplier from '@pages/Supplier';

const routes: RouteObject[] = [
  { path: ROUTE.LOGIN, element: <LoginPage /> },
  { path: ROUTE.REGISTER, element: <RegisterPage /> },
  { path: ROUTE.SHOP, element: <Shop /> },
  { path: ROUTE.WISHLIST, element: <Wishlist /> },
  { path: ROUTE.CHECKOUT, element: <Checkout /> },
  { path: ROUTE.SUPPLIER, element: <Supplier /> },
  { path: ROUTE.HOME, element: <HomePage /> },
  { path: ROUTE.NOT_FOUND, element: <NotFound /> },
];

const Content = () => useRoutes(routes);

export default () => {
  return (
    <BrowserRouter>
      <Content />
    </BrowserRouter>
  );
};
