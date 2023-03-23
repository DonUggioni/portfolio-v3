import React from 'react';
import Button from '../UI/Button/Button';
import Section from '../UI/Section/Section';
import SectionTitle from '../UI/SectionTitle/SectionTitle';
import classes from './Contact.module.css';

function Contact() {
  return (
    <Section>
      <div className={classes.container}>
        <SectionTitle>Contact Me</SectionTitle>
        {/* <h2 className={classes.header}>Contact Me</h2> */}
        <p className={classes.text}>
          Thank you for taking the time to view my portfolio. If you would like
          to get in touch with me regarding a potential project or any other
          inquiries, please don't hesitate to send me a message. I am available
          for freelance web development work, and I am always interested in
          hearing about new and exciting projects. So whether you have a
          question, a proposal, or just want to say hello, feel free to get in
          touch.
        </p>
        <Button>Say hello!</Button>
      </div>
    </Section>
  );
}

export default Contact;
