import React, {useState, useEffect} from 'react'
import './Nav.css'

function Nav() {
  const [show, handleShow] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 100 ? handleShow(true) : handleShow(false)

      return () => {
        window.removeEventListener('scroll')
      }
    })
  }, [])

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <img
        src='https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png'
        alt='netflix logo'
        className='nav__logo'
      />
      <img
        src='https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png'
        alt='avatar'
        className='nav__avatar'
      />
    </div>
  )
}

export default Nav
