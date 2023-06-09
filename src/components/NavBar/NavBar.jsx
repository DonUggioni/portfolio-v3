import React from 'react';
import NavLink from '../UI/NavLink/NavLink';
import classes from './NavBar.module.css';
import atomAnimation from '../../assets/atom_animation.json';
import resumeFile from '../../assets/resume.pdf';

import Lottie from 'react-lottie-player';

function NavBar() {
  return (
    <nav className={classes.navBarContainer}>
      <NavLink
        text='About'
        href={'#about'}
        extraClass={classes.link1}
        ariaLabel={'Link to about section'}
      />
      <NavLink
        text='Work'
        href={'#work'}
        extraClass={classes.link2}
        ariaLabel={'Link to work section'}
      />
      <a
        className={classes.animationContainer}
        href='#home'
        aria-label='Link to hero section'
      >
        <Lottie
          loop
          animationData={atomAnimation}
          play
          speed={0.5}
          style={{ width: '100%', height: '100%' }}
        />
      </a>
      <NavLink
        text='Contact'
        href={'#contact'}
        extraClass={classes.link3}
        ariaLabel={'Link to contact section'}
      />
      <NavLink
        text='Resume'
        href={resumeFile}
        target='_blank'
        extraClass={classes.link4}
        ariaLabel={'Link to resume file'}
      />
    </nav>
  );
}

export default NavBar;
