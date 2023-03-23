import React from 'react';
import classes from './ProjectTitle.module.css';

function ProjectTitle({ children, extraClass, link }) {
  return (
    <div className={`${classes.container} ${extraClass}`}>
      <a className={`${classes.projectName}`} href={link}>
        <span className={classes.span}>@</span>
        {children}
      </a>
    </div>
  );
}

export default ProjectTitle;
