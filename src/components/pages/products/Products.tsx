import React from 'react';
import { Section } from 'src/components';

import { ProductsForm } from './form';
import { ProductsTable } from './table';

const Products: React.FC = () => (
  <Section>
    <ProductsForm />
    <ProductsTable />
  </Section>
);

export { Products };
