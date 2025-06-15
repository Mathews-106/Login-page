import React from 'react'
import './pages.css'
import pork from '../assets/Food/pork.jpg'
import eggs from '../assets/Food/eggs.jpg'
import fatulina from '../assets/Food/fatulina.jpg'
import fish from '../assets/Food/fish.jpg'
import unsplash from '../assets/Food/unsplash.jpg'
import chiburger from '../assets/Food/onburger.jpg'
function RecipesPage() {
  const recipes = [
    {
      src: pork,
      alt: 'Pasta Carbonara',
      time: '20 mins',
      servings: '2',
      rating: '4.8/5',
      description: 'Classic Italian pasta with creamy egg sauce'
    },
    {
      src: eggs,
      alt: 'Vegetable Curry',
      time: '35 mins',
      servings: '4',
      rating: '4.5/5',
      description: 'Spicy vegetable curry with coconut milk'
    },
    {
      src: unsplash,
      alt: 'Beef',
      time: '25 mins',
      servings: '3',
      rating: '4.7/5',
      description: 'Juicy beef patty with fresh toppings'
    },
    {
      src: fish,
      alt: 'Fish Salad',
      time: '15 mins',
      servings: '1',
      rating: '4.2/5',
      description: 'Healthy grilled chicken with mixed greens'
    },
    {
      src: fatulina,
      alt: 'Chocolate Cake',
      time: '50 mins',
      servings: '8',
      rating: '4.9/5',
      description: 'Rich and moist chocolate dessert'
    },
    {
      src: chiburger,
      alt: 'Humburger',
      time: '40 mins',
      servings: '2',
      rating: '4.6/5',
      description: 'Fresh homemade sushi with salmon and avocado'
    },
  ]

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Recipes</h1>
        <p>Delicious recipes from around the world</p>
      </div>
      <div className="page-content">
        <div className="recipes-grid">
          {recipes.map((recipe, index) => (
            <div className="recipe-card" key={index}>
              <img src={recipe.src} alt={recipe.alt} />
              <div className="recipe-info">
                <h3>{recipe.alt}</h3>
                <p>{recipe.description}</p>
                <div className="recipe-meta">
                  <span>⏱️ {recipe.time}</span>
                  <span>👥 {recipe.servings} servings</span>
                  <span>⭐ {recipe.rating}</span>
                  <br />
                  <button>View Recipe</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RecipesPage