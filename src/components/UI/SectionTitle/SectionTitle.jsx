import React from 'react';
import classes from './SectionTitle.module.css';

function SectionTitle({ children }) {
  return (
    <h3 className={classes.title}>
      <span className={classes.span}>#</span>
      {children}
    </h3>
  );
}

export default SectionTitle;
