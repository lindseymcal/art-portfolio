import lindseyImage from './assets/lindsey.jpeg';

function About() {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1>About</h1>
      </header>
      
      <main className="about-main">
        <div className="about-content">
          <div className="about-photo">
            <img
              src={lindseyImage}
              alt="Lindsey Marie"
              className="about-image"
            />
          </div>
          <div className="about-text">
            <h2>About</h2>
            <p>I am a watercolor artist based in San Francisco, painting local landscapes and scenes from world travel. I am interested in capturing ephemeral moments in nature and emotion.</p>
            
            <h2>Contact</h2>
            <p>For purchase information and other inquiries, please contact me at <a href="mailto:lindseymariefineart@gmail.com">lindseymariefineart@gmail.com</a>.</p>
            <p>Find me on <a href="https://www.instagram.com/paintinthemail" target="_blank" rel="noopener noreferrer">Instagram</a></p>
          </div>
        </div>
      </main>
      
      <footer className="about-footer">
        <p>© {new Date().getFullYear()} Lindsey Marie. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default About
