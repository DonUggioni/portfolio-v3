import React from 'react';
import classes from './SectionTitle.module.css';

function SectionTitle({ children }) {
  return (
    <h2 className={classes.title}>
      <span className={classes.span}>#</span>
      {children}
    </h2>
  );
}

export default SectionTitle;
