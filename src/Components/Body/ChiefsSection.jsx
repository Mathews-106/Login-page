import ChiefCard from "../Body/ChiefCard.jsx"
import './Body.css'
import kimtai from '../../assets/chefs/Kimtai.jpg'
import madhe from '../../assets/chefs/madhe.jpg'
import mutua from '../../assets/chefs/mutua.jpg'
import nyanchama from '../../assets/chefs/nyanchama.jpg'
import onyiro from '../../assets/chefs/Onyiro.jpg'
import stunner from '../../assets/chefs/stunner.jpg'


const ChiefsSection = () => {

  const chiefs=[
    {
      name: "Ian Orlando",
      src: kimtai,
      recipesCount: "33",
      cuisine: "Kiamaiko",
      alt: "Chef Kimtai",
    },
    {
      name: "Fatuma Muchabui",
      src: madhe,
      recipesCount: "10",
      cuisine: "Bombolulu",
      alt: "Chef Madhe",
    },
    {
      name: "Fatso Dipa",
      src: mutua,
      recupesCount: "25",
      cuisine: "Saika",
      alt: "Chef Mutua",
    },
    {
      name: "Benardus Nyanchama",
      src: nyanchama,
      recipesCount: "67",
      cuisine: "Kinoo",
      alt: "Chef Nyanchama",
    },
    {
      name: "Pilgrim Onyiro",
      src: onyiro,
      recipesCount: "35",
      cuisine: "Kijunje",
      alt: "Chef Onyiro",
    },
    {
      name: "Wheel 'O' Matilda",
      src: stunner,
      recipesCount: '44',
      cuisine: "Kibera",
      alt: "Chef Stunner"
    }
  ]
  return (
    <div className="Body main">
      <div className="section chiefs">
        <h1 className="title">Our top chefs</h1>

        <div className="chief-cards-container">
          {chiefs.map(chief => <ChiefCard key={chief} chief={chief}/>)}
        </div>
      </div>
    </div>
  )
}

export default ChiefsSection
