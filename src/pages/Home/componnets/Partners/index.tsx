import React, { FC, useMemo } from 'react';
import { useBreakpoint } from 'use-breakpoint';

import { ReactComponent as ProtolLabs } from 'assets/imgs/protol.svg';
import { ReactComponent as BinanceLabs } from 'assets/imgs/binance-labs.svg';
import { ReactComponent as BIBExchange } from 'assets/imgs/bib.svg';
import { ReactComponent as IPFS } from 'assets/imgs/ipfs.svg';

import styles from './index.module.scss';

const breakpoints = { desktop: 1024 };

const Partners: FC = () => {
  const { breakpoint } = useBreakpoint(breakpoints);
  const size = useMemo(() => {
    return breakpoint !== 'desktop' ? {
      protolLabs: {
        width: 36,
        height: 35
      },
      binanceLabs: {
        width: 142,
        height: 37
      },
      bibExchange: {
        width: 78,
        height: 32
      },
      ipfs: {
        width: 93,
        height: 40
      }
    } : {
      protolLabs: {
        width: 56,
        height: 55
      },
      binanceLabs: {
        width: 202,
        height: 53
      },
      bibExchange: {
        width: 128,
        height: 52
      },
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
            <ProtolLabs {...size.protolLabs} />
          </div>
          <p className={styles.partnerName}>Protocol Labs</p>
        </div>
        <div className={styles.partner}>
          <div className={styles.partnerLogo}>
            <BinanceLabs {...size.binanceLabs} />
          </div>
          <p className={styles.partnerName}>Binance Labs</p>
        </div>
        <div className={styles.partner}>
          <div className={styles.partnerLogo}>
            <BIBExchange {...size.bibExchange} />
          </div>
          <p className={styles.partnerName}>BIB Exchange</p>
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
