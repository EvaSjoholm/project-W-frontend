import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer>
      <p>Created by Eva 2023</p>
      <Link
        to="https://www.workoutsverige.se/"
        class="link"
        target="_blank"
        aria-label="Wörkout website"
        aria-hidden="true" />
    </footer>
  )
}