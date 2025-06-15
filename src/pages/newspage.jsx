import React from 'react'
import './pages.css'

function NewsPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>News</h1>
        <p>Stay updated with the latest news and current events</p>
      </div>
      
      <div className="page-content">
        <div className="news-grid">
          <article className="news-card">
            <img src="https://via.placeholder.com/300x200" alt="News" />
            <div className="news-content">
              <h3>Breaking News Title</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <span className="news-date">January 15, 2024</span>
            </div>
          </article>
          
          <article className="news-card">
            <img src="https://via.placeholder.com/300x200" alt="News" />
            <div className="news-content">
              <h3>Latest Updates</h3>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <span className="news-date">January 14, 2024</span>
            </div>
          </article>
          
          <article className="news-card">
            <img src="https://via.placeholder.com/300x200" alt="News" />
            <div className="news-content">
              <h3>World Events</h3>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              <span className="news-date">January 13, 2024</span>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}

export default NewsPage