import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import classes from './Hero.module.css';

function Hero() {
  return (
    <main className={classes.wrapper} id='home'>
      <div className={classes.heroContainer}>
        <span className={classes.headerSmall}>Hello, my name is</span>
        <div>
          <h1 className={classes.headerLarge}>
            Renan Tiscoski, <br />
            <span className={classes.textDarker}>
              I build{' '}
              <div className={classes.spanWrapper}>
                <span className={classes.accent}>
                  <Typewriter
                    words={['digital', 'and', 'cool']}
                    loop
                    cursor
                    cursorStyle='|'
                    typeSpeed={150}
                    deleteSpeed={120}
                    delaySpeed={1200}
                  />
                </span>
              </div>
              stuff.
            </span>
          </h1>
        </div>
        <span className={classes.headerSmall}>
          I'm a web developer focused on front end development.
        </span>
      </div>
    </main>
  );
}

export default Hero;
