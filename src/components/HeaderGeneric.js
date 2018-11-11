import React from 'react';

const HeaderGeneric = ({ title, children }) => (
  <header id="header">
    {title && (
        <h1>{title}</h1>
    )}
    {children && <p>{children}</p>}
  </header>
);

export default HeaderGeneric;
