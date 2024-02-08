import React from 'react';

const Section: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <section className="bg-white rounded-lg shadow-lg overflow-hidden relative">{children}</section>
);

export { Section };
