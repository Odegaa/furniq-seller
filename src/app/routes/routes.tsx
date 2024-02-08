// eslint-disable-next-line object-curly-newline
import { Details, Home, NotFoundPage, Products } from 'src/components';

export const routes = [
  { path: '/', element: <Home /> },
  { path: '/*', element: <NotFoundPage /> },

  { path: '/products', element: <Products /> },
  { path: '/products/:id', element: <Details /> },
];
