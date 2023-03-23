import React from 'react';
import classes from './Button.module.css';

function Button({ children }) {
  return (
    <div className={classes.container}>
      <a href='mailto:renan.uggioni@gmail.com' className={classes.link}>
        {children}
      </a>
    </div>
  );
}

export default Button;
