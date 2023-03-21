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
              the tech world. Since then, I started learning how to code on and
              off until February 2022, when I started taking it seriously and
              decided that I wanted to do this for a living. I'm also a musician
              and part-time geek and gamer.
            </p>
            <div className={classes.techContainer}>
              <p className={classes.techContainer_title}>
                Some <span className={classes.accent}>technologies</span> I use:
              </p>
              <div className={classes.techInnerContainer}>
                <p className={classes.tech}>
                  <span className={classes.accent_grey}>- </span> HTML5
                </p>
                <p className={classes.tech}>
                  <span className={classes.accent_grey}>- </span> CSS3
                </p>
                <p className={classes.tech}>
                  <span className={classes.accent_grey}>- </span> Sass
                </p>
                <p className={classes.tech}>
                  <span className={classes.accent_grey}>- </span> JavaScript
                </p>
                <p className={classes.tech}>
                  <span className={classes.accent_grey}>- </span> React
                </p>
                <p className={classes.tech}>
                  <span className={classes.accent_grey}>- </span> React Native
                </p>
                <p className={classes.tech}>
                  <span className={classes.accent_grey}>- </span> Tailwind
                </p>
                <p className={classes.tech}>
                  <span className={classes.accent_grey}>- </span> Figma
                </p>
              </div>
            </div>
          </div>
          <div className={classes.imageWrapper}></div>
        </div>
      </div>
    </Section>
  );
}

export default About;
