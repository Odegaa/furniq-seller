import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAsideToggleStore, useAuthStorageStore } from 'src/store';

import { Aside } from './aside';

const Layouts: React.FC = () => {
  const { toggle } = useAsideToggleStore();
  const { token } = useAuthStorageStore();
  return token ? (
    <>
      <Aside />
      <main
        className={`${toggle ? 'sm:ml-60' : 'sm:ml-0'} px-5 sm:px-10 py-5 min-h-screen bg-slate-50`}
      >
        <Outlet />
      </main>
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export { Layouts };
