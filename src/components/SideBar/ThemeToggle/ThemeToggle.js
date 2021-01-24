import React from 'react'
import StyledThemeToggle from './StyledThemeToggle';

const ThemeToggle = () => {
  return (
    <StyledThemeToggle>
      <label className='toggle' htmlFor='themeToggle'>
        <input type='checkbox' name='' id='themeToggle'/>
        <span className='slider'></span>
      </label>
    </StyledThemeToggle>
  )
}

export default ThemeToggle;