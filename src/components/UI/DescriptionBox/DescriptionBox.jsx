import React from 'react';
import classes from './DescriptionBox.module.css';

function DescriptionBox({ children, extraClass }) {
  return (
    <div className={`${classes.container} ${extraClass}`}>
      <p className={classes.description}>{children}</p>
    </div>
  );
}

export default DescriptionBox;
