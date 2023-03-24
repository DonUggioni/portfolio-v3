import React from 'react';
import classes from './Footer.module.css';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className={classes.container}>
      <div className={classes.iconsContainer}>
        <div className={classes.iconWrapper}>
          <a href='https://www.linkedin.com/in/renan-tiscoski/'>
            <AiFillLinkedin color='rgb(18, 246, 250)' size={28} />
          </a>
        </div>
        <div className={classes.iconWrapper}>
          <a href='https://github.com/DonUggioni'>
            <AiFillGithub color='rgb(18, 246, 250)' size={28} />
          </a>
        </div>
      </div>
      <p className={classes.text}>
        Renan Tiscoski <span className={classes.span}>{year}</span>.
      </p>
    </footer>
  );
}

export default Footer;
