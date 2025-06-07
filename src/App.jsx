import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import Home from './Home'
import Gallery from './Gallery'
import About from './About'
import './App.css'

function App() {
  return (
    <Router>
      <nav className="navbar">
        <ul>
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/gallery">Gallery</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery/*" element={<Gallery />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  )
}

export default App
