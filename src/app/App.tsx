import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Router } from './routes';

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: Infinity,
    },
  },
});

const App: React.FC = () => (
  <QueryClientProvider client={client}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </QueryClientProvider>
);

export { App };
