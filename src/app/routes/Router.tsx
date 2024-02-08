import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Login } from 'src/components';

import { Layouts } from '../layouts';

import { routes } from './routes';

const Router: React.FC = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/" element={<Layouts />}>
      {routes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Route>
  </Routes>
);

export { Router };
