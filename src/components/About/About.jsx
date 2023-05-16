import React from 'react';
import Section from '../UI/Section/Section';
import SectionTitle from '../UI/SectionTitle/SectionTitle';
import classes from './About.module.css';

function About() {
  return (
    <Section id='about'>
      <div className={classes.innerWrapper}>
        <SectionTitle>About</SectionTitle>
        <div className={classes.infoContainer}>
          <div className={classes.infoInnerContainer}>
            <p className={classes.infoText}>
              Hello there, my name's Renan! I'm a builder of things on the
              interwebs, currently living in Portugal. But don't box me in, I'm
              a citizen of the world - I've lived in a few different spots on
              this big ol' planet. I caught the coding bug (Hah! See what I did
              there?!) back in 2020 when I started poking around the tech world.
              It was a love-hate relationship at first, but now I'm all in. I've
              been learning to code on and off for a while, but it wasn't until
              Feb 2022 that I really committed and decided to make this my gig.
              When I'm not nerding out over code, you can find me jamming on my
              guitar or indulging in some gaming. Yup, I'm a part-time geek and
              proud of it!
            </p>
            <div className={classes.techContainer}>
              <p className={classes.techContainer_title}>
                My <span className={classes.accent}>tech</span> stack:
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
                  <span className={classes.accent_grey}>- </span> TypeScript
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
