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
          <p>For purchase information and other inquiries, please contact me at <a href="mailto:lindseymariefineart@gmail.com">lindseymariefineart@gmail.com</a></p>
          <p>Find me on Instagram <a href="https://instagram.com/paintinthemail" target="_blank" rel="noopener noreferrer">@paintinthemail</a></p>
        </div>
      </div>
    </div>
  )
}

export default About 