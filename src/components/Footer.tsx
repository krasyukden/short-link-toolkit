import React from 'react'
import styles from './footer.module.css'
import Button from '@mui/material/Button';
import logo from '../assets/logo.svg';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';



const Footer = () => {
  return (
    <footer>
      <div className={styles.footerImg}>
        <h3 className={styles.boost}>Boost your links today</h3>
        <div className={styles.buttonStart}><Button variant="contained" >Get Started</Button>
        </div>
      </div>
      <address>
        <div className={styles.logoFooter}>
          <a href='#'><img src={logo} alt="logo" /></a>
        </div>

        <div className={styles.features} >
          <strong>Features</strong>
          <a href="#">Link Shortening</a>
          <a href="#">Branded Links</a>
          <a href="#">Analytics</a>
        </div>

        <div className={styles.features} >
          <strong>Resources</strong>
          <a href="#">Blog</a>
          <a href="#">Developers</a>
          <a href="#">Support</a>
        </div>

        <div className={styles.features} >
          <strong>Company</strong>
          <a href="#">About</a>
          <a href="#">Our Team</a>
          <a href="#">Careers</a>
          <a href="#">Contact</a>
        </div>

        <section className={styles.social}>
          <a className="menu-link-text" href="#">
            <FacebookIcon />
          </a>
          <a className="menu-link-text" href="#">
            <TwitterIcon />
          </a>
          <a className="menu-link-text" href="#">
            <PinterestIcon />
          </a>
          <a className="menu-link-text" href="#">
            <InstagramIcon />
          </a>
        </section>
      </address>
    </footer>
  )
}

export default Footer