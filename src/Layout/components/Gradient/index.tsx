import React, { FC, useEffect } from 'react';

import GranditGL from './gradient';
import styles from './index.module.scss';

const Grandit: FC = () => {
  useEffect(() => {
    const gradient: any = new GranditGL();
    gradient.initGradient('#gradient-canvas');
  }, []);

  return (
    <div className={styles.grandit}>
      <canvas className={styles.canvas} id="gradient-canvas" data-transition-in />
      <div className={styles.mask}>
        <div className={styles.about}>
          <h1 className={styles.title}>THE COMPREHENSIVE LQUIDITY PROTOCOL FOR THE FILECOIN.</h1>
          <p className={styles.desc}>The Narwhal offers stablecoin,lending markets and FIL staken.</p>
        </div>
      </div>
    </div>
  );
};

export default Grandit;