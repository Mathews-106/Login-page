import React from 'react' 
import HomePage from './Homepage.jsx'
import Navbar from "./Components/Navbar/Navbar.jsx"
import Footer from "./Components/Footer/Footer.jsx"
import NewsPage from "./pages/newspage.jsx"
import CulturePage from "./pages/culture.jsx"
import lifestylePage from "./pages/lifestyle.jsx"
import RecipesPage from "./pages/recipe.jsx"
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/news' element={<NewsPage/>} />
        <Route path='/culture' element={<CulturePage/>} />
        <Route path='/lifestyle' element={<lifestylePage/>} />
        <Route path='/recipes' element={<RecipesPage/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App