import { Spin } from 'antd';
import React from 'react';

const ButtonSubmit: React.FC<{ isPending: boolean }> = ({ isPending }) => (
  <button
    type="submit"
    className="bg-orange-500 text-white flex items-center py-1 px-10 rounded-md tracking-widest uppercase font-semibold transition hover:bg-orange-600"
  >
    {isPending ? <Spin className="w-full h-full my-2 mx-4" /> : <span className="py-2">войти</span>}
  </button>
);

export { ButtonSubmit };
