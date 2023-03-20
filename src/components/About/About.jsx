import React from 'react';
import Section from '../UI/Section/Section';
import SectionTitle from '../UI/SectionTitle/SectionTitle';
import classes from './About.module.css';

function About() {
  return (
    <Section id='about'>
      <div className={classes.innerWrapper}>
        <div className={classes.infoContainer}>
          <div className={classes.infoInnerContainer}>
            <SectionTitle>About</SectionTitle>
            <p className={classes.infoText}>
              My name is Renan. I build stuff for the internet. I am currently
              based in Portugal but I call myself a citizen of the world since I
              have lived in a few different places of our planet. I got the
              coding bug (no pun intended) around 2020 when I started exploring
              the tech world. Since then, I started to learn how to code on and
              off until February 2022, when I started taking it seriously and
              decided that I wanted to do this for a living. I'm also a musician
              and part-time geek and gamer.
            </p>
            <div>
              <p>Some technologies I use:</p>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>React</li>
                <li>React Native</li>
              </ul>
            </div>
          </div>
          <div className={classes.imageWrapper}></div>
        </div>
      </div>
    </Section>
  );
}

export default About;
