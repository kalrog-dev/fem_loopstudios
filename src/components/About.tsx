import interactive from '../assets/mobile/image-interactive.jpg'
import './About.css'

export default function About() {
  return (
    <section id='about'>
      <img className='about-image' src={interactive} alt='VR technology' />
      <div className='about-content'>
        <h2 className='about-title'>The leader in interactive VR</h2>
        <p className='about-body'>Founded in 2011, Loopstudios has been producing 
          world-class virtual reality projects for some of 
          the best companies around the globe. Our award-winning 
          creations have transformed businesses through digital 
          experiences that bind to their brand.</p>
      </div>
    </section>
  )
}