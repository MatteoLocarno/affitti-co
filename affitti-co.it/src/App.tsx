import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ChiEDoveSiamo from './pages/chi-e-dove-siamo'
import ChiSiamo from './pages/chi-siamo'
import Contatti from './pages/contatti'
import CookiePolicy from './pages/cookie-policy'
import DoveSiamo from './pages/dove-siamo'
import PrivacyPolicy from './pages/privacy-policy'
import TuttiGliImmobili from './pages/tutti-gli-immobili'
import NotFound from './pages/not-found'
import PropertyDetails from './pages/immobili/[id]'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chi-e-dove-siamo" element={<ChiEDoveSiamo />} />
        <Route path="/chi-siamo" element={<ChiSiamo />} />
        <Route path="/contatti" element={<Contatti />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/dove-siamo" element={<DoveSiamo />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/tutti-gli-immobili" element={<TuttiGliImmobili />} />
        <Route path="/immobili/:id" element={<PropertyDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
