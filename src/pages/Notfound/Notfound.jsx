import React from "react"
import styles from "./Notfound.module.css"

import { Link } from "react-router-dom"

function Notfound() {
  return (
    <div className={styles.not__found}>
      <p>This page doesn't exist.</p>
      <p>
        Go <Link to="/">home</Link>
      </p>
    </div>
  )
}

export { Notfound }
