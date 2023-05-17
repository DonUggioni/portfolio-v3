import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './ContactModal.module.css';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '../UI/Button/Button';
import Message from '../UI/Message/Message';

export default function ContactModal() {
  const [open, setOpen] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [name, setName] = useState({ name: '', isValid: true });
  const [email, setEmail] = useState({ email: '', isValid: true });
  const [message, setMessage] = useState({ message: '', isValid: true });
  const formRef = useRef();

  const validStyles = styles.input;
  const invalidStyles = `${styles.input} ${styles.error}`;
  const errorMessageVisible = `${styles.errorMessage} ${styles.errorMessageVisible}`;

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
    setErrorMessage(false);
    setMessageSent(false);
    setName({ name: '', isValid: true });
    setEmail({ email: '', isValid: true });
    setMessage({ message: '', isValid: true });
  }

  function handleChange(field, event) {
    if (field === 'name') {
      setName({ ...name, name: event.target.value, isValid: true });
    }
    if (field === 'email') {
      setEmail({ ...email, email: event.target.value, isValid: true });
    }
    if (field === 'message') {
      setMessage({ ...message, message: event.target.value, isValid: true });
    }
  }

  function checkForErrors() {
    if (name.name === '') {
      setName({ ...name, isValid: false });
      return;
    }
    if (email.email === '' || !email.email.includes('@')) {
      setEmail({ ...email, isValid: false });
      return;
    }
    if (message.message === '') {
      setMessage({ ...message, isValid: false });
      return;
    }

    sendEmail();
  }

  const sendEmail = () => {
    emailjs
      .sendForm(
        'service_ffphtqq',
        'template_20ax4n90',
        formRef.current,
        'SKeN1W0pSgyJKlshZ'
      )
      .then(
        (result) => {
          result && setMessageSent(true);
        },
        (error) => {
          error && setErrorMessage(true);
        }
      );
  };

  function onSubmitHandler(e) {
    e.preventDefault();
    checkForErrors();
  }

  return (
    <div>
      <Button onClick={handleOpen}>Say hello!</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
        className={styles.modal}
      >
        <Box className={styles.box}>
          <form className={styles.form} ref={formRef}>
            <label>Name</label>
            <div className={styles.inputWrapper}>
              <span
                className={
                  name.isValid ? styles.errorMessage : errorMessageVisible
                }
              >
                Cannot be empty
              </span>

              <input
                type='text'
                name='name'
                required
                tabIndex={0}
                className={name.isValid ? validStyles : invalidStyles}
                onChange={(e) => handleChange('name', e)}
                autoFocus
              />
            </div>

            <label>Email</label>
            <div className={styles.inputWrapper}>
              <span
                className={
                  email.isValid ? styles.errorMessage : errorMessageVisible
                }
              >
                Enter a valid email
              </span>
              <input
                type='email'
                name='email'
                required
                tabIndex={1}
                className={email.isValid ? validStyles : invalidStyles}
                onChange={(e) => handleChange('email', e)}
              />
            </div>

            <label>Message</label>
            <div className={styles.inputWrapper}>
              <span
                className={
                  message.isValid ? styles.errorMessage : errorMessageVisible
                }
              >
                Cannot be empty
              </span>

              <textarea
                name='message'
                rows='10'
                required
                tabIndex={2}
                className={message.isValid ? validStyles : invalidStyles}
                onChange={(e) => handleChange('message', e)}
              />
            </div>

            <Button style={styles.button} onClick={onSubmitHandler}>
              Send
            </Button>
          </form>
          {messageSent && (
            <Message
              title={'Hooray!'}
              message={'Message sent successfully!'}
              success
            />
          )}
          {errorMessage && (
            <Message
              title={`${'Oops! Something went wrong!'}`}
              message={'Please try again.'}
            />
          )}
        </Box>
      </Modal>
    </div>
  );
}
