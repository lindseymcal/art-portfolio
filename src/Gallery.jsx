import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

// Import lead images
import landscapeLead from './assets/landscapes/lead_landscape.jpeg'
import studiesLead from './assets/portraits/lead_study.jpeg'
import abstractLead from './assets/abstract/lead_abstract.jpeg'

// Dynamically import all images from each folder
const landscapeImages = import.meta.glob('./assets/landscapes/*.jpeg', { eager: true })
const studyImages = import.meta.glob('./assets/portraits/*.jpeg', { eager: true })
const abstractImages = import.meta.glob('./assets/abstract/*.jpeg', { eager: true })

function Collection({ name }) {
  const [images, setImages] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    let imageSet
    let leadFile = ''
    switch (name.toLowerCase()) {
      case 'landscapes':
        imageSet = landscapeImages
        leadFile = 'lead_landscape.jpeg'
        break
      case 'studies':
        imageSet = studyImages
        leadFile = 'lead_study.jpeg'
        break
      case 'abstract':
        imageSet = abstractImages
        leadFile = 'lead_abstract.jpeg'
        break
      default:
        imageSet = {}
    }

    const processedImages = Object.entries(imageSet)
      .filter(([path]) => !path.includes(leadFile))
      .map(([path, module]) => ({
        src: module.default,
        title: path.split('/').pop().replace('.jpeg', '')
      }))

    setImages(processedImages)
  }, [name])

  return (
    <div className="collection">
      <div className="collection-header">
        <button 
          className="back-button"
          onClick={() => navigate('/gallery')}
        >
          ← Back to Gallery
        </button>
        <h2>{name} Collection</h2>
      </div>
      <div className="collection-grid">
        {images.length > 0 ? (
          images.map((image, index) => (
            <div key={index} className="artwork-item">
              <img 
                src={image.src} 
                alt={image.title}
                className="artwork-image"
                loading="lazy"
              />
              <h3>{image.title}</h3>
            </div>
          ))
        ) : (
          <p>No artwork available yet. Check back soon!</p>
        )}
      </div>
    </div>
  )
}

function Gallery() {
  const categories = [
    {
      name: 'Abstract',
      image: abstractLead,
      description: 'Experience contemporary abstract art'
    },
    {
      name: 'Landscapes',
      image: landscapeLead,
      description: 'Explore serene landscapes and natural scenes'
    },
    {
      name: 'Studies',
      image: studiesLead,
      description: 'Discover expressive character studies'
    }
  ]

  return (
    <div className="gallery-page">
      <header className="gallery-header">
        <h1>Gallery</h1>
      </header>
      
      <main className="gallery-main">
        <Routes>
          <Route path="/" element={
            <div className="gallery-categories">
              {categories.map((category) => (
                <Link 
                  key={category.name} 
                  to={category.name.toLowerCase()} 
                  className="category-card"
                >
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="category-image"
                  />
                  <h2>{category.name}</h2>
                </Link>
              ))}
            </div>
          } />
          <Route path="abstract" element={<Collection name="Abstract" />} />
          <Route path="landscapes" element={<Collection name="Landscapes" />} />
          <Route path="studies" element={<Collection name="Studies" />} />
        </Routes>
      </main>
    </div>
  )
}

export default Gallery 