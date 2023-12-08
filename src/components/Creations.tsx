import './Creations.css'
import creationImages from '../creation-images'

export default function Creations() {
  return (
    <section id='creations'>
      <h2 className='creations-title'>Our creations</h2>
      <a className='creations-btn btn' href="#">See all</a>
      <div className="creations-grid">
        {creationImages.map((image, index) => {
          return (
            <figure className='creations-grid-item' key={index}>
              <img src={image.srcSm} alt={image.desc} />
              <figcaption>{image.desc.toUpperCase()}</figcaption>
            </figure>
          )
        })}
      </div>
    </section>
  )
}