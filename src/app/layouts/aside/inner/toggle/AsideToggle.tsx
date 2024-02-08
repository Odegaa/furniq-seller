import React from 'react';
import { FaBars } from 'react-icons/fa';
import { useAsideToggleStore } from 'src/store';

const AsideToggle: React.FC = () => {
  const { setToggle } = useAsideToggleStore();
  return (
    // eslint-disable-next-line jsx-a11y/control-has-associated-label
    <button
      onClick={setToggle}
      className="absolute left-full bg-orange-500 top-5 p-[10px] rounded-se-lg rounded-ee-lg hover:bg-orange-600"
    >
      <FaBars />
    </button>
  );
};

export { AsideToggle };
