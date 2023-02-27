import React, { FC, useEffect, useState, useRef } from 'react';
import Drawer from 'react-modern-drawer';
import classNames from 'classnames';

import { ReactComponent as Logo } from 'assets/imgs/logo.svg';
import { ReactComponent as Expand } from 'assets/imgs/expand.svg';
import { ReactComponent as Close } from 'assets/imgs/close.svg';

import 'react-modern-drawer/dist/index.css';

import styles from './index.module.scss';

const MARKETS = process.env.REACT_APP_APP_URL;

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const lastScrollTopRef = useRef(0);
  const toggleDrawer = () => setIsOpen((prevState) => !prevState);

  const scroll = (e) => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop < 50) {
      setIsFixed(false);
      return;
    }

    setIsFixed(true);

    lastScrollTopRef.current = scrollTop;
  };

  useEffect(() => {
    window.addEventListener('scroll', scroll);
    return () => window.removeEventListener('scroll', scroll);
  }, []);

  return (
    <>
      <div className={classNames([styles.header, isFixed && styles.fixedHeader])}>
        <Logo width={148} />
        <div className={styles.links}>
          <a className={styles.link} href={MARKETS}>Markets</a>
          <a className={styles.link} target="_blank" href={process.env.REACT_APP_DOC_URL}>Doc</a>
          <a className={styles.link} target="_blank" href={process.env.REACT_APP_FAQ_URL}>FAQ</a>
        </div>
        <div className={styles.menus}>
          <a className={styles.lunchApp} href={MARKETS}>Lunch App</a>
          <span className={styles.menuTrigger} onClick={toggleDrawer}>
            <Expand width={14} height={14} />
          </span>
        </div>
      </div>
      <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction='bottom'
          overlayOpacity='0.2'
          className={styles.menuWrapper}
      >
        <div className={styles.close} onClick={toggleDrawer}>
          <Close width={28} height={28} />
        </div>
        <div className={styles.links}>
          <a className={styles.link} href={MARKETS}>Markets</a>
          <a className={styles.link} href="#">Doc</a>
          <a className={styles.link} href="#">FAQ</a>
        </div>
      </Drawer>
      <div className={classNames(styles.headerPlaceholder, isFixed && styles.fixed)}></div>
    </>
  );
};

export default Header;