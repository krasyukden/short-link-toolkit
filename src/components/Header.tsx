import React from 'react'
import styles from './header.module.css'
import logo from '../assets/logo.svg'
/* import '../assets/fonts/Poppins/Poppins-MediumItalic.ttf' */
import illustrationWorking from '../assets/illustration-working.svg'
import Button from '@mui/material/Button';

const Header = () => {
  return (
    <div className={styles.headWrapper}>

      <header className={styles.upper}>
        <div className={styles.logo}>
          <a href='#'><img src={logo} alt="logo" /></a>
        </div>
        <nav className={styles.upperMenu}>
          <a className="menu-link-text" href="#">
            Features
          </a>
          <a className="menu-link-text" href="#">
            Pricing
          </a>
          <a className="menu-link-text" href="#">
            Resources
          </a>
        </nav>
      </header>
      <div className={styles.flexHeader}>
        <h1>More than just shorter links</h1>
        <div className={styles.brand}>Build your brand’s recognition and get detailed insights
          on how your links are performing.</div>
        
      <div className={styles.buttonStart}>
      <Button variant="contained" >Get Started</Button>
      </div>
      <div>
          <img className={styles.illustrationWorking} src={illustrationWorking} alt="iillustration-working" />
        </div>
      </div>

    </div>
  )
}

export default Header