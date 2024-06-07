import balls from '../../assets/Food/skova.jpg'
import './Body.css'

const Skills = () => {
    const lists =[
        'Learn new recepes',
        "Experiment with food",
        "Write your own recepies",
        "Know nutrition Facts",
        "Get cooking tips",
        "Get Ranked"
    ]

  return (
    <div className='Body main'>
    <div className='Section improve-skills'>

        <div className='Col img'>
             <img src={balls} alt="" className='balls'/>     
      </div>        
      <div className='Col typography'>
          <h1 className='Title'>Improve your culinary <br /> skills</h1>
          {lists.map((item, index)=>(
            <p className='skill-item' key={index}> {item}</p>
          ))}
          <button className='Button'>SignUp now</button>
      </div>
      
    </div>
    </div>
  )
}
 
export default Skills
