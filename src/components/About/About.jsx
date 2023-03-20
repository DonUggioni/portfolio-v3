import React from 'react';
import Section from '../UI/Section/Section';
import SectionTitle from '../UI/SectionTitle/SectionTitle';
import classes from './About.module.css';

function About() {
  return (
    <Section>
      <div className={classes.innerWrapper}>
        <SectionTitle>About</SectionTitle>
      </div>
    </Section>
  );
}

export default About;
