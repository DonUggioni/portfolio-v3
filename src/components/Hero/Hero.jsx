import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import classes from './Hero.module.css';

function Hero() {
  return (
    <main className={classes.wrapper}>
      <div className={classes.heroContainer}>
        <h3 className={classes.headerSmall}>Hello, my name is</h3>
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
        <h3 className={classes.headerSmall}>
          I'm a web developer focused on front end development.
        </h3>
      </div>
    </main>
  );
}

export default Hero;
