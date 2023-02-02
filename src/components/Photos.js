import { photos } from '../data'
import Title from './Title'

const Photos = () => {
  return (
    <section className="section photos" id="photos">
      <Title title="photo" subTitle="gallery" />

      <div className="section-center featured-center">
        {photos.map((photo) => {
          const { id, img, title } = photo
          return (
            <article className="photo-card" key={id}>
              <div className="photo-img-container">
                <img src={img} className="photo-img" alt="" />
              </div>
              <div className="photo-info">
                <h4>{title}</h4>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
export default Photos
