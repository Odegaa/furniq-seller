import React from 'react';
import { TMaterial } from 'src/services/colors/color.types';

const InnerMaterial: React.FC<{ material_id: TMaterial | undefined }> = ({ material_id }) => (
  <div>
    <div>
      <span>Материал (Русский): </span>
      <span>{material_id?.name.ru}</span>
    </div>
    <div>
      <span>Материал (Qaraqalpaqsha): </span>
      <span>{material_id?.name.latin}</span>
    </div>
    <div>
      <span>Материал (Каракалпакша): </span>
      <span>{material_id?.name.kiril}</span>
    </div>
  </div>
);

export { InnerMaterial };
