import React from 'react';
import classes from './NavLink.module.css';

function NavLink({ text }) {
  return (
    <div className={classes.linkContainer}>
      <a href='#' className={classes.link}>
        {text}
      </a>
    </div>
  );
}
export default NavLink;
