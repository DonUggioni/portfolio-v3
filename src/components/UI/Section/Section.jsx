import React from 'react';
import classes from './Section.module.css';

function Section({ children }) {
  return <div className={classes.sectionContainer}>{children}</div>;
}

export default Section;
