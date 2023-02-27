import React, { FC, PropsWithChildren } from 'react';

import Header from './components/Header';
import Gradient from './components/Gradient';
import Footer from './components/Footer';

import styles from './index.module.scss';

const Layout: FC<PropsWithChildren<unknown>> = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <div className={styles.layout}>
      <Header />
      <Gradient />
      <div className={styles.content}>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
