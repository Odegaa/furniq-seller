// eslint-disable-next-line object-curly-newline
import { Details, Home, NotFoundPage, Orders, OrderShow, Products } from 'src/components';

export const routes = [
  { path: '/', element: <Home /> },
  { path: '/*', element: <NotFoundPage /> },

  { path: '/products', element: <Products /> },
  { path: '/products/:id', element: <Details /> },
  { path: '/orders', element: <Orders /> },
  { path: '/orders/:id', element: <OrderShow /> },
];
