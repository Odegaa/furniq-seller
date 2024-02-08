/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const InputPassword: React.FC = () => (
  <div className="w-full">
    <label htmlFor="password" className="font-bold capitalize">
      Пароль
    </label>
    <input
      id="password"
      type="password"
      placeholder="Пароль"
      className="w-full rounded-xl bg-gray-200 py-2 px-4 mt-2"
    />
  </div>
);

export { InputPassword };
