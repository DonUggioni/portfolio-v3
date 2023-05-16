import React from 'react';
import classes from './ProjectLinks.module.css';
import { AiFillGithub } from 'react-icons/ai';
import { BiLinkExternal } from 'react-icons/bi';

function ProjectLinks({ gitLink, webLink, ariaLabel }) {
  return (
    <div className={classes.container}>
      <div className={classes.linkContainer}>
        <a
          href={gitLink}
          target='_blank'
          className={classes.link}
          aria-label={ariaLabel}
        >
          <AiFillGithub color='rgb(18, 246, 250)' size={28} />
        </a>
      </div>
      <div className={classes.linkContainer}>
        <a
          href={webLink}
          target='_blank'
          className={classes.link}
          aria-label={ariaLabel}
        >
          <BiLinkExternal color='rgb(18, 246, 250)' size={28} />
        </a>
      </div>
    </div>
  );
}

export default ProjectLinks;
