import React from 'react';

const NotFoundPage: React.FC = () => (
  <section className="w-full grid place-items-center pt-80">
    <h1 className="text-4xl text-gray-500 font-semibold font-mono">Здесь пусто - 404</h1>
    <p className="text-lg text-gray-400 font-mono">Вы ввели не корректный запрос</p>
  </section>
);

export { NotFoundPage };
