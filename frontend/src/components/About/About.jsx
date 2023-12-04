import './About.css'
import gitHub from '../../../public/images/gitHub.svg'
import linkedin from '../../../public/images/linkedin.svg'

const About = () => {
  return (
    <div className='cardAboutContainer'>
      <div className='cardAbout'>
      <a href='https://github.com/Freetzen' target='_blank'><img src={gitHub} alt='gitHub' className='gitHub'/></a>
      <a href='https://www.linkedin.com/in/federico-ruiz-gei/' target='_blank'><img src={linkedin} alt='gitHub' className='linkedin'/></a>
      </div>
    </div>
  )
}

export default About