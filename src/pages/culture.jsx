import React from 'react'
import './pages.css'

function CulturePage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Culture</h1>
        <p>Explore diverse cultures, traditions, and heritage from around the world</p>
      </div>
      
      <div className="page-content">
        <div className="culture-sections">
          <section className="culture-section">
            <h2>Traditional Arts</h2>
            <div className="culture-grid">
              <div className="culture-card">
                <img src="https://via.placeholder.com/250x200" alt="Traditional Art" />
                <h4>Ancient Crafts</h4>
                <p>Discover the beauty of traditional handicrafts and their cultural significance.</p>
              </div>
              <div className="culture-card">
                <img src="https://via.placeholder.com/250x200" alt="Folk Dance" />
                <h4>Folk Dances</h4>
                <p>Experience the rhythm and stories told through traditional folk dances.</p>
              </div>
            </div>
          </section>
          
          <section className="culture-section">
            <h2>Cultural Heritage</h2>
            <div className="culture-grid">
              <div className="culture-card">
                <img src="https://via.placeholder.com/250x200" alt="Heritage Site" />
                <h4>Historic Sites</h4>
                <p>Explore ancient monuments and their historical importance.</p>
              </div>
              <div className="culture-card">
                <img src="https://via.placeholder.com/250x200" alt="Festivals" />
                <h4>Cultural Festivals</h4>
                <p>Celebrate diversity through colorful festivals and traditions.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default CulturePage