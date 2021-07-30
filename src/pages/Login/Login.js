import React from 'react'
import styles from './Login.module.scss'
import {useMoralis} from "react-moralis";

const Login = () => {
  const { authenticate, isAuthenticated } = useMoralis();
  const loginHandler = () => {
    if(!isAuthenticated) {
      authenticate({ provider: "walletconnect" })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        })
    }
  }
  return (
    <div className={styles.loginWrapper}>
      <div className={styles.mainTitle}>
        Tracker
      </div>
      <div className={styles.mainContent}>
        <div className={styles.textWrapper}>
          <span className={styles.hugeTitle}>Gallery</span>
          <span className={styles.hugeTitle}>of NFT works</span>
          <span className={styles.smallTitle}>Find tokens to your liking</span>
        </div>
        <div className={styles.buttonWrapper} onClick={loginHandler}>
          <div>
            <div className={styles.buttonLogo} />
            <span className={styles.buttonLabelBold}>Wallet connect</span>
            <span className={styles.buttonLabel}>Choose your preferred wallet</span>
          </div>
        </div>
        <div className={styles.footer}>
          <span>We do not own your private keys and cannot access your funds without your confirmation.</span>
        </div>
      </div>
    </div>
  )
}

export default Login;