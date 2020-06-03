import React from 'react'
import useDarkMode from 'use-dark-mode'
// import styled from '@emotion/styled'
// import { FiMoon, FiSun } from 'react-icons/fi'
// import Button from './Button'

const ThemeToggler = () => {
  const darkMode = useDarkMode();

  console.log(darkMode);

  return (
    <button id="dark-mode-toggler" aria-label={ darkMode.value ? 'Switch to light mode' : 'Switch to dark mode' } onClick={darkMode.toggle}>
        {darkMode.value ? (`Switch to Light Mode`) : (`Switch to Dark Mode`)}
        {/* {children} */}
    </button>
  )
}

export default ThemeToggler