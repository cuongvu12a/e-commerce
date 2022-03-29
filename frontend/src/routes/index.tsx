import { BrowserRouter, RouteObject, useRoutes } from 'react-router-dom';

import { ROUTE } from '@constants';
import HomePage from '@pages/Home';
import LoginPage from '@pages/Login';
import NotFound from '@pages/NotFound';
import { useMode } from '../theme';

const routes: RouteObject[] = [
  { path: ROUTE.LOGIN, element: <LoginPage /> },
  { path: ROUTE.HOME, element: <HomePage /> },
  { path: ROUTE.NOT_FOUND, element: <NotFound /> },
];

const Content = () => useRoutes(routes);

export default () => {
  const { mode } = useMode();
  return (
    <BrowserRouter>
      <div className={`w-full h-full ${mode}`}>
        <Content />
      </div>
    </BrowserRouter>
  );
};
