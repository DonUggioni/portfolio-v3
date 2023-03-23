import React from 'react';
import Section from '../UI/Section/Section';
import SectionTitle from '../UI/SectionTitle/SectionTitle';
import classes from './Work.module.css';
import barbellHubWeb from '../../assets/barbell-hub-web.png';
import ProjectTitle from '../UI/ProjectTitle/ProjectTitle';
import DescriptionBox from '../UI/DescriptionBox/DescriptionBox';
import TechText from '../UI/TechText/TechText';
import ProjectLinks from '../UI/ProjectLinks/ProjectLinks';

function Work() {
  return (
    <Section id={'work'}>
      <SectionTitle>Work</SectionTitle>
      <ul className={classes.innerWrapper}>
        <li className={`${classes.grid_12_col}`}>
          <div className={`${classes.imageWrapper} ${classes.imageLeft}`}>
            <img
              className={classes.image}
              src={barbellHubWeb}
              alt='Barbell Hub website screenshot'
            />
          </div>
          <div className={classes.descriptionRight}>
            <ProjectTitle>Barbell Hub Web</ProjectTitle>
            <DescriptionBox extraClass={classes.textAlignRight}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
              consequatur reprehenderit tempore deleniti facilis nulla hic ipsa
              ullam beatae illum eius, impedit, illo velit laboriosam. Quaerat
              saepe iure soluta fugit?
            </DescriptionBox>
            <div className={`${classes.flex}`}>
              <TechText>React</TechText>
              <TechText>Tailwind</TechText>
              <TechText>Firebase</TechText>
              <TechText>Netlify</TechText>
            </div>
            <ProjectLinks
              gitLink={'https://github.com/DonUggioni/strongfy_web'}
              webLink={'https://www.barbell-hub.com'}
            />
          </div>
        </li>
      </ul>
    </Section>
  );
}

export default Work;
