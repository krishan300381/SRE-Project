import "./index.css";
import './App.css'
import Navbar from './components/Navbar.jsx';
import FrontPage from './components/FrontPage.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import JobView from "./components/JobView.jsx";


  export default function App() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<FrontPage />} /> 
          <Route path="/" element={<FrontPage />} />
          <Route path="/view/:jobId" element={<JobView />} />
        </Routes>
      </BrowserRouter>
    );
  }
