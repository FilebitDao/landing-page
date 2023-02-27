import React, { FC } from 'react';

import styles from './index.module.scss';

const NewsLetter: FC = () => {
  return (
    <div className={styles.newsLetter}>
      <div className={styles.descs}>
        <h3 className={styles.title}>Narwhal Protocol Newsletter</h3>
        <p className={styles.follow}>Follow us for more information about the Narwhal</p>
      </div>
      <div className={styles.form}>
        <input className={styles.input} type="email" placeholder="Please Input your email adress" />
        <button className={styles.submit}>Submit</button>
      </div>
    </div>
  );
};

export default NewsLetter;
