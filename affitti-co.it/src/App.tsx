import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contatti from './pages/Contatti'
import ChiSiamo from './pages/ChiSiamo'
import DoveSiamo from './pages/DoveSiamo'
import ChiEDoveSiamo from './pages/ChiEDoveSiamo'
import Immobili from './pages/Immobili'
import TuttiGliImmobili from './pages/TuttiGliImmobili'
import Immobile from './pages/Immobile'
import CookiePolicy from './pages/CookiePolicy'
import PrivacyPolicy from './pages/PrivacyPolicy'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contatti" element={<Contatti />} />
          <Route path="/chi-siamo" element={<ChiSiamo />} />
          <Route path="/dove-siamo" element={<DoveSiamo />} />
          <Route path="/chi-e-dove-siamo" element={<ChiEDoveSiamo />} />
          <Route path="/immobili" element={<Immobili />} />
          <Route path="/tutti-gli-immobili" element={<TuttiGliImmobili />} />
          <Route path="/immobile/:id" element={<Immobile />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
