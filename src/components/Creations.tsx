import useMediaQuery from "../hooks/useMediaQuery"
import creationImages from '../creation-images'
import './Creations.css'

export default function Creations() {
  const isLargeScreen: boolean = useMediaQuery('(min-width: 768px)')

  return (
    <section id='creations'>
      <h2 className='creations-title'>Our creations</h2>
      <a className='creations-btn btn' href="#creations">See all</a>
      <div className="creations-grid">
        {creationImages.map((image, index) => {
          return (
            <figure className='creations-grid-item' key={index}>
              <img src={isLargeScreen ? image.srcLg : image.srcSm} alt={image.desc} />
              <div className="gradient"></div>
              <figcaption>{image.desc.toUpperCase()}</figcaption>
            </figure>
          )
        })}
      </div>
    </section>
  )
}