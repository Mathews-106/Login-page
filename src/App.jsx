import Navbar from "./Components/Navbar/Navbar.jsx"
import Body from "./Components/Body/Body.jsx"
import Skills from "./Components/Body/Skills.jsx"
import GuoteSection from "./Components/Body/GuoteSection.jsx"
import ChiefsSection from "./Components/Body/ChiefsSection.jsx"
import Footer from "./Components/Footer/Footer.jsx"

function App() {
  return (
    <div>
      <>
      <Navbar />
      <Body />
      <Skills />
    <GuoteSection />
    <ChiefsSection />
    <div>
      <Footer />
    </div>
      </>
    </div>
  )
}

export default App
