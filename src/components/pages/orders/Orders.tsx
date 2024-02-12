import React from 'react';
import { Section } from 'src/components';

import { OrdersTable } from './table';

const Orders: React.FC = () => (
  <Section>
    <OrdersTable />
  </Section>
);

export { Orders };
