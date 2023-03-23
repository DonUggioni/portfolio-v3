import React from 'react';
import classes from './TechText.module.css';

function TechText({ children }) {
  return (
    <p className={classes.text}>
      <span className={classes.span}>- </span>
      {children}
    </p>
  );
}

export default TechText;
