import './App.css'
import Home from "./screens/home"
import Session from './screens/session'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import SessionNoCount from './screens/sessionNoSession'

const App = () => {
    return (
      <Router basename='/adjelritimos-share-code.onrender.com//'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/session" element={<Session />} />
            <Route path="/nocountsession" element={<SessionNoCount />} />
          </Routes>
      </Router>
    )
  }

export default App