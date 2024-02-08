import React from 'react';
import { TName } from 'src/services/index.types';

const InnerNames: React.FC<{ name: TName | undefined }> = ({ name }) => (
  <div className="flex flex-col gap-2">
    <h1>
      <span className="font-bold">Название (русский): </span>
      <span>{name?.ru}</span>
    </h1>
    <h1>
      <span className="font-bold">Название (каракалпакша): </span>
      <span>{name?.kiril}</span>
    </h1>
    <h1>
      <span className="font-bold">Название (qaraqalpaqsha): </span>
      <span>{name?.latin}</span>
    </h1>
  </div>
);

export { InnerNames };
