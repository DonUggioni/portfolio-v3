import React from 'react';
import classes from './Hero.module.css';

function Hero() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.heroContainer}>
        <h3 className={classes.headerSmall}>Hello, my name is</h3>
        <div>
          <h1 className={classes.headerLarge}>
            Renan Tiscoski, <br />
            <span className={classes.textDarker}>
              I build <span className={classes.accent}>digital</span> stuff.
            </span>
          </h1>
        </div>
        <h3 className={classes.headerSmall}>
          I'm a web developer focused on front end development.
        </h3>
      </div>
    </div>
  );
}

export default Hero;
