import { Table, TableProps } from 'antd';
import React from 'react';
import uniqid from 'uniqid';

const CustomTable: React.FC<TableProps> = (props) => (
  <Table
    {...props}
    rowKey={() => uniqid()}
    className="relative rounded-lg overflow-auto lg:w-full bg-white p-2 my-3 mx-2 pr-5"
  />
);

export { CustomTable };
