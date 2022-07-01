import React from 'react'
import styles from './mainComponent.module.css'
import brandRrecognition from '../assets/icon-brand-recognition.svg'
import records from '../assets/icon-detailed-records.svg'
import customizable from '../assets/icon-fully-customizable.svg'
import Avatar from '@mui/material/Avatar';

const MainComponent = () => {
  return (
    <main>
      <section>
        <div className={styles.backgroundColorUp}></div>
        <h2 className={styles.advanced}>Advanced Statistics</h2>
        <div className={styles.advancedText}>
          Track how your links are performing across the web with our
          advanced statistics dashboard.
        </div>

        <div className={styles.centerBox}>
          <div className={styles.boxLeft}>
            <div /* className={styles.brandRrecognition} */>
              <div className={styles.imgBox}>
                <img src={brandRrecognition} alt="icon-brand-recognition"
                  className="icon-brand" />
              </div>

              <h3>Brand Recognition</h3>
              <div>Boost your brand recognition with each click. Generic links don’t
                mean a thing. Branded links help instil confidence in your content.
              </div>
            </div>
          </div>


          <div className={styles.boxCenter}>
            <div className={styles.imgBox}>
              
                <img src={records} alt="icon-detailed-records"
                  className="icon-brand" />
              </div>
              <h3>Detailed Records</h3>
              <div>Gain insights into who is clicking your links. Knowing when and where
                people engage with your content helps inform better decisions.
              </div>

            
          </div>



          <div className={styles.boxRight}>
            <div className={styles.imgBox}>
              <img src={customizable} alt="icon-fully-customizable"
                className="icon-brand" />
            </div>
            <h3>Fully Customizable</h3>
            <div>Improve brand awareness and content discoverability through customizable
              links, supercharging audience engagement.
            </div>
          </div>

        </div>
      </section>
    </main >
  )
}

export default MainComponent