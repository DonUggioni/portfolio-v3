import React from 'react';
import classes from './Section.module.css';

function Section({ children, id }) {
  return (
    <section id={id} className={classes.sectionContainer}>
      {children}
    </section>
  );
}

export default Section;
