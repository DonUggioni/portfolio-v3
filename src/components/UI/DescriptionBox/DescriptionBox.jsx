import React from 'react';
import classes from './DescriptionBox.module.css';

function DescriptionBox({ children }) {
  return (
    <div className={classes.container}>
      <p className={classes.description}>{children}</p>
    </div>
  );
}

export default DescriptionBox;
