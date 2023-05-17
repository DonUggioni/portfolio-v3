import React from 'react';
import styles from './Message.module.css';
import errorAnimation from '../../../assets/errorLottie.json';
import successLootie from '../../../assets/messageSentLottie.json';
import Lottie from 'react-lottie-player';

export default function Message({ title, message, success }) {
  return (
    <div className={styles.container}>
      <div className={styles.animationContainer}>
        <Lottie
          animationData={success ? successLootie : errorAnimation}
          play
          speed={1}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{message}</p>
    </div>
  );
}
