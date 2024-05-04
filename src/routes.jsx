import { createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import ShopPage from './pages/shop-page/ShopPage.jsx';
import ErrorPage from './pages/page-not-found/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/shop',
    element: <ShopPage />,
  },
]);

export default router;
