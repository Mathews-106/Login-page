import Sidebar from '../Sidebar/Sidebar.jsx'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNavicon, faX } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'


function Navbar() {
  const [active, setActive] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  function handleSidebar(){
    setActive(!active)
  }

  function closeSidebar(){
    setActive(false)
  }

  // Function to check if current path matches the link
  function isActiveLink(path) {
    return location.pathname === path
  }

  // Navigation handlers
  function handleHomeClick(e) {
    e.preventDefault()
    navigate('/')
  }

  function handleNewsClick(e) {
    e.preventDefault()
    navigate('/news')
  }

  function handleCultureClick(e) {
    e.preventDefault()
    navigate('/culture')
  }

  function handleRecipesClick(e) {
    e.preventDefault()
    navigate('/recipes')
  }

  function handleLifestyleClick(e) {
    e.preventDefault()
    navigate('/lifestyle')
  }

  return (
    <>
    <div>
      <div className={`Navbar ${active ? 'active': ''}`}>
        <a href="/" onClick={handleHomeClick} className='Logo-link'>
          <h1>Car<span>ty.</span></h1>
        </a>

       <div className='Links'>
        <div className='NavLinks'>
          <a 
            href="/" 
            onClick={handleHomeClick}
            className={isActiveLink('/') ? 'active' : ''}
          >
            Home
          </a>
        </div>

        <div className='NavLinks'>
          <a 
            href="/news" 
            onClick={handleNewsClick}
            className={isActiveLink('/news') ? 'active' : ''}
          >
            News
          </a>
        </div>

        <div className='NavLinks'>
          <a 
            href="/culture" 
            onClick={handleCultureClick}
            className={isActiveLink('/culture') ? 'active' : ''}
          >
            Culture
          </a>
        </div>

        <div className='NavLinks'>
          <a 
            href="/recipes" 
            onClick={handleRecipesClick}
            className={isActiveLink('/recipes') ? 'active' : ''}
          >
            Recipes
          </a>
        </div>

        <div className='NavLinks'>
          <a 
            href="/lifestyle" 
            onClick={handleLifestyleClick}
            className={isActiveLink('/lifestyle') ? 'active' : ''}
          >
            Lifestyle
          </a>
        </div>
       </div>

       <div>
        <input type="text" placeholder='Search' className='NavInput'/>
        <FontAwesomeIcon icon={faSearch} className='InputIcon'></FontAwesomeIcon>
        <div className='Sidebar-btn'>
        {active ? (
            <FontAwesomeIcon icon={faX} className='navicon' onClick={handleSidebar} />
          ) : (
            <FontAwesomeIcon icon={faNavicon} className='navicon' onClick={handleSidebar} />
          )}
        </div>
        </div>
      </div>
    </div>
    <div>
      {active && <Sidebar close={closeSidebar} />  }
    </div>
    </>
  )
}

export default Navbar