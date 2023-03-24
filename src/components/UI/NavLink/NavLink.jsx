import React from 'react';
import classes from './NavLink.module.css';

function NavLink({ text, extraClass }) {
  return (
    <div className={`${classes.linkContainer} ${extraClass}`}>
      <a href='#' className={classes.link}>
        {text}
      </a>
    </div>
  );
}
export default NavLink;
