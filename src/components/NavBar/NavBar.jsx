import React from 'react';
import NavLink from '../UI/NavLink/NavLink';
import classes from './NavBar.module.css';
import atomAnimation from '../../assets/atom_animation.json';

import Lottie from 'react-lottie-player';

function NavBar() {
  return (
    <div className={classes.navBarContainer}>
      <NavLink text='About' extraClass={classes.link1} />
      <NavLink text='Work' extraClass={classes.link2} />
      <div className={classes.animationContainer}>
        <Lottie
          loop
          animationData={atomAnimation}
          play
          speed={0.5}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <NavLink text='Contact' extraClass={classes.link3} />
      <NavLink text='Resume' extraClass={classes.link4} />
    </div>
  );
}

export default NavBar;
