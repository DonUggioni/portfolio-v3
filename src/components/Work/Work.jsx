import React from 'react';
import Section from '../UI/Section/Section';
import SectionTitle from '../UI/SectionTitle/SectionTitle';
import classes from './Work.module.css';
import barbellHubWeb from '../../assets/barbell-hub-web.png';
import barbellHubMobile from '../../assets/mobile_project.png';
import quizzBizzAppImg from '../../assets/quizz-bizz-app.png';
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
          <div className={`${classes.imageWrapperRight} ${classes.imageRight}`}>
            <img
              className={classes.image}
              src={barbellHubMobile}
              alt='Barbell Hub mobile app screenshot'
            />
          </div>
          <div className={classes.descriptionLeft}>
            <ProjectTitle link='https://play.google.com/store/apps/details?id=com.barbell.hub'>
              Barbell Hub Mobile App
            </ProjectTitle>
            <DescriptionBox extraClass={classes.textAlignLeft}>
              Barbell Hub is a mobile application designed to cater to novice
              and intermediate strength athletes by offering a range of training
              templates. Users can log their training activities, monitor their
              progress, and choose appropriate templates based on their training
              phase. The main goal of the app is to provide a comprehensive tool
              for strength athletes to enhance their training and track their
              progress over time.
            </DescriptionBox>
            <div className={`${classes.flex}`}>
              <TechText>React Native</TechText>
              <TechText>Expo</TechText>
              <TechText>Firebase</TechText>
              <TechText>Play Store</TechText>
            </div>
            <ProjectLinks
              gitLink={'https://github.com/DonUggioni/strongfy-app'}
              webLink={'https://barbell-hub-demo.vercel.app/'}
              ariaLabel={'Link to Barbell Hub app in play store.'}
            />
          </div>
        </li>

        <li className={`${classes.grid_12_col}`}>
          <div className={`${classes.imageWrapper} ${classes.imageLeft}`}>
            <img
              className={classes.image}
              src={barbellHubWeb}
              alt='Barbell Hub website screenshot'
            />
          </div>
          <div className={classes.descriptionRight}>
            <ProjectTitle
              extraClass={classes.titleTop}
              link='https://www.barbell-hub.com'
            >
              Barbell Hub Web
            </ProjectTitle>
            <DescriptionBox extraClass={classes.textAlignRight}>
              I have developed a website to complement the mobile application.
              The goal of this website is to enhance app promotion and provide
              clients with a dashboard where they can access pertinent training
              data as well as articles with training tips, helping athletes
              develop their knowledge.
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
              ariaLabel={'Link to barbell hub website'}
            />
          </div>
        </li>

        <li className={`${classes.grid_12_col}`}>
          <div className={`${classes.imageWrapperRight} ${classes.imageRight}`}>
            <img
              className={classes.image}
              src={quizzBizzAppImg}
              alt='QuizzBizz mobile app screenshot'
            />
          </div>
          <div className={classes.descriptionLeft}>
            <ProjectTitle link='https://play.google.com/store/apps/details?id=com.quizzbizz.app'>
              QuizzBizz
            </ProjectTitle>
            <DescriptionBox extraClass={classes.textAlignLeft}>
              Experience engaging and enjoyable quiz challenges with the
              QuizzBizz app. Developed using cutting-edge cross-platform
              technologies like React Native, Expo, and Firebase, this
              user-friendly full stack application offers seamless navigation
              and a delightful user experience. Explore an extensive range of
              questions spanning various subjects, ensuring an enriching and
              diverse quiz-taking journey.
            </DescriptionBox>
            <div className={`${classes.flex}`}>
              <TechText>React Native</TechText>
              <TechText>Expo</TechText>
              <TechText>Firebase</TechText>
              <TechText>Play Store</TechText>
              <TechText>Aptabase</TechText>
            </div>
            <ProjectLinks
              gitLink={'https://github.com/DonUggioni/quizzbizz_app'}
              webLink={
                'https://play.google.com/store/apps/details?id=com.quizzbizz.app'
              }
              ariaLabel={'Link to QuizzBizz Hub app in play store.'}
            />
          </div>
        </li>
      </ul>
    </Section>
  );
}

export default Work;
