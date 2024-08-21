import React from 'react'
import styles from './WhyUs.module.css'

const WhyUs = () => {
  return (
    <div className={styles.whyus}>
        <h3>Why Us</h3>
        <ul>
            <li>Tutorials by industry experts</li>
            <li>Peer &amp;expert code review</li>
            <li>Coding exercises</li>
            <li>Access to our GitHub repos</li>
            <li>Community forum</li>
            <li>Flashcard decks</li>
            <li>New videos every week</li>
        </ul>
    </div>
  )
}

export default WhyUs