import React from 'react';

const ButtonForm: React.FC<{ toggleDrawer: () => void; edit?: boolean }> = ({
  toggleDrawer,
  edit,
}) => (
  <button
    onClick={toggleDrawer}
    className="py-2 px-10 rounded-lg text-white bg-slate-500 transition-colors hover:bg-slate-600"
  >
    {edit ? 'изменить' : 'добавить'}
  </button>
);

export { ButtonForm };
