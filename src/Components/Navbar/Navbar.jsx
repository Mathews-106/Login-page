import Sidebar from '../Sidebar/Sidebar.jsx'
import { faAngleDown, faSearch } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNavicon, faX } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

function Navbar() {

  const [active, setActive] = useState(false)

  function handleSidebar(){
    setActive(!active)
  }

  function closeSidebar(){
    setActive(false)
  }
  return (
    <>
    <div>
      <div className={`Navbar ${active ? 'active': ''}`}>
        <a href="#" className='Logo-link'><h1>Car<span>ty.</span></h1></a>

       <div className='Links'>
        <div className='NavLinks'>
        <a href="#">News <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon></a>
        <ul className='Dropdown'>
          <li><a href="#">Imports</a></li>
          <br />
          <li><a href="#">Exports</a></li>
        </ul>
       </div>

       <div className='NavLinks'>
        <a href="#" className='active'>Culture <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon></a>
        <ul className='Dropdown'>
          <li><a href="#">Imports</a></li>
          <br />
          <li><a href="#">Exports</a></li>
        </ul>
       </div>

       <div className='NavLinks'>
        <a href="#">Recipes <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon></a>
        <ul className='Dropdown'>
          <li><a href="#">Imports</a></li>
          <br />
          <li><a href="#">Exports</a></li>
        </ul>
       </div>

       <div className='NavLinks'>
        <a href="#">Lifestyle <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon></a>
        <ul className='Dropdown'>
          <li><a href="#">Imports</a></li>
          <br />
          <li><a href="#">Exports</a></li>
          <br />
          <li><a href="#">Exports</a></li>
        </ul>
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
