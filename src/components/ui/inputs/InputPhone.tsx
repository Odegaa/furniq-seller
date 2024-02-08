/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import ReactInputMask from 'react-input-mask';

const InputPhone: React.FC = () => (
  <div className="w-full">
    <label htmlFor="phone" className="font-bold">
      Телефон номер
    </label>
    <ReactInputMask
      id="phone"
      type="tel"
      placeholder="Телефон номер"
      required
      // eslint-disable-next-line no-nonoctal-decimal-escape
      mask="+\9\98 99 999 99 99"
      className="w-full placeholder:tracking-wider bg-gray-200 rounded-xl py-2 px-4 mb-5 mt-2"
    />
  </div>
);

export { InputPhone };
