import React from 'react';
import classes from './Button.module.css';

function Button({ children, onClick, style }) {
  return (
    <div className={`${classes.container} ${style}`} onClick={onClick}>
      {children}
    </div>
  );
}

export default Button;
