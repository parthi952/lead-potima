import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from "./components/home.tsx"
import About from "./components/about.tsx"
import Services from "./components/service.tsx"
import Contact from "./components/contact.tsx"
import Nave from "./components/nave.tsx"
import Fooder from "./components/fooder.tsx"
function App() {
  return (
    <Router>
      <>
        <Nave />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Fooder />
      </>
    </Router>
  )
}

export default App
