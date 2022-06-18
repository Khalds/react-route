import React from "react"
import MyComponent from "../Map"

import styles from "./Contact.module.css"

function Contact() {
  return (
    <div className={styles.contact__page}>
      <div>
        Наш Адрес: ул. Геннадия Трошева, 7, 2 этаж, 6 кабинет, Грозный,
        Чеченская Респ., 364024
      </div>
      <MyComponent />
    </div>
  )
}

export { Contact }
