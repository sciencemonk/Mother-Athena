import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Index from "./pages/Index"
import Privacy from "./pages/Privacy"
import Dashboard from "./pages/Dashboard"
import "./App.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App