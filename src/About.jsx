import lindseyImage from './assets/lindsey.jpeg';

function About() {
  return (
    <div className="about">
      // <header>
        <h1>About Lindsey Marie</h1>
      // </header>

      <div className="container">

        <div className="column">
          <img
            src={lindseyImage}
            alt="Lindsey Marie"
            className="about-image"
          />
        </div>

          <div className="column">
            <h2>About</h2>
            <p>Lindsey is a watercolor artist based in San Francisco, painting local landscapes and scenes from world travel. She captures ephemeral moments in nature and emotion.</p>
            <h2>Contact</h2>
            <p>For inquiries about artwork or commissions, please contact via <a href="mailto:lindseymarieart@gmail.com">lindseymarieart@gmail.com</a>.</p>
            <p>Instagram: <a href="https://www.instagram.com/lindseymarieart" target="_blank" rel="noopener noreferrer">@paintinthemail</a></p>
          </div>



        <div className="about-section">
          <p>© {new Date().getFullYear()} Lindsey Marie. All rights reserved.</p>
        </div>

      </div>
    </div>
  )
}

export default About
