import React from 'react';
import classes from './ProjectTitle.module.css';

function ProjectTitle({ children, extraClass }) {
  return (
    <h3 className={classes.projectName}>
      <span className={classes.span}>@</span>
      {children}
    </h3>
  );
}

export default ProjectTitle;
