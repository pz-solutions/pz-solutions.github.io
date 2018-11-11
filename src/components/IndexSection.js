import React from 'react';

function IndexSection ({ id, header, footer, children }){
  return (
    <section id={id} className="main special">
      {header && <header className="major">{header()}</header>}
      {children}
      {footer && <footer className="major">{footer()}</footer>}
    </section>
  );
};

export default IndexSection;
