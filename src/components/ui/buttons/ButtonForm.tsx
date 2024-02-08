import React from 'react';

const ButtonForm: React.FC<{ toggleDrawer: () => void }> = ({ toggleDrawer }) => (
  <button onClick={toggleDrawer} className="py-2 px-10 rounded-lg text-white bg-slate-500">
    добавить
  </button>
);

export { ButtonForm };
