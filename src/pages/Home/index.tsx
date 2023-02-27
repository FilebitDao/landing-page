import React, { FC } from 'react';
import { useBreakpoint } from 'use-breakpoint';
import classNames from 'classnames';

import Layout from 'Layout';
import { ReactComponent as GradientArrow } from 'assets/imgs/gradient-arrow.svg';
import { ReactComponent as MintIcon } from 'assets/imgs/mint.svg';
import { ReactComponent as BorrowIcon } from 'assets/imgs/borrow.svg';
import { ReactComponent as LeverageIcon } from 'assets/imgs/leverage.svg';
import { ReactComponent as StakeIcon } from 'assets/imgs/stake.svg';
import { ReactComponent as StakeAssetIcon } from 'assets/imgs/stake-asset.svg';

import Partners from './componnets/Partners';
import NewsLetter from './componnets/NewsLetter';
import styles from './index.module.scss';

const breakpoints = { mobile: 0, tablet: 768, desktop: 1024 };

const MARKETS = process.env.REACT_APP_APP_URL;

const Home: FC = () => {
  const { breakpoint } = useBreakpoint(breakpoints);

  return (
    <Layout>
      <div className={styles.home}>
        <h1 className={styles.title}>What can the procotol do?</h1>
        <div className={styles.stableCoinBorrow}>
          <div className={styles.stableCoin}>
            <div className={styles.container}>
              <MintIcon className={styles.svgIcon} width={386} height={349} />
              <h3 className={styles.partTitle}>Mint stablecoin</h3>
              <p className={styles.partDesc}>The NAI,a USD pegged stablecoin, is mint out with the over collateral algorithm.</p>
              <div className={styles.gradientLinkWrapper}>
                <span className={styles.gradientLink}>
                  <a className={styles.link} href={MARKETS}>GO TO MINT</a>
                  <GradientArrow width={6} height={11} />
                </span>
              </div>
            </div>
          </div>
          <div className={styles.borrow}>
            <div className={styles.container}>
              <BorrowIcon className={styles.svgIcon} width={381} height={306} />
              <h3 className={styles.partTitle}>Lend assets</h3>
              <p className={styles.partDesc}>Users could lend their assets with the protocol to earn interests.</p>
              <div className={styles.gradientLinkWrapper}>
                <span className={styles.gradientLink}>
                  <a className={styles.link} href={MARKETS}>GO TO BORROW</a>
                  <GradientArrow width={6} height={11} />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.investments}>
          <LeverageIcon className={styles.svgIcon} width={540} height={454} />
          <div className={styles.content}>
            <h3 className={styles.partTitle}>Leverage Investment</h3>
            <p className={styles.partDesc}>Users could repeat borrowing NAI to make long the collaterals.</p>
            <div className={styles.gradientLinkWrapper}>
              <span className={styles.gradientLink}>
                <a className={styles.link} href={MARKETS}>GO TO DEPOSIT</a>
                <GradientArrow width={6} height={11} />
              </span>
            </div>
          </div>
        </div>
        <div className={styles.stake}>
          {
            breakpoint !== 'desktop' && <StakeIcon className={styles.svgIcon} width={600} height={443} />
          }
          <div className={styles.content}>
            <h3 className={styles.partTitle}>Mine FIL</h3>
            <p className={styles.partDesc}>Users could stake their FIL to the selected miners to gain partial block rewards.</p>
          </div>
          {
            breakpoint === 'desktop' && <StakeIcon className={styles.svgIcon} width={600} height={443} />
          }
        </div>
        <div className={styles.stakeToMining}>
          <StakeAssetIcon className={styles.svgIcon} width={469} height={478} />
          <div className={styles.content}>
            <h3 className={styles.partTitle}>Secure Investment and Revenue</h3>
            <p className={styles.partDesc}>A smart contact is used to stake and distribute FIL which eliminates miner violation.</p>
          </div>
        </div>
        <Partners />
        <NewsLetter />
      </div>
    </Layout>
  );
};

export default Home;
