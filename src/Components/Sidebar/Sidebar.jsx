import PropTypes from "prop-types"
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faBowlFood, faCog, faHome, faLeaf, faPeopleGroup } from '@fortawesome/free-solid-svg-icons'




function Sidebar({close}) { 
  return (
    <>
    <div className='container'>
    <div className='sidebar' onClick={close}>
      <ul className='sidebar-links'>
        <li><a href="#!"><FontAwesomeIcon icon={faHome} className='sidebar-icon'/><span>Home</span></a></li>
        <li><a href="#!"><FontAwesomeIcon icon={faBook} className='sidebar-icon'/><span>News</span></a></li>
        <li><a href="#!"><FontAwesomeIcon icon={faLeaf} className='sidebar-icon'/><span>Culture</span></a></li>
        <li><a href="#!"><FontAwesomeIcon icon={faPeopleGroup} className='sidebar-icon'/><span>Lifestyle</span></a></li>
        <li><a href="#!"><FontAwesomeIcon icon={faBowlFood} className='sidebar-icon'/><span>Recipes</span></a></li>
        <li><a href="#!"><FontAwesomeIcon icon={faCog} className='sidebar-icon'/><span>Settings</span></a></li>
      </ul>
    </div>
    
    </div>
    
    </>
  )
}

Sidebar.propTypes={
  close: PropTypes.func.isRequired
}

export default Sidebar
