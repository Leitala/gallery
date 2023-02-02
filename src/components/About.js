import aboutImg from '../images/about.jpeg'
import Title from './Title'
const About = () => {
  return (
    <section className="section" id="about">
      <Title title="about" subTitle="me"></Title>
      <div className="section-center about-center">
        <div className="about-img">
          <img src={aboutImg} className="about-photo" alt="awesome beach" />
        </div>
        <article className="about-info">
          <p>Hello and welcome to Leitala's Gallary!</p>
          <p>
            I am a photography enthusiast with a passion for capturing life's
            precious moments through the lens of a camera.
          </p>
          <p>
            My goal is to capture a breathtaking landscape, freeze a moment of
            pure joy, or immortalize a loved one's smile.
          </p>
          <p>
            You will find a collection of my favourite images on this platform,
            from portraits to landscapes, street photography to nature, and
            everything in between. I hope you find my work captivating and that
            it will inspire you to start exploring the world through your lens.
          </p>
          <p>Thank you for stopping by, and I hope you enjoy your visit!</p>
          <a href="#about" className="btn">
            read more
          </a>
        </article>
      </div>
    </section>
  )
}
export default About
