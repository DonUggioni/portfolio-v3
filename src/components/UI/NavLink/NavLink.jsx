import React from 'react';
import classes from './NavLink.module.css';

function NavLink({ text, extraClass, href, target, download }) {
  return (
    <div className={`${classes.linkContainer} ${extraClass}`}>
      <a
        href={href}
        className={classes.link}
        download={download}
        target={target}
      >
        {text}
      </a>
    </div>
  );
}
export default NavLink;
