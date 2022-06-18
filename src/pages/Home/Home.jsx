import React from "react"
import styles from "./Home.module.css"

function Homepage() {
  return (
    <div className={styles.home__page}>
      <h1>Cover your page.</h1>
      <p>
        Cover is a one-page template for building simple and beautiful home
        pages. Download, edit the text, and add your own fullscreen background
        photo to make it your own.
      </p>
      <button>Learn more</button>
    </div>
  )
}

export { Homepage }
