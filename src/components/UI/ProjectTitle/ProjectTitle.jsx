import React from 'react';
import classes from './ProjectTitle.module.css';

function ProjectTitle({ children, extraClass }) {
  return (
    <div className={`${classes.container} ${extraClass}`}>
      <a
        className={`${classes.projectName}`}
        href='https://www.barbell-hub.com'
      >
        <span className={classes.span}>@</span>
        {children}
      </a>
    </div>
  );
}

export default ProjectTitle;
