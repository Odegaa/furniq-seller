import React from 'react';
import { IoExitOutline } from 'react-icons/io5';
import { NavLink, useNavigate } from 'react-router-dom';
import { Confirm } from 'src/components';
import { useAsideToggleStore, useAuthStorageStore } from 'src/store';

import { links } from './links';
import { AsideToggle } from './toggle';

const AsideInner: React.FC = () => {
  const navigate = useNavigate();
  const { setToggle } = useAsideToggleStore();
  const { signOut } = useAuthStorageStore();

  const logout = () => {
    navigate('/login');
    signOut();
  };

  return (
    <nav className="flex flex-col justify-between min-h-screen pb-10">
      <AsideToggle />
      <div className="flex flex-col gap-1">
        {links.map(({ icon, name, path }) => (
          <NavLink
            onClick={setToggle}
            to={path}
            key={path}
            className="w-full p-2 rounded-lg transition-colors hover:bg-orange-600 flex items-center gap-2 aria-[current]:bg-orange-600"
          >
            <span>{icon}</span>
            <span>{name}</span>
          </NavLink>
        ))}
      </div>
      <Confirm
        title="Выйти?"
        description="Вы точно хотите выйти?"
        okText="Да"
        cancelText="Нет"
        onConfirm={logout}
        placement="topRight"
      >
        <button className="focus:bg-orange-600 w-full p-2 rounded-lg transition-colors hover:bg-orange-600 flex items-center gap-2">
          <span>
            <IoExitOutline />
          </span>
          <span>Выйти</span>
        </button>
      </Confirm>
    </nav>
  );
};

export { AsideInner };
