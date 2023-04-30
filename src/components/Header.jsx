import React from 'react'

const Header = () => {
  const handleClick = (e)=>{
    let themeName = e.target.getAttribute('theme-name')
    let body = document.querySelector('body')
    let toggleButton = document.getElementById('toggleButton')
    // Remove any previous theme the body had before
    body.className = ''  
    toggleButton.setAttribute('bs-target', themeName)
    body.className = themeName

    const themeCell = document.querySelectorAll('.theme-cell');
    themeCell.forEach((item)=>{
      if (item.classList.contains('active')) {
        item.classList.remove('active')
      }
    })
    e.target.classList.add('active')
  
  }

  return (
    <header className='flex calculator-header'>
      <h3 className='logo'>calc</h3>
      <div className='toggle-box flex'>
        <h6 className='uppercase toggle__name'>theme</h6>
        <div className='slider-container'>
          <div className='toggle-box__theme-name flex'>
            <p>1</p>
            <p>2</p>
            <p>3</p>
          </div>
          <div className='pos-rel toggle-box__slider  flex'>
            <div onClick={handleClick} theme-name='theme-1' className='theme-cell'></div>
            <div  onClick={handleClick} theme-name='theme-2' className='theme-cell'></div>
            <div onClick={handleClick}  theme-name='theme-3' className='theme-cell'></div>
            <div id='toggleButton' bs-target = 'theme-1' className='toggler go-to-right'>
            </div>
          </div>
        </div>


      </div>
    </header>
  )
}

export default Header