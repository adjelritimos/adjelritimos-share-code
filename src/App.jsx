import './App.css'
import Home from "./screens/home"
import Session from './screens/session'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import SessionNoCount from './screens/sessionNoSession'

const App = () => {
    return (
      <Router>
          <Routes>
            <Route path="/adjelritimos-share-code/" element={<Home />} />
            <Route path="/adjelritimos-share-code/session" element={<Session />} />
            <Route path="/adjelritimos-share-code/nocountsession" element={<SessionNoCount />} />
          </Routes>
      </Router>
    )
  }

export default App