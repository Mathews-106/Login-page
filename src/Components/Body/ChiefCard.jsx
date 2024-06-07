import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './Body.css'
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"

const ChiefCard = ({chief}) => {
  return (
    <div className="chief-card">
      <img src={chief.src} alt="" />

      <div className="chief-card-info">
        <h3 className="chief-card-name">{chief.name}</h3>
        <p className="chief-card-recipe">Recipes: <b>{chief.recipesCount}</b></p>
        <p className="chief-card-cuisine">Cuisine: <b>{chief.cuisine}</b></p>
        <p className="chief-icons">
          <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
        </p>
      </div>
    </div>
  )
}

ChiefCard.propTypes={
  chief: PropTypes.object.isRequired,
}

export default ChiefCard
