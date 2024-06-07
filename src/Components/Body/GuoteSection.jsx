import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import './Body.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const GuoteSection = () => {
  return (
    <div className='Body main'>
      <div className='section quote'>  
      <p className='quote-text'><FontAwesomeIcon icon={faQuoteLeft} className='icon'></FontAwesomeIcon>  Food is everything we are. It is an extension of nationalist feeling, ethnic feeling, 
      your personal history, your province, your region, tribe and even your grandma. It is unseparable from those from the get-go.<FontAwesomeIcon icon={faQuoteRight} className='icon'></FontAwesomeIcon></p>
      <p className='quote-author'><i>~Prince Dillane~</i></p>
      </div>
    </div>
  )
}

export default GuoteSection
