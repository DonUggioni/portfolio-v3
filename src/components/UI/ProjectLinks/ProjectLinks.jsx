import React from 'react';
import classes from './ProjectLinks.module.css';
import { AiFillGithub } from 'react-icons/ai';
import { BiLinkExternal } from 'react-icons/bi';

function ProjectLinks({ gitLink, webLink }) {
  return (
    <div className={classes.container}>
      <div className={classes.linkContainer}>
        <a href={gitLink} className={classes.link}>
          <AiFillGithub color='rgb(18, 246, 250)' size={28} />
        </a>
      </div>
      <div className={classes.linkContainer}>
        <a href={webLink} className={classes.link}>
          <BiLinkExternal color='rgb(18, 246, 250)' size={28} />
        </a>
      </div>
    </div>
  );
}

export default ProjectLinks;
