import React from 'react'
import './pages.css'

function LifestylePage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Lifestyle</h1>
        <p>Tips and inspiration for living your best life</p>
      </div>
      
      <div className="page-content">
        <div className="lifestyle-categories">
          <div className="lifestyle-category">
            <h2>Health & Wellness</h2>
            <div className="lifestyle-cards">
              <div className="lifestyle-card">
                <img src="https://via.placeholder.com/300x200" alt="Health" />
                <h4>Mental Health Tips</h4>
                <p>Simple strategies to maintain good mental health and well-being.</p>
              </div>
              <div className="lifestyle-card">
                <img src="https://via.placeholder.com/300x200" alt="Nutrition" />
                <h4>Healthy Eating</h4>
                <p>Nutritious meal ideas and dietary tips for a healthier lifestyle.</p>
              </div>
            </div>
          </div>
          
          <div className="lifestyle-category">
            <h2>Fitness & Exercise</h2>
            <div className="lifestyle-cards">
              <div className="lifestyle-card">
                <img src="https://via.placeholder.com/300x200" alt="Fitness" />
                <h4>Home Workouts</h4>
                <p>Effective exercise routines you can do from the comfort of your home.</p>
              </div>
              <div className="lifestyle-card">
                <img src="https://via.placeholder.com/300x200" alt="Yoga" />
                <h4>Yoga & Meditation</h4>
                <p>Find inner peace and flexibility through yoga and meditation practices.</p>
              </div>
            </div>
          </div>
          
          <div className="lifestyle-category">
            <h2>Travel & Adventure</h2>
            <div className="lifestyle-cards">
              <div className="lifestyle-card">
                <img src="https://via.placeholder.com/300x200" alt="Travel" />
                <h4>Travel Destinations</h4>
                <p>Discover amazing places to visit and create unforgettable memories.</p>
              </div>
              <div className="lifestyle-card">
                <img src="https://via.placeholder.com/300x200" alt="Adventure" />
                <h4>Adventure Sports</h4>
                <p>Thrilling activities for adrenaline seekers and adventure enthusiasts.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LifestylePage