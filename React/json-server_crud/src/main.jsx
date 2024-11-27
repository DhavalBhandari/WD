import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Jsoncrud from './Jsoncrud.jsx'
import Adduser from './Adduser.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Jsoncrud /> */}
    <Router>
      <Routes>
      <Route path="/" element={<Jsoncrud />} />
        <Route path="/add-user" element={<Adduser />} />
        <Route path="/adds" element={<Jsoncrud />} />

      </Routes>
    </Router>
  </StrictMode>
)
