import React from 'react';
import { TColor } from 'src/services/colors/color.types';

const InnerColor: React.FC<{ color: TColor | undefined }> = ({ color }) => (
  <div>
    <div>
      <span>Цвет (Русский): </span>
      <span>{color?.name.ru}</span>
    </div>
    <div>
      <span>Цвет (Qaraqalpaqsha): </span>
      <span>{color?.name.latin}</span>
    </div>
    <div>
      <span>Цвет (Каракалпакша): </span>
      <span>{color?.name.kiril}</span>
    </div>
  </div>
);

export { InnerColor };
