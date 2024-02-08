import React from 'react';
import { useAsideToggleStore } from 'src/store';

import { AsideInner } from './inner';

const Aside: React.FC = () => {
  const { toggle } = useAsideToggleStore();
  return (
    <aside
      className={`text-white z-50 p-2 min-h-screen fixed bg-orange-500 max-w-60 w-full transition-transform ${
        toggle ? 'translate-x-0 sm:translate-x-0' : '-translate-x-60 sm:-translate-x-60'
      }`}
    >
      <AsideInner />
    </aside>
  );
};

export { Aside };
