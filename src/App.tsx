import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Portfolio from './pages/Portfolio'

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Page Not Found</h1>} />
      <Route path="/react-portfolio" element={<Portfolio type="react" />} />
      <Route path="/angular-portfolio" element={<Portfolio type="angular" />} />
    </Routes>
  )
}

export default App
