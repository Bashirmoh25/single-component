import React from 'react'
import SignUpBtn from '../SignUpBtn/SignUpBtn'
import styles from './Subscription.module.css'
import {useMediaPredicate} from 'react-media-hook';
const Subscription = () => {
  const isLessthan375=useMediaPredicate("(max-width:375px)");
  return (
    
    <section className={styles.section}>
        <h3>Monthly Subscription</h3>
        <div className={styles.inlineDiv}>
            <span className={styles.prize}>&#x24;29 </span><span>per month</span>
        </div>
        <p>Full access for less  than &#x24;1 a day</p>
        <SignUpBtn></SignUpBtn>
    </section>
  )
}

export default Subscription