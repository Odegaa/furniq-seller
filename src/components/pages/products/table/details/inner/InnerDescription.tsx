import React from 'react';
import { TName } from 'src/services/index.types';

const InnerDescription: React.FC<{ description: TName | undefined }> = ({ description }) => (
  <div className="flex flex-col gap-2">
    <p>
      <span className="font-bold">Описание (русский): </span>
      <span>{description?.ru}</span>
    </p>
    <p>
      <span className="font-bold">Описание (каракалпакша): </span>
      <span>{description?.kiril}</span>
    </p>
    <p>
      <span className="font-bold">Описание (qaraqalpaqsha): </span>
      <span>{description?.latin}</span>
    </p>
  </div>
);

export { InnerDescription };
