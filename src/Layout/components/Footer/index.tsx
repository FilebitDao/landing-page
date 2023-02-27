import React, { FC } from 'react';

import { ReactComponent as Logo } from 'assets/imgs/logo-grey.svg';
import { ReactComponent as Twitter } from 'assets/imgs/twitter.svg';
import { ReactComponent as Telegram } from 'assets/imgs/telegram.svg';
import { ReactComponent as Discord } from 'assets/imgs/discord.svg';
import { ReactComponent as Mail } from 'assets/imgs/mail.svg';

import styles from './index.module.scss';

const Footer: FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.logo}>
        <Logo width={99} />
        <div className={styles.copyRight}>
          Narwhal.protocol©2022
        </div>
      </div>
      <div className={styles.media}>
        Terms of Service
        <div className={styles.mediaIcons}>
          <Twitter width={24} height={24} />
          <Telegram width={24} height={24} />
          <Discord width={24} height={24} />
          <Mail width={24} height={24} />
        </div>
      </div>
    </div>
  );
};

export default Footer;