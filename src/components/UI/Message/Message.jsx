import React from 'react';
import styles from './Message.module.css';

export default function Message({ title, message }) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{message}</p>
    </div>
  );
}
