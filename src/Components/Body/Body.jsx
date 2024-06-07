import './Body.css'
import CustomImage from './CustomImage.jsx'
import pork from '../../assets/Food/pork.jpg'
import mrenda from '../../assets/Food/mrenda.jpg'
import mshikaki from '../../../src/assets/Food/mshikaki.jpg'
import skova from '../../../src/assets/Food/skova.jpg'
import onburger from '../../../src/assets/Food/onburger.jpg'
import garlic from '../../../src/assets/Food/garlic.jpg'
import salad from '../../../src/assets/Food/salad.jpg'
import unsplash from '../../../src/assets/Food/unsplash.jpg'
import ndimu from '../../../src/assets/Food/ndimu.jpg'

function Body() {

  const images=[
    {
      src: pork,
      alt: 'pork image',
    },
    {
      src: skova,
      alt: 'skova image',
    },
    {
      src: mrenda,
      alt: 'mrenda image',
    },
    {
      src: mshikaki,
      alt: 'mshikaki image',
    },
    {
      src: salad,
      alt: 'pork image',
    },
    {
      src: onburger,
      alt: 'onburger image',
    },
    {
      src: ndimu,
      alt: 'ndimu image',
    },
    {
      src: garlic,
      alt: 'garlic image',
    },
    {
      src: unsplash,
      alt: 'unsplash image',
    },

  ]

  function handleButton(){
    console.log("Button Clicked");
  }
  return (
    <>
    <div className='Body main'>
      <div className='Section hero'>
        <div className='Col typography'>
            <h1 className='Title'>What are we<br/> About</h1>
            <p className='Info'>At Carty, we are committed to delivering a vibrant and extraordinary culinary experience at every occasion. Our dedication lies in offering a diverse range of options without constraints, while also surpassing your expectations. I would love the chance to earn your trust and transform your event catering into a soul-nourishing journey.</p>
            <button className='Button' onClick={handleButton}>Explore Now</button>
        </div>
        <div className='Col gallery'>
          {images.map((image, index) => (
            <CustomImage key={index} imgSrc={image.src} alt={image.alt}/>
          ))}
            
        </div>
      </div>
    </div>
    </>
  )
}

export default Body
