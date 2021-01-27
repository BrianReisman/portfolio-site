import React from 'react'
import StyledThemeToggle from './StyledThemeToggle';

const ThemeToggle = () => {

  const clickHandler = (e) =>{
    alert('Darkmode coming to a site near you!')
  }

  return (
    <StyledThemeToggle>
      <label className='toggle' htmlFor='themeToggle'>
        <input type='checkbox' name='' id='themeToggle' onClick={clickHandler}/>
        <span className='slider'></span>
      </label>
    </StyledThemeToggle>
  )
}

export default ThemeToggle;