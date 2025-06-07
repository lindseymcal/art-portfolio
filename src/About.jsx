import lindseyImage from './assets/lindsey.jpeg';

function About() {
  return (
    <div className="about">
      <h1>About Lindsey Marie</h1>
      <div className="about-content">
        <img 
          src={lindseyImage} 
          alt="Lindsey Marie" 
          className="about-image"
        />
        <div className="about-text">
          <h2>About</h2>
          <p>I am a watercolor artist based in San Francisco, painting local landscapes and scenes from world travel. I am interested in capturing ephemeral moments in nature and emotion.</p>
          <h2>Contact</h2>
          <p>For inquiries about artwork, commissions, or collaborations, please reach out to me at <a href="mailto:lindseymarieart@gmail.com">lindseymarieart@gmail.com</a>.</p>
          <p>Follow me on <a href="https://www.instagram.com/lindseymarieart" target="_blank" rel="noopener noreferrer">Instagram</a> for updates on my latest work and exhibitions.</p>
        </div>
      </div>

      <div className="about-section">
        <p>© {new Date().getFullYear()} Lindsey Marie. All rights reserved.</p>
      </div>
    </div>
  )
}

export default About 