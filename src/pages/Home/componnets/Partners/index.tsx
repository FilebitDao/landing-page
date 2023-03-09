import React, { FC, useMemo } from 'react';
import { useBreakpoint } from 'use-breakpoint';

import { ReactComponent as IPFS } from 'assets/imgs/ipfs.svg';

import styles from './index.module.scss';

const breakpoints = { desktop: 1024 };

const Partners: FC = () => {
  const { breakpoint } = useBreakpoint(breakpoints);
  const size = useMemo(() => {
    return breakpoint !== 'desktop' ? {
      ipfs: {
        width: 93,
        height: 40
      }
    } : {
      ipfs: {
        width: 153,
        height: 66
      }
    };
  }, [breakpoint]);

  return (
    <div className={styles.partners}>
      <h3 className={styles.title}>Partners or medias metion us</h3>
      <div className={styles.partnerContainer}>
        <div className={styles.partner}>
          <div className={styles.partnerLogo}>
            <IPFS {...size.ipfs} />
          </div>
          <p className={styles.partnerName}>IPFS</p>
        </div>
        <div className={styles.partner}>
          <div className={styles.partnerLogo}>
            <IPFS {...size.ipfs} />
          </div>
          <p className={styles.partnerName}>IPFS</p>
        </div>
        <div className={styles.partner}>
          <div className={styles.partnerLogo}>
            <IPFS {...size.ipfs} />
          </div>
          <p className={styles.partnerName}>IPFS</p>
        </div>
        <div className={styles.partner}>
          <div className={styles.partnerLogo}>
            <IPFS {...size.ipfs} />
          </div>
          <p className={styles.partnerName}>IPFS</p>
        </div>
      </div>
    </div>
  );
};

export default Partners;
