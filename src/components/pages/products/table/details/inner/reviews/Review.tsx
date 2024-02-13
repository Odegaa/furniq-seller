import React from 'react';

import { ReviewForm } from './form';
import { ReviewTable } from './table';

const Review: React.FC<{ id: number | undefined }> = ({ id }) => (
  <>
    <ReviewForm id={id} />
    <ReviewTable id={id} />
  </>
);

export { Review };
